

// // Maquina expendedora 

// function comprarBebida (){

//     let seguirComprando = true

//     while(seguirComprando){

//         const precioBebida = 2

//         const dinero = prompt("ingresa el dinero")

//         if(dinero >= precioBebida){
//             const cambio = dinero - precioBebida
//             alert("gracias por la compra, aqui tienes tu cambio " + cambio)
//         } else {
//             const dineroFaltante = precioBebida - dinero
//             alert("tu dinero es insuficiente. Necesitas $" + dineroFaltante + " mas para pagar ti bebida")
//         }
//         seguirComprando = confirm("queres seguir comprando?")
//     }
// }

// comprarBebida();


// /////////////////////////////////////////////////////////////////////////////


// // Caja de ahorro

// function ahorroTotal (){

//     let seguirGastando = true

//     while(seguirGastando){

//         const plata = 100
//         const gastos = prompt("carga tu monto de gasto")

//         if(gastos <= plata){
//             const ahorro = plata - gastos
//             alert("te quedan $" + ahorro + " ahorrados")
//         } else {
//             const perdesPlata = gastos - plata
//             alert("Estas perdiendo $" + perdesPlata)
//         }
//         seguirGastando = confirm("Queres seguir gastando?")
//     }
// }

// ahorroTotal();


// ///////////////////////////////////////////////////////////////////////////////


// has hecho una compra y sabes el precio del producto (200) y su iva(21). Haz un script que te calcule el precio total que vas a pagar por tu compra.

// const producto = 200 

// const iva = 21 

// const resultado = producto + iva * 200/100

// console.table("El precio del producto mas el iva es de " + resultado)


///////////////////////////////////////////////////////////////////////////////


// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el area y el perimetro del cuadrado. 
// Lado 40 

// const ladoCuadrado = 40

// const areaCuadrado = ladoCuadrado * ladoCuadrado

// const perimetroCuadrado = ladoCuadrado * 4

// console.log("El area del cuadrado es " + areaCuadrado)
// console.log("El perimetro del cuadrado es " + perimetroCuadrado) 


///////////////////////////////////////////////////////////////////////////////


// En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario


// let nombre = prompt("Escribe tu nombre");

// let saludo = "hola " + nombre;

// console.log(saludo);

///////////////////////////////////////////////////////////////////////////////

// En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

// let numero1 = parseInt(prompt("ingresa tu primer numero"))
// let numero2 = parseInt(prompt("ingresa tu segundo numero"))
// let numero3 = parseInt(prompt("ingresa tu tercer numero"))

// let resultado = (numero1 + numero2 + numero3) / 3

// alert("La media de los numero es " + resultado)

///////////////////////////////////////////////////////////////////////////////

// Escribe un programa que solicite al usuario ingresar el numero de kilometros recorridos por su coche y el numero de litros consumidos. El script debe mostrar el consumo de combustible por kilometro. 


    // let litros = prompt("Escribe los litros consumidos") 
    // let kilometros = prompt("Escribe los kilometros recorridos")

    // litros = parseFloat(litros)
    // kilometros = parseFloat(kilometros)

    // let combustibleConsumido = litros / kilometros

    // console.log("El consumo de combustible por kilometro es de " + combustibleConsumido + ". De los cuales se consumio " + litros + "litros y se recorrieron " + kilometros + "kilometros")

///////////////////////////////////////////////////////////////////////////////


// Cambio de unidades. En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

    // const segundos = 60 

    // let horas = prompt("Escribe tus horas")
    // let minutos = prompt("Escribe tus minutos")

    // horas = parseFloat(horas)
    // minutos = parseFloat(minutos)

    // let horasConvertidas = (horas*segundos*segundos) + (minutos*segundos) 

    // alert("Esas horas y minutos pasados a segundos da " + horasConvertidas)

    ///////////////////////////////////////////////////////////////////////////////

// En este script debes pedir al usuario un numero de dos digitios y debes devolver el numero de unidades y de decenas. Cada digito dle numero. Usa solo operaciones aritmeticas. 


    // let number = parseInt(prompt("Escribi un numero de 2 digitos"))

    // let unidades = number%10
    // let decenas = parseInt(number/10)

    // alert("unidades " + unidades + ". Decenas " + decenas )
    
    ///////////////////////////////////////////////////////////////////////////////

    // Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el numero de comensales calcule las cantidades de ingredientes necesarias.


    // let personas = prompt("escribe la cantidad de personas que asistiran")


    // let patataPorPersona = (personas * 200) / 1000

    // let huevos = patataPorPersona * 5 
    // let cebolla = patataPorPersona * 300

    // alert("la cantidad de papa es " + patataPorPersona + "kg. La cantidad de huevos es " + huevos + "unidades. La cantidad de cebolla es " + cebolla + "gr")


///////////////////////////////////////////////////////////////////////////////

//Este ejercicio es todo un clasico si lo haces a la primera y sin tardar mucho, puede estar seguro: entiendes las variables.
//Tienes que escribir un programa que intercambie e valor de dos variables. Al final la primera variable de tener el valor de la segunda y la segunda el valor de la primera. No vale usar arrays ni asignacion multiple. 




