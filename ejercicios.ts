//Declaren variables utilizando diferentes tipos de datos: número, cadena, booleano, arreglo, objeto, etc.

// Número
let numero: number = 10;

// Cadena
let cadena: string = "Hola, mundo!";

// Booleano
let booleano: boolean = true;

// Arreglo de números
let arregloNumeros: number[] = [1, 2, 3, 4, 5];

// Arreglo de cadenas
let arregloCadenas: string[] = ["manzana", "banana", "cereza"];

// Arreglo de cualquier tipo (any)
let arregloAny: any[] = [1, "dos", true];

// Objeto con propiedades tipadas
let persona: { nombre: string, edad: number, esEstudiante: boolean } = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
};

// Objeto de tipo específico
class Producto {
    constructor(public nombre: string, public precio: number) {}
}
let producto: Producto = new Producto("Laptop", 1200);

// Tipo de dato 'null' o 'undefined'
let nulo: null = null;
let indefinido: undefined = undefined;


//Utilicen tipos de literales para limitar los valores de una variable.

let mensaje: string = "Hola, mundo!";
console.log(`El mensaje es: ${mensaje}`);


//Estructuras Condicionales:

let temperaturaAgua: number = 80; // Temperatura del agua en grados Celsius

if (temperaturaAgua <= 0) {
    console.log("El agua está congelada.");
} else if (temperaturaAgua > 0 && temperaturaAgua < 100) {
    console.log("El agua está en estado líquido.");
} else {
    console.log("El agua está hirviendo.");
}



//Funciones Básicas:

function saludar(): void {
    console.log("¡Hola!");
}

function cuadrado(numero: number): number {
    return numero * numero;
}

function concatenarStrings(a: string, b: string): string {
    return a + b;
}

function esMayorDeEdad(edad: number, pais?: string): boolean {
    if (pais === "USA") {
        return edad >= 21;
    } else {
        return edad >= 18;
    }
}

function calcularPromedio(valores: number[]): number {
    let suma = 0;
    for (let valor of valores) {
        suma += valor;
    }
    return suma / valores.length;
}


//Funciones con Parámetros Opcionales y Predeterminados:

function saludar1(nombre?: string): void {
    if (nombre) {
        console.log(`¡Hola, ${nombre}!`);
    } else {
        console.log("¡Hola!");
    }
}


saludar1(); 
saludar1("Juan"); 


function saludar2(nombre: string = "Invitado"): void {
    console.log(`¡Hola, ${nombre}!`);
}


saludar2(); 
saludar2("Juan"); 

