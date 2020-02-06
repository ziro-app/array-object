const decimalUsa = require('@ziro/decimal-usa')

const dataSheets = {values:[["nome","sobrenome","idade"],["Ahmad","Forhat","24"],["João","Silva","30"]]}

const arrayObject = ({ values }) => {
    // Trocando o nome das variaveis e condicionais
    let respostaMenorQueDois = "Necessário pelo menos 1 cabeçalho e 1 corpo"
    let respostaTypeOf = "Values não foi identificado como objeto"
    let resBodyEqualHeader = "Número de colunas deve ser igual em toda tabela"
    let tipoObjeto = typeof values == 'object'
    let temCabecalhoCorpo = values.length >= 2
    // Começo das condicionais e codigo
    if(!tipoObjeto) throw respostaTypeOf
    if(!temCabecalhoCorpo) throw respostaMenorQueDois
    const [header, ...data] = values;
    let columnEqualHeaderBody = header.length === data[0].length
    if(!columnEqualHeaderBody) throw resBodyEqualHeader
      const object = data.map(row => {
      return Object.fromEntries(
        row.map((column, index) => {
          let numbOrString = decimalUsa(row[index])
          if(isNaN(numbOrString)) return [header[index], row[index]]
          return [header[index], numbOrString];
        })
      )
    })
      return object

}

console.log(arrayObject(dataSheets))


module.exports = arrayObject