// FUNCIONES 

// Un programa que pida un numero y diga si es positivo o negativo. El cero es considerado positivo 

    // let numero = parseInt(prompt("Escriba su numero"))

    // if (numero >= 0){
    //     console.log("Este numero es positivo")
    // } else {
    //     console.log("Este numero es negativo")
    // }

//////////////////////////////////////////////////////////////

// En este ejercicio debes pedir dos numeros enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la division, sino lanzar un mensaje error

    // let number1 = parseInt(prompt("Escribe un numero"))
    // let number2 = parseInt(prompt("Escribe otro numero"))

    // if( number1 && number2 != 0){
    //     let numberResult = number1 / number2
    //     console.log("El cociente de esos numeros es " + numberResult)
    // } else {
    //     console.log("ERROR")
    // }

////////////////////////////////////////////////////////


// Este script pide al usuario que teclee una letra entre A,B,C,D. Si pulsa la letra A en mayuscula o minuscula le dara el mensajede que ha acertado, en caso contrario le dira que se equivoco.


    // let letra = prompt("Escribi una letra. Puede ser A,B,C y D")

    // if ( letra === "A" || letra === "a" ){
    //     console.log("acertaste!")
    // } else{
    //     console.log("respuesta equivocada")
    // }

///////////////////////////////////////////////////////

// En este ejemplo el usuario debera teclear 2 numeros. Y el programa debe devolver la diferencia entre el mayor y el menor de esos numeros.

    // let usuario1 = prompt("elige un numero")
    // let usuario2 = prompt("elige otro numero")

    
    // if ( usuario1 > usuario2){
    //     let diferencia = usuario1 - usuario2
    //     console.log(diferencia)
    // } else{
    //     let resto = usuario2 - usuario1
    //     console.log(resto)
    // }


//////////////////////////////////////////////////////////

// Este ejercicio dirigira a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino,cerveza,refresco,agua. Si pide una cerveza o vino se le redirige a la barra y si no pues se le dirige a la tienda


    // let pedidoCliente = prompt("Elige entre vino,cerveza,refresco y agua")

    // if( pedidoCliente === "vino" || pedidoCliente === "cerveza") {
    //     console.log("Tienes que ir a la barra para pedir " + pedidoCliente)
    // } else {
    //     console.log("Tienes que ir a la tienda para pedir " + pedidoCliente)
    // }

//////////////////////////////////////////////////////////////

// Este programa te ayudar a viajar. El programa pide al usuario si va a viajar en coche, tren, bicicleta o autobus. Si va en tren o autobus le recorda que lleve el dinero para el billete.


    // let viajeUsuario = prompt("En que vas a viajar?")

    // if(viajeUsuario === "tren" || viajeUsuario === "autobus"){
    //     console.log("Debes llevar dinero para el boleto")
    // } else {
    //     console.log("Suerte en tu viaje en " + viajeUsuario)
    // }

    ///////////////////////////////////////////////////////////////


// En un tramo de un rally los conductores no deben ir ni demasiado rapido ni demasiado lento. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad esta entre 40 y 60km el conductor pasa la prueba en caso contrario es descalificado.


// let tramo = parseInt(prompt("Ingresa la cantidad de kilometros que recorriste"))

// let tiempo = parseInt(prompt("Ingresa la cantidad de tiempo que tardaste"))

// let velocidad = tramo / tiempo

// if(velocidad >= 40 && velocidad <=60){
//     console.log("Has calificado.Tu velocidad es de " + velocidad)
// } else {
//     console.log("Estas descalificado. Tu velocidad es de " + velocidad)
// }

    ///////////////////////////////////////////////////////////////


    // Una tienda aplica un descuento del 15% para las compras que incluyan mas de 10 articulos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el numero de articulos y el precio.

    // let cantidadArticulosPersona = prompt("Ingresa cantidad de prendas")

    // let precioArticuloPersona = prompt("Ingresa precio del articulo")

    // if(cantidadArticulosPersona > 10 && precioArticuloPersona > 40){

    //     let totalSinDescuento = cantidadArticulosPersona * precioArticuloPersona
    //     let descuento = (totalSinDescuento * 15) /100
    //     let precioConDescuento = totalSinDescuento - descuento

    //     console.log("El total con descuento de 15% es de " + precioConDescuento)
    // } else {
    //     console.log("No alcancaste los 10 productos o el precio de 40 euros")
    // }

///////////////////////////////////////////////////////////////

// Crea un programa que pida la nota deun estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dara sera suspenso si la media es menor de 5, aprobado si esta entre 5 y 7 y notable por encima de 7.

let nota1 =parseFloat(prompt("Ingresa primer nota")) 
let nota2 =parseFloat(prompt("Ingresa segunda nota")) 
let nota3 =parseFloat(prompt("Ingresa tercer nota")) 

let promedio = (nota1 + nota2 + nota3 ) / 3

if(promedio > 7 ){
    console.log("Tu promedio es notable")
} else if (promedio >=5 && promedio <= 7){
    console.log("Tu promedio esta aprobado")
} else{
    console.log("Estas suspendido")
}