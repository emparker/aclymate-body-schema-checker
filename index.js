const { body, schema } = require("./metaData.js")


const schemaChecker = function(bodyObj, schemaObj){
    for (let [ key ] of Object.entries(schemaObj)){
        if(typeof bodyObj[key] === schemaObj[key].type){
            if(schemaObj[key].required && typeof bodyObj[key] === undefined){
            }
        } else {
            return false
        }
    }
    return true
}
console.log(schemaChecker(body, schema))

