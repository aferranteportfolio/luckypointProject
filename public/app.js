const fs = require('fs')
const { htmlPrefilter } = require('jquery')
const XLSX = require('xlsx')
const express = require('express')
const app = express()

const functionality = require('./functionality')


//db


const PORT = 4001

app.get('/products', (req,res)=>{
    let products = functionality.productMaping()
    res.send(products)
})

app.get('/names', (req,res)=>{
    let names = functionality.nameMaping()
    res.send(names)
})

app.get('/adress', (req,res)=>{
    let adress = functionality.adressMaping()
    res.send(adress)
})
app.get('/getAllInfo', (req,res)=>{
    let info = functionality.getAllInfoFromAllPages()
    res.send(info)
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })




// for(const sheetName of workBook.SheetNames){
//     console.log(worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName]))
//     worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName])
// }