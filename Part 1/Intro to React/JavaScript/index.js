// Variables
console.log("VARIABLES\n");
const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);

// Arrays------------------------------------------
console.log("ARRAYS\n");

const t = [1, -1, 3];

const t2 = t.concat(5); // Se crea una copia del array y se le agrega el nuevo valor
t.push(5);

console.log(t.length, "\n"); // se imprime 4
console.log(t[1]); //-1 es impreso

t.forEach((value) => {
  console.log(value);
});

console.log(t);
console.log(t2, "\n");

const e = [1, 2, 3];

const m1 = e.map((value) => value * 2);
console.log(m1, "\n");

const m2 = e.map((value) => "<li>" + value + "</li>");
console.log(m2, "\n");

const a = [1, 2, 3, 4, 5];

const [first, second, ...rest] = a;

console.log(first, second);
console.log(rest);
//-----------------------------------------------
console.log("OBJETOS\n");

// llamados objetos literales

const object1 = {
  name: "Alberto Hellas",
  age: 35,
  education: "PhD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dani",
    second: "Abraham",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};

console.log(object1.name);
const fieldname = "age";
console.log(object1[fieldname]);

object1.address = "Helsinki";
object1["secret number"] = 12341;
console.log(object1.address);
//-----------------------------------
console.log("\n FUNCIONES \n");

const sum = (n1, n2) => {
  console.log(n1);
  console.log(n2);
  return n1 + n2;
};

// y la función se llama como se puede esperar

const result = sum(18, 18);
console.log(result, "\n");

// Si hay un solo parámetro, podemos excluir los parentesis de la definición
// Si la función solo contiene una expresión, entonces las llave no on necesarias

const square = (s) => s * s;

const p = [1, 2, 3];
const pSquared = p.map((p) => p * p);
console.log(pSquared, "\n");

// funciones tradicionales

function product(a, b) {
  return a * b;
}

const result1 = product(4, 8);
console.log(result1);

// expresion de funcion

const average = function (a, b) {
  return (a + b) / 2;
};

const result2 = average(18, 19);
console.log(result2);

//----------------------------------------------------
console.log("OBJETOS \n");

const arto = {
  // la forma de acceder a una propiedad de un objeto en JS es usando "this."
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name, "\n");
  },
  doAddition: (a, b) => {
    console.log(a + b);
  },
};

arto.greet();

// Los métodos se pueden asignar a los objetos incluso después de la creación del objeto
arto.growOlder = function () {
  this.age += 1;
};

console.log(arto.age); // 35 es impreso
arto.growOlder();
console.log(arto.age, "\n"); // 36 es impreso
//-----------------------
//Modifiquemos ligeramente el objeto:
arto.doAddition(400, 38);

const referenceToAddition = arto.doAddition;
referenceToAddition(20, 5);

//setTimeout(arto.greet.bind(arto), 1000); // funciona para que el "this" no se pierda
//-----------------------------------

console.log("CLASES \n");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  greet() {
    console.log("Hello, mi name is "+ this.name);
  }
}

const adam = new Person("Adam", 32);
adam.greet();

const rossy = new Person("Rossy", 41);
rossy.greet();
