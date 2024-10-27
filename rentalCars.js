const prompt = require("prompt-sync")({ sigint: true })

let compacto = 14000
let mediano = 17000
let camioneta = 28000

let sillaSi = 1200
let sillaNo = 0

function rentalCar() {
    tipoVehiculo = prompt("Elija el tipo de vehiculo (compacto/mediano/camioneta): ")
    if (tipoVehiculo === "compacto") {
        costoVehiculo = compacto
    }else if(tipoVehiculo === "mediano") {
        costoVehiculo = mediano
    }else if(tipoVehiculo === "camioneta") {
        costoVehiculo = camioneta
    }else{
        console.log("Invalido, ingrese una de las opciones mostradas (compacto/mediano/camioneta).")
        return
    }

    sillaBebe = prompt("Añadir silla para bebe (si/no): ")
    if (sillaBebe === "si") {
        costoSilla = sillaSi
    }else if(sillaBebe === "no"){
        costoSilla = sillaNo
    }else{
        console.log("Invalido, ingrese una de las opciones mostradas (si/no).")
        return
    }

    diasAlquiler = parseInt(prompt("Indique la cantidad de dias de alquiler (1/2/3, etc): "))
    let total =  (costoVehiculo + costoSilla) * diasAlquiler
    console.log(`Estimado cliente: en base al tipo de vehiculo ${tipoVehiculo}, eligiendo ${sillaBebe} tener silla para bebe, considerando los ${diasAlquiler} dias utilizados, el monto total a pagar es de $${total}`)
}

rentalCar()