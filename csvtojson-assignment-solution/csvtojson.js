const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const csvPath = __dirname + '/customer-data.csv'

const convert = (csvPath)=>{
  let buff = []

  csv().fromFile(csvPath).on('json', (data)=>{
    buff.push(data)
  }).on('end', (error)=>{
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(buff, null, 2)) 
  })
}

convert(csvPath)
