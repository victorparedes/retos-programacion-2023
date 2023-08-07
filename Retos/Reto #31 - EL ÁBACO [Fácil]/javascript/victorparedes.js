const obtenerDigitoDeLinea = (linea)=>{
    return linea.split("---")[0].length
}

const esNumeroInvalido = (valorAValidad)=>{
    return valorAValidad.length != 7
}

const formatearConPuntosDecimales = (valor)=>{
    return new Intl.NumberFormat("es-ES").format(valor)
}

const abaco = (inputValue)=>{
    if (esNumeroInvalido(inputValue))
        return "numero invalido"

    var acumulado = ""
    inputValue.map((linea)=>{
        acumulado = acumulado + obtenerDigitoDeLinea(linea)
    })
    
    return formatearConPuntosDecimales(acumulado)
}

const input = [
    "O---OOOOOOOO",
    "OOO---OOOOOO",
    "---OOOOOOOOO",
    "OO---OOOOOOO",
    "OOOOOOO---OO",
    "OOOOOOOOO---",
    "---OOOOOOOOO"
]

const result = abaco(input)

console.log(result)
