function a(){ // Se define la función a()
    return 35; // returna 25
}
console.log(a()) // la función es llamada con un console.log

// OUTPUT : 35

//

    // Ejercicio Uno

//

function a(){ // Se define la función a()
    return 4; // Retruna 4
}
console.log(a()+a()); // la función es llamada con un console.log -> 4 + 4 -> 8


// OUTPUT : 8 

//

    // Ejercicio Dos

//

function a(b){ // se define la función a() con el parámetro b
    return b; // returna b
}
console.log(a(2)+a(4)); // se llama la función con console.log -> con parámetros = 2 y otro = a 4, a(2) + a(4) = 6

// OUTPUT : 6

//

    // Ejercicio Tres

//

function a(b){ // Se define la función a() con el parámetro b
    console.log(b); // se imprime b en pantalla con console.log -> 3
    return b*3; // Returna el triple de b -> 3 * b -> 3 * 3
}
console.log(a(3)); // Se llama la función con un console.log, con un parámetro igual a 3 -> a(3) = 9

// OUTPUT : [3, 9]

//

    // Ejercicio Cuatro

//

function a(b){ // se define la función a, con parámetro b
    return b*4; // Returna el cuátruple de b -> 4 * 10 = 40
    console.log(b); // Todo seguido de un return no se ejecuta
 }
 console.log(a(10)); // Se llama la función a(), con parámetro igual a 10 -> 40

 // OUTPUT : 40

 //  
 
     // Ejercicio Cinco
 
 //

 function a(b){ // Se define la función a(), con un parámetro b
    if(b < 10) { // Si b es menor que 10, ejecuta:
        return 2; // Returna 2
    }
    else     { // Si b no es menor que 10, entonces:
        return 4; // Returna 4
    }
    console.log(b); // Luego de un condicional if/else, que involucre return, no se ejecutará las líneas siguientes
}
console.log(a(15)); // Se llama a la función a(), con parámetro igual a 15 -> como 15 no es menor que 10, entonces sigue el condicional 15 es mayor que 10, entonces returna 4

// OUTPUT : 4

//

    // Ejercicio Seis

//

function a(b,c){ // Se define la función a(), con parámetros b y c
    return b*c; // Returna el product de b y c
}
console.log(10,3); // Aún no se llama a la función, pero pide imprimir 10, 3
console.log( a(3,10) ); // Se llama la función a(), con parámetros 3 y 10, al pasar por la función returna el producto 3 * 10 -> 30

// OUTPUT : [10,3, 30]

// 

    // Ejercicio Siete

//

function a(b){ // Se define la función // Nunca se llama la función
    for(var i=0; i<10; i++){ // Se usa un for que itera diez números
        console.log(i); // Se imprime cada iteración
    }
    return i; // Returna i
}
console.log(3); // No se llama a la función, pero pide imprimir 3
console.log(4); // Tampoco se llama a la función, pero pide imprimir 4

// OUTPUT :

//

    // Ejercicio Ocho

//

function a(){ // Se define la funcióna()
    for(var i=0; i<10; i++){ // Se usa un for para iterar 10 números -> i = [0,1,2,3,4,5,6,7,8,9]
        i = i +2; // Cada vez que haga una iteración aumentará en dos -> i = [2,5,8,11]
        console.log(i); // Se imprime la iteración -> [2,5,8,11]
    }
}
a(); // Se llama la función

// OUTPUT : [2,5,8,11]

//

    // Ejercicio Nueve

//

function a(b,c){ // Se define la función a(), con parámetros b y c
    for(var i=b; i<c; i++) { // Se hace un for para iterar valores desde b hasta el antecesor de c -> b = 0 y c = 10
        // for (var i=0; i<10; i++); -> i = [0,1,2,3,4,5,6,7,8,9]
       console.log(i); // Se imprime en pantalla cada iteración 
       // i = [0,1,2,3,4,5,6,7,8,9]
   }
   return b*c; // Returna el producto de b y c 
   // 10 * 0 = 0
}
a(0,10); // Se llama la función con los parámetros 0 y 10
console.log(a(0,10)); // Se vuelve a llamar a la función con parámetros 0 y 10, pero esta vez con un console.log, como returna 0 se imprime 0

// OUTPUT : [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]

//

    // Ejercicio Diez

//

function a(){ // Se define la función a()
    for(var i=0; i<10; i++){ // Se hace un for que itera 10 números
        // i = [0,1,2,3,4,5,6,7,8,9]
       for(var j=0; j<10; j++){ // Se hace un nueco for por cada iteración del for anterior
           console.log(j); // Se imprime la iteración j
       }
       console.log(i); // Se imprime la iteración i
    }
    // La función jamás es llamada así que nada de a() se ejecuta.
}

// OUTPUT : Indefinido

//

    // Ejercicio Once

//

function a(){ // Se define la función a()
    for(var i=0; i<10; i++){ // Se hace un for que itera diez números
        // i = [0,1,2,3,4,5,6,7,8,9]
        for(var j=0; j<10; j++){ // Se hace un for dentro de las iterción del for anterior y se iteran 10 números
            console.log(i,j); // Se imprime la iteración i y la iteración j
        }
        console.log(j,i); // Se imprime la iteración i y la iteración j
    }
    // La función no se llama así que nada de a() se ejecuta
}

// OUTPUT : Indefinido

//

    // Ejercicio Doce

//

var z = 10; // Se define la Variable externa z con un  valor de 10
function a(){ // Se define la función  a()
    var z = 15; // Se define la variable interna z con un valor de 15
    console.log(z); // Se imprime la variable interna z 
}
// a() no es llamada así que no se ejecuta 
console.log(z); // Se imprime la variable externa z -> 10

// OUTPUT : 10

//

    // Ejercicio Trece

//

var z = 10; // Se define la variable externa z con un valor de 10 
function a(){ // Se define la función a()
    var z = 15; // Se define la variable interna z con un valor de 15
    console.log(z); // Se imprime la variable interna z -> 15
}
a(); // Se llama la función 
console.log(z); // Se imprime la variable externa z

// OUTPUT : [15, 10]

//

    // Ejercicio Catorce

//

var z = 10; // Se define la variable z con un valor de 10
function a(){ // Se define la función a()
    var z = 15; // Se define la variable interna z con un valor de quince
    console.log(z); // Se imprime en pantalla la variable interna z -> 15
    return z; // Returna la variable interna z -> 15
}
z = a(); // A la variable externa se le asigna el valor del return de a() || Se llama a la función || z = 10 -> 15
console.log(z);

// OUTPUT : [15, 15]

//

    // Ejercicio Quince

//