let definition =
      {"dataSource":{"type":"IntegrationProcedures","value":{"dsDelay":0,"resultVar":"[\"Account\"]","ipMethod":"gearset_getMasterAccountDetails","vlocityAsync":false,"inputMap":{"AccountId":"{recordId}"}},"orderBy":{"name":"","isReverse":false},"contextVariables":[]},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfGearsetMasterAccount_8_Gearset","Id":"0Rb8d000000hOLsCAM","MasterLabel":"cfGearsetMasterAccount_8_Gearset","NamespacePrefix":"c","ManageableState":"unmanaged"},"osSupport":true,"states":[{"actions":[],"childCards":["gearsetWeather"],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Icon","key":"element_element_element_block_0_0_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_element_block_0_0_block_0_0","property":{"extraclass":"","iconName":"utility:company","iconType":"Custom","imgsrc":"https://yt3.ggpht.com/ytc/AKedOLQfXUEr7S8IckJSpgzCjDFxgpNqpTkh5IY9XXfRDw=s900-c-k-c0x00ffffff-no-rj","record":"{record}","size":"large","variant":"default"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left slds-p-around_x-small slds-p-bottom_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"},{"label":"bottom:medium","size":"medium","type":"bottom"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"left","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Icon Header-Text-1","key":"element_element_element_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_large%22%3E%3Cspan%20style=%22color:%20#ffffff;%22%3E%3Cstrong%20class=%22slds-text-heading_small%22%3E%7BName%7D%7BAccountName%7D%3C/strong%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"9","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_small slds-p-bottom_medium slds-m-right_x-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:x-large","size":"x-large","type":"right"}],"padding":[{"label":"around:small","size":"small","type":"around"},{"label":"bottom:medium","size":"medium","type":"bottom"}],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Icon Header","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#3A6D9D","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#3A6D9D;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3E%3Cspan%20style=%22font-size:%2010pt;%22%3EPrimary%20Contact%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%7Bvlocity_ins__PrimaryContactId__r.Name%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-top_small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"},{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-2","key":"element_element_block_0_0_outputField_2_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3EWebsite%3C/div%3E%0A%3Cdiv%3E%7BWebsite%7D%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"selectedStyles":"AccountFieldsStyle","size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"sizeClass":"slds-large-size_12-of-12  slds-medium-size_6-of-12  slds-small-size_6-of-12  slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-3","key":"element_element_block_0_0_outputField_3_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3EPhone%3C/div%3E%0A%3Cdiv%3E%7BPhone%7D%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"selectedStyles":"AccountFieldsStyle","size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"sizeClass":"slds-large-size_12-of-12  slds-medium-size_6-of-12  slds-small-size_6-of-12  slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-4","key":"element_element_block_0_0_outputField_4_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3E%3Cspan%20style=%22font-size:%2013.3333px;%22%3EBILLING%20STREET%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%7BBillingStreet%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-top_small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"},{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-5","key":"element_element_block_0_0_outputField_5_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3EBilling%20ZIP%20CODE%3C/div%3E%0A%3Cdiv%20class=%22slds-text-body_regular%22%3E%7BBillingPostalCode%7D%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"selectedStyles":"AccountFieldsStyle","size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"sizeClass":"slds-large-size_12-of-12  slds-medium-size_6-of-12  slds-small-size_6-of-12  slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-6","key":"element_element_block_0_0_outputField_6_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3EDescription%3C/div%3E%0A%3Cdiv%20class=%22slds-text-body_regular%22%3E%7BSicDesc%7D%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"selectedStyles":"AccountFieldsStyle","size":{"default":"6","isResponsive":true,"large":"12","medium":"6","small":"6"},"sizeClass":"slds-large-size_12-of-12  slds-medium-size_6-of-12  slds-small-size_6-of-12  slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-Text-7","key":"element_element_block_0_0_outputField_7_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3E%3Cspan%20style=%22font-size:%2013.3333px;%22%3ELAST%20MODIFIED%20DATE%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%7BLastModifiedDate%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-top_small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"},{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-AnnualRevenue-8","key":"element_element_block_0_0_outputField_8_0","name":"AnnualRevenue","parentElementKey":"element_block_0_0","property":{"card":"{card}","currency":"GBP","fieldName":"AnnualRevenue","label":"AnnualRevenue","locale":"en-GB","placeholder":"output","record":"{record}","type":"currency"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small slds-m-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:x-small","size":"x-small","type":"around"}],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"field"},{"class":"slds-col ","element":"outputField","elementLabel":"Account-AnnualRevenue-8-clone-0","key":"element_element_block_0_0_outputField_9_0","name":"AnnualRevenue","parentElementKey":"element_block_0_0","property":{"card":"{card}","currency":"GBP","fieldName":"Totalvalue__c","label":"Total Account Value","locale":"en-GB","placeholder":"No value","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small slds-m-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:x-small","size":"x-small","type":"around"}],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"field"},{"class":"slds-col ","element":"action","elementLabel":"Launch Quote Creator","key":"element_element_block_0_0_action_10_0","name":"Action","parentElementKey":"element_block_0_0","property":{"buttonVariant":"success","card":"{card}","contextId":"\\{Id}","displayAsButton":true,"record":"{record}","stateAction":{"displayName":"Launch Quote Creator","id":"flex-action-1626266925353","isLwcOS":true,"layoutType":"lightning","omniType":{"Id":"a3e4L000000gDGGQA2","Name":"gearset/Quotes/English","isLwcOs":true},"openUrlIn":"New Tab/Window","type":"OmniScript","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Account","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"4","small":"4"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small slds-m-bottom_medium slds-m-horizontal_x-large ","container":{"class":""},"elementStyleProperties":{},"height":"1500px","inlineStyle":"box-shadow:5px 5px 5px grey;\nborder 1px solid #cccccc;","margin":[{"label":"bottom:medium","size":"medium","type":"bottom"},{"label":"horizontal:x-large","size":"x-large","type":"horizontal"}],"maxHeight":"700px","minHeight":"450px","padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"4","small":"4"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_4-of-12 slds-small-size_4-of-12 slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-bottom: #cccccc 1px solid;border-left: #cccccc 1px solid; \n     height:1500px; min-height:450px; max-height:700px;  box-shadow:5px 5px 5px grey;\nborder 1px solid #cccccc;","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true,"styleObjects":[{"key":0,"conditions":"default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small slds-m-bottom_medium slds-m-horizontal_x-large ","container":{"class":""},"elementStyleProperties":{},"height":"1500px","inlineStyle":"box-shadow:5px 5px 5px grey;\nborder 1px solid #cccccc;","margin":[{"label":"bottom:medium","size":"medium","type":"bottom"},{"label":"horizontal:x-large","size":"x-large","type":"horizontal"}],"maxHeight":"700px","minHeight":"450px","padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"4","small":"4"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_4-of-12 slds-small-size_4-of-12 slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-bottom: #cccccc 1px solid;border-left: #cccccc 1px solid; \n     height:1500px; min-height:450px; max-height:700px;  box-shadow:5px 5px 5px grey;\nborder 1px solid #cccccc;","text":{"align":"","color":""}},"label":"Default","name":"Default","conditionString":"","draggable":false}]},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"gearsetWeather","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 "},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[{"type":"gearset","subtype":"Quotes","language":"English"}],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"gearsetMasterAccount","xmlObject":{"apiVersion":48,"isExplicitImport":false,"isExposed":true,"masterLabel":"gearsetMasterAccount","runtimeNamespace":"vlocity_ins","targets":{"target":["lightning__AppPage","lightning__RecordPage","lightning__HomePage"]},"targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX0FwcFBhZ2UiPgogICAgICAgICAgICAgICAgICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+CiAgICAgICAgICAgICAgICAgICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIvPgogICAgICAgICAgICAgICAgICA8L3RhcmdldENvbmZpZz4KICAgICAgICAgICAgICAgICAgPHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX1JlY29yZFBhZ2UiPgogICAgICAgICAgICAgICAgICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+CiAgICAgICAgICAgICAgICAgIDwvdGFyZ2V0Q29uZmlnPg=="},"Id":"a6G8d000000hN0JEAU","vlocity_ins__GlobalKey__c":"gearsetMasterAccount/Gearset/10/1666713263425","vlocity_ins__IsChildCard__c":false};
  export default definition