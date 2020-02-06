const decimalUsa = require('@ziro/decimal-usa')

const arrayObject = ({ values }) => {
    let respostaMenorQueDois = "Necessário pelo menos 1 cabeçalho e 1 corpo"
    let respostaTypeOf = "Values não foi identificado como objeto"
    let resBodyEqualHeader = "Número de colunas deve ser igual em toda tabela"
    let tipoObjeto = typeof values === 'object'
    if(!tipoObjeto) throw respostaTypeOf
    let temCabecalhoCorpo = values.length >= 2
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

module.exports = arrayObject