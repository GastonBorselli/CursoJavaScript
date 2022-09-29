let dato = 5;
console.log(dato);

//operadores 

console.log("operadores aritmeticos");
let suma = 4+4;
console.log(suma);

let resta = 2-2;
console.log(resta)

let division = 6/2;
console.log(division);

let multiplicacion = 6*2;
console.log(multiplicacion);

let potencia = 2**2;
console.log(potencia);

let frase = "hola" + " mundo" + "!";
console.log(frase);

//operadores pre y post decremento e incremento

let x=1;
console.log("operadores pre y post decremento e incremento");
let y = ++x;
console.log("Y= "+y,"X= "+x);

let z = x++;
console.log("Z = "+z,"X= "+x);

let a = x--;
console.log("a= "+a, "X= "+x);

let b = --x;
console.log("b= "+b, "x= "+x);

//operadores booleanos
console.log("operadores booleanos");
console.log("!true",!true);
console.log("!false",!false);
console.log("!!true",!!true);

//operadores de igualdad
console.log("operadores de igualdad");
console.log("true === true",true === true);
console.log("true===false",true===false);
console.log("true!==false",true!==false);
console.log("false!==true",false!==true);
console.log("3==='3'",3==="3");
console.log("3===3 ",3===3);
console.log("5>3 ",5>3);
console.log("5<3 ",5<3);
console.log("3>=3 ",3>=3);
console.log("3>=3 ",3>=3);
console.log("2<=1 ",2<=1);
console.log("'a'<'b' ", "a"<"b");
console.log("'d'<'b' ", "d"<"b");

//operador AND &&
console.log("operador AND &&");
console.log("true&&true&&true ",true&&true&&true);
console.log("true&&true&&true&&false ",true&&true&&true&&false);

//operardor OR ||
console.log("operardor OR ||");
console.log("false||false ",false||false);
console.log("false||false||true ",false||false||true);

//sentencia if
let operacion = 5+2;
console.log("sentencia if");
if(operacion>=7){
    console.log("es verdadero");
}else{
    console.log("es falso");
}

//sentencia SWITCH
console.log("sentencia SWITCH");
let resultado = 4+6;

switch(resultado){
    case 0: 
        console.log("el resultado es 0");
        break;
    case 7:
        console.log("el resultado es 7");
        break;
    default:
        console.log("el resultado no es 0 ni 7, es: "+resultado);
}

//funciones
console.log("Funciones");
function saludar(nombre){
    return `¡Hola ${nombre}!`;
    // return "¡Hola " + nombre + "!";
}
console.log(saludar("Gaston"));
console.log(saludar("Carlos"));

// function inventario(nombre){
//     this.nombre = nombre;
//     this.articulos =[];
// }
// //añadir métodos al inventario
// inventario.prototype.getNombre = function(){
//     return this.nombre;
// }
// inventario.prototype.add = function(articulo,cantidad){
//     this.articulos[articulo]=cantidad;
// }
// inventario.prototype.cantidad = function(articulo){
//     return this.articulos[articulo];
// }



class inventario{
    constructor(nombre){
        this.nombre=nombre;
        this.articulos = [];
    }
    getNombre(){
        return this.nombre;
    }
    add(articulo,cantidad){
        this.articulos[articulo] = cantidad;
    }
    cantidad(articulo){
        return this.articulos[articulo];
    }
}
let libros = new inventario('libros');
console.log(libros.getNombre());
libros.add("Aprendiendo JavaScript",5);
console.log(libros.cantidad('Aprendiendo JavaScript'));

//bucles