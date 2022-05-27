function saludo (){
    alert("HOLA MUNDO ESTO ES JS")
}

function suma(){

var A;
var B;
var suma;


alert("ESTE SISTEMA REALIZA UNA SUMA")

A = parseInt(prompt("Ingrese el primer valor: "));
B = parseInt(prompt("Ingrese el segundo valor: "));

suma = A + B;

alert("El resultado de la suma es: " + suma)

}

function resta(){

    var A;
    var B;
    var resta;

    alert("ESTE SISTEMA REALIZA UNA RESTA")

    A = parseInt(prompt("Ingrese el primer valor: "));
    B = parseInt(prompt("Ingrese el segundo valor: "));
    
    resta = A - B;
    
    alert("El resultado de la resta es: " + resta)

}

function mult(){

    var A;
    var B;
    var mult;

    alert("ESTE SISTEMA REALIZA UNA MULTIPLICACION")

    A = parseInt(prompt("Ingrese el primer valor: "));
    B = parseInt(prompt("Ingrese el segundo valor: "));
    
    mult = A * B;
    
    alert("El resultado de la multiplicacion es: " + mult)

}

function div(){

    var A;
    var B;
    var div;

    alert("ESTE SISTEMA REALIZA UNA DIVISION")

    A = parseInt(prompt("Ingrese el primer valor: "));
    B = parseInt(prompt("Ingrese el segundo valor: "));
    
    div = A / B;
    
    alert("El resultado de la division es: " + div)

}



function pulgadas(){

    var VP;
    var CM;
    var M;
    var KM;

    alert ("ESTE SISTEMA REALIZA UNA CONVERSION DE PULGADAS A CM,M,KM")

    VP = parseInt(prompt("Ingrese el valor en pulgadas: "));
    
    CM = VP * 2.54;
    M = VP / 39.37;
    KM = VP / 39370;

    alert("El resultado de la conversion de pulgadas a CM es: " + CM )
    alert("El resultado de la conversion de pulgadas a M es: " + M )
    alert("El resultado de la conversion de pulgadas a KM es: " + KM )


}


function cuadrado (){

    var A;
    var B;

    alert ("ESTE SISTEMA REALIZA EL CALCULO DE UN CUADRADO DE UN NUMERO")

    A = parseInt(prompt("Ingrese el valor en a cacular: "));

    B = A * A; 
    
    alert("El cuadrado del numero es: " + B)
}

function area (){

    var A;
    var B;
    var C;

    alert ("ESTE SISTEMA REALIZA EL CALCULO DEL AREA DE UN TRIANGULO")

    A = parseInt(prompt("Ingrese el valor de la altura: "));
    B = parseInt(prompt("Ingrese el valor de la base: "));

    C = A * B / 2; 
    
    alert("El area de un triangulo es: " + C)
}

function aprobo (){

    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;

    alert ("ESTE SISTEMA REALIZA EL CALCULO SI UN ALUMNO APRUEBA O NO")

    A = parseInt(prompt("Ingrese el valor de la primera nota: "));
    B = parseInt(prompt("Ingrese el valor de la segunda nota: "));
    C = parseInt(prompt("Ingrese el valor de la tercera nota: "));
    D = parseInt(prompt("Ingrese el valor de la cuarta nota: "));
    E = parseInt(prompt("Ingrese el valor de la quinta nota: "));
    F = parseInt(prompt("Ingrese el valor de la sexta nota: "));
    G = parseInt(prompt("Ingrese el valor de la septima nota: "));

    H = A+B+C+D+E+F+G 
    I = H / 7 

    if (H <= 6.2) {

        alert("usted reprobo la materia con una nota de: " + I)
        
      } else {
        
        alert("usted aprobo la materia con una nota de: " + I)

      }

}


function numero (){

    var A;
    var B;
    var C;

    alert ("ESTE SISTEMA REALIZA EL CALCULO ENTRE TRES VALORES IDENTFICANDO EL MENOR")

    A = parseInt(prompt("Ingrese el primer valor a comparar: "));
    B = parseInt(prompt("Ingrese el segundo valor a comparar: "));
    C = parseInt(prompt("Ingrese el tercer valor a comparar: "));

    if ((A = B) && (A = C)) {

    alert("Todos los numeros son iguales")

} else if((A<B) && (A<C)){


    alert("El valor menor es: " + A)

} else if ((B<A) && (B<C)){

    alert("El valor menor es: " + B)


} else ((C<A) && (C<B))

    alert("El valor menor es: " + C)
}


function numeroM (){

    var A;
    var B;
    

    alert ("ESTE SISTEMA REALIZA EL CALCULO ENTRE DOS VALORES IDENTFICANDO EL MAYOR")

    A = parseInt(prompt("Ingrese el primer valor a comparar: "));
    B = parseInt(prompt("Ingrese el segundo valor a comparar: "));


    if (A = B) {

    alert("Todos los numeros son iguales")

} else if(A>B) {

    alert("El valor mayor es: " + A)

} else {


}

    alert("El valor mayor es: " + B)


}


function manzanas (){

    var TOTAL;
    var KILO;
    var PRECIO;
    var VALORTOTAL;
    var DESCUENTO;

    alert ("ESTE SISTEMA REALIZA EL CALCULO DEL DESCUENTO DE UNA FRUTERIA Y VENTA DE MANZANAS")

    KILO = parseInt(prompt("Ingrese cuantos kilos de manzana va a llevar: "));
    
    PRECIO = KILO*4500
    if (KILO<= 2) {

    alert("Usted no tiene descuento")

} else if (KILO<=5) {

    TOTAL = KILO * 4500
    DESCUENTO= TOTAL * 0.10
    VALORTOTAL = TOTAL - DESCUENTO
    alert("Se aplio un 10% de descuento")
    alert("El total de su compra es: " + TOTAL)
    alert("El descuento es de: " + DESCUENTO)
    alert("El total a pagar es de: " + VALORTOTAL)



} else if (KILO<= 10){

    TOTAL = KILO * 4500
    DESCUENTO= TOTAL * 0.15
    VALORTOTAL = TOTAL - DESCUENTO
    alert("Se aplio un 15% de descuento")
    alert("El total de su compra es: " + TOTAL)
    alert("El descuento es de: " + DESCUENTO)
    alert("El total a pagar es de: " + VALORTOTAL)


} else KILO>10


    TOTAL = KILO * 4500
    DESCUENTO= TOTAL * 0.20
    VALORTOTAL = TOTAL - DESCUENTO
    alert("Se aplio un 20% de descuento")
    alert("El total de su compra es: " + TOTAL)
    alert("El descuento es de: " + DESCUENTO)
    alert("El total a pagar es de: " + VALORTOTAL)

}






