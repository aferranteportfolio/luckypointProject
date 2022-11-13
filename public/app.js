const fs = require('fs')
const { htmlPrefilter } = require('jquery')
const XLSX = require('xlsx')
const express = require('express')
const app = express()

const functionality = require('./functionality')


const PORT = 4001


let counter = 0

let products = []

app.get('/home', (req,res)=>{
    let products = functionality.productMaping()
    res.send(products)
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })




// for(const sheetName of workBook.SheetNames){
//     console.log(worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName]))
//     worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName])
// }