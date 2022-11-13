module.exports = { productMaping, nameMaping, adressMaping, getAllInfoFromAllPages, getAllProductsFromAllPages, getAllNamesFromAllPages, getAllAdressesFromAllPages
}

const { Console } = require('console')
const { data } = require('jquery')
const XLSX = require('xlsx')

const workBook = XLSX.readFile('../database/database.xlsx')


// sheet selector
let index = 0
let workSheet = workBook.Sheets[workBook.SheetNames[1]]

let counter = 0

// database
let database = {
    products : [ ],
    names : [ ],
    adresses : [ ]
}

database.products.push('test')

console.log(database.products)


function getAllInfoFromAllPages() {
    let sheetNames = workBook.SheetNames
    for (let index = 0; index < sheetNames.length; index++) {
        console.log(index)
        let workSheet = workBook.Sheets[workBook.SheetNames[index]]
        getAllProductsFromAllPages(workSheet)
        getAllNamesFromAllPages(workSheet)
        getAllAdressesFromAllPages(workSheet)
    }
    return database
}
 getAllInfoFromAllPages()

function getAllProductsFromAllPages(workSheet) {

    for (let i = 0; i < 40; i++) {
        if (workSheet[`G${i}`]) {
            const products = workSheet[`G${i}`].v
            database.products.push(products)
        }
    }
}
function getAllNamesFromAllPages(workSheet) {
    for (let i = 0; i < 40; i++) {
        if (workSheet[`A${i}`]) {
            const inMemory = workSheet[`A${i}`].v
            database.names.push(inMemory)
        }
    }
}

function getAllAdressesFromAllPages(workSheet) {
    for (let i = 0; i < 40; i++) {
        if (workSheet[`H${i}`]) {
            const inMemory = workSheet[`H${i}`].v
            database.adresses.push(inMemory)
        }
    }
}

//for each sheat map, products and adresses and store them locally


function productMaping() {
    let products = []
    for (let i = 2; i < 20; i++) {
        if (workSheet[`G${i}`]) {
            const id = workSheet[`G${i}`].v
            console.log(id)
            counter += 1
            products.push(id)
        }
    } return products
}

function nameMaping() {
    debugger
    let names = []
    for (let index = 2; index < 20; index++) {
        if (workSheet[`A${index}`]) {
            const id = workSheet[`A${index}`].v
            names.push(id)
        }
    } return names
}

function adressMaping() {
    let adress = []
    for (let index = 2; index < 20; index++) {
        if (workSheet[`H${index}`]) {
            const id = workSheet[`H${index}`].v
            adress.push(id)
        }
    } return adress
}