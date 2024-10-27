const prompt = require("prompt-sync")({ sigint: true })

function upperConverter(){
    nombre = prompt("Escriba su nombre: ").toUpperCase()
    console.log(nombre)
}

function dataType(){
    dataso = typeof(parseInt(prompt("Cuantos mundiales tiene Argentina: ")))
    dataso2 = typeof(prompt("Los gano legalmente?:  ")) //Obvio que si, es solo para la consigna. aguante messi
    console.log(dataso)
    console.log(dataso2)
}

function dogAge(){  //esto de que los perros tienen 7 años por 1 nuestro me parece ridiculo, si un perro llega a los 20 años? quien vive 140 años? jaja
    edad = parseInt(prompt("Cuantos años tiene tu pichicho?: "))
    edadPerruna = edad * 7
    console.log(`Tu pichicho tiene ${edadPerruna} años.`)
}

function hourPrice(){
    salario = parseInt(prompt("Indique su salario: "))
    dias = parseInt(prompt("Indique cuantos dias suele trabajar por mes: "))
    horas = parseInt(prompt("Indique cuantas horas por dia trabaja regularmente: "))
    let precioHora = ( salario / dias ) / horas 
    console.log(`Por hora te pagan ${precioHora}`)
}
module.exports = {upperConverter, dataType, dogAge, hourPrice}

upperConverter()
dataType()
dogAge()
hourPrice()