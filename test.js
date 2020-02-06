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

const empty = {values:1245151}

test('Recive a values without a object', t => {
	const error = t.throws(() => {
		arrayObject(empty);
	}, {instanceOf: TypeError});
	t.is(error.message, "values deve ser um objeto");
});

const justHeader = {values:[["a","b","c"]]}

test('Recive header and body', t => {
	const error = t.throws(() => {
		arrayObject(justHeader);
	}, {instanceOf: TypeError});
	t.is(error.message, "values deve ter um cabeçalho e um corpo");
});

const differentColumns = {values:[["a","b","c"],["1","2"]]}

test('Recive a diferent column amount', t => {
	const error = t.throws(() => {
		arrayObject(differentColumns);
	}, {instanceOf: TypeError});
	t.is(error.message, "qtde colunas do cabeçalho deve ser igual a qtde colunas do corpo");
});