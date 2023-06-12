const USER = "Joaquin"
const PASS = "Joaco14"

let usuario
let contrasenia

let intentos = 0

do{
    usuario = prompt("Ingrese su usuario")
    contrasenia = prompt("Ingrese su contraseña")
    intentos++

}while (intentos < 3 && ((USER !== usuario) || (PASS !==contrasenia)))

if ((USER === usuario) && (PASS === contrasenia)) {
    alert("BIENVENIDO " + usuario)
} else {
    alert("Usuario o contraseña incorrecto/s")
}


let numero1 = Number(prompt("Ingrese un numerito"))
let numero2 = Number(prompt("Ingrese otro numerito"))
let opcion
let mensaje = "1 para sumar los numeros\n2 para restar los numeros\n0 para salir"

let borrar = false
do{
    do {
        opcion = Number(prompt(mensaje))
    } while (isNaN(opcion) || opcion < 0 || opcion > 2)

    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
        alert("La suma de los numeros es: " + (numero1 + numero2))
    } else if (opcion === 2) {
        alert("La diferencia entre los numeros es: " + (numero1 - numero2))
    }
} while (opcion !== 0)

function nombreCompleto(nombre, apellido) {
 console.log(nombre + " " + apellido)
}

let nombre = prompt("Ingrese nombreee")
let apellido = prompt("Ingrese apellidoo")
nombreCompleto(nombre, apellido)


console.log("FEEEN")