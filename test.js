const test = require('ava')
const arrayObject = require('./index')

const normalSheets = {values:[["nome","sobrenome","idade"],["Ahmad","Forhat","24"],["João","Silva","30"]]}

test('Recive an normal sheets respose', t => {
    const value = arrayObject(normalSheets)
    const comissionCalculated = value
    const comissionExpected = [{ nome: 'Ahmad', sobrenome: 'Forhat', idade: 24 },{ nome: 'João', sobrenome: 'Silva', idade: 30 }]
      
    t.is(comissionCalculated, comissionExpected)
})

const object = {values:{}}

test('Recive an object without array', t => {
    const value = arrayObject(object)
    const comissionCalculated = value
    const comissionExpected = "Necessário pelo menos 1 cabeçalho e 1 corpo
    t.is(comissionCalculated, comissionExpected)
})

const withoutValues = {valor:[["nome","sobrenome","idade"],["Ahmad","Forhat","24"],["João","Silva","30"]]}

test('Recive an object without values', t => {
    const value = arrayObject(withoutValues)
    const comissionCalculated = value
    const comissionExpected = "Values não foi identificado como objeto"
    t.is(comissionCalculated, comissionExpected)
})

const vazio = {values:[[],[],[]]}

test('Recive a empty array', t => {
    const value = arrayObject(vazio)
    const comissionCalculated = value
    const comissionExpected = [{},{}]
    t.is(comissionCalculated, comissionExpected)
})