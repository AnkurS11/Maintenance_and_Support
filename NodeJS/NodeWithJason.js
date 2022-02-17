const {readFileSync}=require('fs')
var loadjson=()=>JSON.parse(readFileSync('data.json'))
var tickets=readFileSync('data.json')
console.log(JSON.parse(tickets)['records'][0])
module.exports={loadjson};