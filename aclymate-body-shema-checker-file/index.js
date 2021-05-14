const { body, schema } = require("./metaData.js")


const schemaChecker = function(bodyObj, schemaObj){
    for (let [ key ] of Object.entries(schemaObj)){

        if( schemaObj[key].required && bodyObj[key] === undefined ){
            return false
        } else if(!(schemaObj[key].required) && bodyObj[key] === undefined ){
            continue 
        } 
        
        if( schemaObj[key].type === "object" ){
            return schemaChecker(bodyObj[key], schemaObj[key])
        } 
        
        if(!( typeof bodyObj[key] === schemaObj[key].type )){
            return false
        } 
        
    } 
    return true
}

console.log(schemaChecker(body, schema))