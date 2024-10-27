const prompt = require("prompt-sync")({ sigint: true })

let carne = 1800
let pollo = 1500
let vegetariana = 1200

let precioJamon = 30
let precioQueso = 25
let precioSalsa = 5
let precioMayonesa = 5
let precioMostaza = 5
let precioTomate = 15
let precioLechuga = 10
let precioCebolla = 10

function pedido() {

    tipoHamburguesa = parseInt(prompt("Elija el tipo de hamburguesa (1. Carne, 2. Pollo, 3. Vegetariana): "))
    if (tipoHamburguesa === 1) {
        precioHamburguesa = carne
    }else if (tipoHamburguesa === 2) {
        precioHamburguesa = pollo
    }else if (tipoHamburguesa === 3) {
        precioHamburguesa = vegetariana
    }else{
        console.log("Por favor, elija uno de los numeros (1,2,3)")
        return
    }
    
    console.log("Adicionales:")

    jamon = prompt("Jamon (si/no): ")
    if (jamon === "si") {
        precioJamon = precioJamon
    }else if(jamon === "no"){
        precioJamon = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    queso = prompt("Queso (si/no): ")
    if (queso === "si") {
        precioQueso = precioQueso
    }else if(queso === "no"){
        precioqueso = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    salsa = prompt("Salsa de tomate (si/no): ")
    if (salsa === "si") {
        precioSalsa = precioSalsa
    }else if(salsa === "no"){
        precioSalsa = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    mayonesa = prompt("Mayonesa (si/no): ")
    if (mayonesa === "si") {
        precioMayonesa = precioMayonesa
    }else if(mayonesa === "no"){
        precioMayonesa = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    mostaza = prompt("Mostaza (si/no): ")
    if (mostaza === "si") {
        precioMostaza = precioMostaza
    }else if(mostaza === "no"){
        precioMostaza = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    tomate = prompt("Tomate (si/no): ")
    if (tomate === "si") {
        precioTomate = precioTomate
    }else if(tomate === "no"){
        precioTomate = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    lechuga = prompt("Lechuga (si/no): ")
    if (lechuga === "si") {
        precioLechuga = precioLechuga
    }else if(lechuga === "no"){
        precioLechuga = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    cebolla = prompt("Cebolla (si/no): ")
    if (cebolla === "si") {
        precioCebolla = precioCebolla
    }else if(cebolla === "no"){
        precioCebolla = 0
    }else{
        console.log("Por favor, elija entre si o no")
        return
    }

    let total = precioHamburguesa + precioJamon + precioQueso + precioSalsa + precioMayonesa + precioMostaza + precioTomate + precioLechuga + precioCebolla
    let usuario = prompt("Escriba su nombre y apellido: ")
    console.log(`Estimado ${usuario}, el monto total a pagar es de $${total}`)


// PLUS - Estaba pensando, y como hago para que el personal de la cocina pueda ver lo que tienen que preparar? con un poco de ayuda de chatGPT pude hacer esto.

    console.log("")
    console.log("Pedido para la cocina");
    console.log(`Tipo de Hamburguesa: ${tipoHamburguesa}`);
    console.log("Adicionales:");
    
    if (jamon === "si") console.log("- Jamon");
    if (queso === "si") console.log("- Queso");
    if (salsa === "si") console.log("- Salsa de Tomate");
    if (mayonesa === "si") console.log("- Mayonesa");
    if (mostaza === "si") console.log("- Mostaza");
    if (tomate === "si") console.log("- Tomate");
    if (lechuga === "si") console.log("- Lechuga");
    if (cebolla === "si") console.log("- Cebolla");
}

pedido()
