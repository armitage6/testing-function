// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


let fromDollarToYen = (num) => {
    return num * 127.9
}



let fromYenToPound = (num) => {
    return num * 0.8
}

module.exports = {  fromEuroToDollar,fromDollarToYen,fromYenToPound }