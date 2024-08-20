trigger ContactCount on Contact (after insert, after update) {
    Map<Id, List<Contact>> mapAcctIdContactList = new Map<Id, List<Contact>>();
    Map<Id, List<Contact>> mapAcctIdDelContactList = new Map<Id, List<Contact>>();
    Set<Id> AcctIds = new Set<Id>();    
    List<Account> listAcct = new List<Account>();
    //Claudia's developer comment 2
    //more dev comments
    
    if(trigger.isInsert) {
        for(Contact Con : trigger.New) {
            if(String.isNotBlank(Con.AccountId)) {
                if(!mapAcctIdContactList.containsKey(Con.AccountId)) {
                    mapAcctIdContactList.put(Con.AccountId, new List<Contact>());
                }
                mapAcctIdContactList.get(Con.AccountId).add(Con); 
                AcctIds.add(Con.AccountId);
            }   
        }  
    }
    
    if(trigger.isUpdate) {
        for(Contact Con : trigger.New) {
            if(String.isNotBlank(Con.AccountId) && Con.AccountId != trigger.oldMap.get(Con.Id).AccountId) {
                if(!mapAcctIdContactList.containsKey(Con.AccountId)){
                    mapAcctIdContactList.put(Con.AccountId, new List<Contact>());
                }
                mapAcctIdContactList.get(Con.AccountId).add(Con); 
                AcctIds.add(Con.AccountId);
            } else if(String.isBlank(Con.AccountId) && String.isNotBlank(trigger.oldMap.get(Con.Id).AccountId)) {
                if(!mapAcctIdDelContactList.containsKey(Con.AccountId)){
                    mapAcctIdDelContactList.put(Con.AccountId, new List<Contact>());
                }
                mapAcctIdDelContactList.get(Con.AccountId).add(Con);   
                AcctIds.add(trigger.oldMap.get(Con.Id).AccountId);
            }
        }  
    }
       //Comment from Dev1
    if(AcctIds.size() > 0) {
        listAcct = [SELECT Id, Number_of_Contacts__c FROM Account WHERE Id IN : AcctIds];
        
        for(Account acct : listAcct) {
            Integer noOfConts = 0;
            if(mapAcctIdContactList.containsKey(acct.Id)) {
                noOfConts += mapAcctIdContactList.get(acct.Id).size();
            }
            if(mapAcctIdDelContactList.containsKey(acct.Id)) {
                noOfConts -= mapAcctIdDelContactList.get(acct.Id).size();
            }
            acct.Number_of_Contacts__c = acct.Number_of_Contacts__c == null ? noOfConts : (acct.Number_of_Contacts__c + noOfConts);
        }
        
        update listAcct;    
    }
}