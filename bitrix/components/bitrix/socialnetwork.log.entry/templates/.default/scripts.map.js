{"version":3,"sources":["scripts.js"],"names":["window","ENTITY_XML_ID","node_quote_id","author_id","logId","BX","addCustomEvent","obj","data","container","hasChildNodes","node","firstChild","id","getAttribute","replace","onCustomEvent","top","nextSibling","mplCheckForQuote","bind","e","this","comm","commFormat","anchor_id","ratingNode","Math","floor","random","message","you_like_class","you_like_text","vote_text","create","props","className","html","attrs","children","style","display","title","href","parseInt","innerHTML","xmlId","reply","__logShowHiddenDestination","log_id","created_by_id","bindElement","ajax","runAction","params","createdById","pathToUser","pathToWorkgroup","pathToDepartment","nameTemplate","showLogin","destinationLimit","then","response","destinationList","type","isNotEmptyObject","containerNode","parentNode","removeChild","url","key","hasOwnProperty","isNotEmptyString","appendChild","suffix","__logSetFollow","Livefeed","FeedInstance","changeFollow","__logRefreshEntry","entryNode","undefined","method","dataType","action","onsuccess","cleanNode","ob","processHTML","scripts","SCRIPT","processScripts","onfailure","__logEditComment","entityXmlId","postId","commentId","responseData","eventData","messageBBCode","messageFields","arFiles","UF","UF_SONET_COM_FILE","VALUE","UF_SONET_COM_DOC","USER_TYPE_ID","arDocs","arDFiles","UC","SLEC","formKey","entitiesCorrespondence","sourceId","SocialnetworkLogEntry","registerViewAreaList","containerId","viewAreaList","findChildren","tag","fullContentArea","i","length","fullContentClassName","findChild","UserContentView","registerViewArea"],"mappings":"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","file":"scripts.map.js"}