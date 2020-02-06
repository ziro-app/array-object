const test = require('ava')
const arrayObject = require('./index')

const normalSheets = {values:[["idade"],["24"],["30"]]}

test('Recive an normal sheets respose', t => {
    const value = arrayObject(normalSheets)
    const transformation = value
    const objectExpected =    [
    {
      idade: 24,
    },
    {
      idade: 30,
    },
  ]
    t.is(transformation, objectExpected)
})