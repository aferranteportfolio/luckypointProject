module.exports = {productMaping}

const XLSX = require('xlsx')

const workBook = XLSX.readFile('../database/database.xlsx')


// sheet selector
let workSheet = workBook.Sheets[workBook.SheetNames[1]]

let counter = 0



function productMaping(){
let products = []
for (let index = 2; index < 20; index++) {
    if (workSheet[`G${index}`]) {
        const id = workSheet[`G${index}`].v
        counter += 1
        products.push(id)
    }
} return products
}