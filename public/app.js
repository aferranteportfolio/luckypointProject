const fs = require('fs')
const { htmlPrefilter } = require('jquery')
const XLSX = require('xlsx')
const express = require('express')

const app = express()

const PORT = 4001


const workBook = XLSX.readFile('../database/database.xlsx')

let workSheet = workBook.Sheets[workBook.SheetNames[1]]

let entries = 0

let products = []

for (let index = 2; index < 20; index++) {
    if (workSheet[`G${index}`]) {
        const id = workSheet[`G${index}`].v
        entries += 1
        products.push(id)
    }

    // const element = array[index];

}

app.get('/home', (req,res)=>{
    res.send(products)
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })




// for(const sheetName of workBook.SheetNames){
//     console.log(worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName]))
//     worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName])
// }