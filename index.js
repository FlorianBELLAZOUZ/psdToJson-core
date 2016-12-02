const fs = require('fs')

exports.init = generator=>{
  generator
    .getDocumentInfo()
    .then(saveToJson)
    .catch(console.log)
}

const stringify = doc=>JSON.stringify({doc},0,2)
const saveToJson = doc=>fs.writeFile('export.json',stringify(doc))
