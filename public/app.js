const fs = require('fs')
const XLSX = require('xlsx')

const workBook = XLSX.readFile('../database/database.xlsx')

let workSheet = workBook.Sheets[workBook.SheetNames[1]]

let entries = 0


for (let index = 2; index < 20; index++) {
    if (workSheet[`A${index}`]) {
        const id = workSheet[`A${index}`].v
        entries += 1
        console.log(id)
    }

    // const element = array[index];

}




// for(const sheetName of workBook.SheetNames){
//     console.log(worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName]))
//     worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheet[sheetName])
// }