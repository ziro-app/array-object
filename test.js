const test = require('ava')
const arrayObject = require('./index')

const normalSheets = {values:[["nome","idade"],["João","24"],["Bruno","30"]]}

test('Receive an normal sheets data', t => {
    const result = arrayObject(normalSheets)
    const expected = [{nome: "João", idade: 24}, {nome: "Bruno", idade: 30}]
    console.log('Receive an normal sheets data')
    console.log(result)
    console.log(expected)
    t.deepEqual(result, expected)
})