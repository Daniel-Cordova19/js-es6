// Método de array map es ampliamente usado en React para renderizar HTML.
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/react/react_es6_array_methods.asp

// A) Usa la función map para restar uno a todos los números del array

let numeros = [1, 2, 3];

let nuevoArray = numeros.map(numero => numero -1);
//console.log("Apartado A: ", nuevoArray); // [0 , 1, 2];  //Resuelto🆗

// B) Usa la función map para transformar a mayúsculas todos los strings de este array
let animales = ["vertín, bigotes"];
let nuevosAnimales = animales.map(animal => animal.toUpperCase())
//console.log("Apartado B: ", nuevosAnimales) // ["VERTÍN, BIGOTES"] //Resuelto🆗


// C) Usa la función map para actualizar con la fecha de hoy (new Date().toLocaleString()) la propiedad ultimaVisita de todos los pacientes de una clínica dental

let pacientes = [{
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19'
}];
let pacientesVisitados= pacientes.map(paciente=> paciente.ultimaVisita = (new Date().toLocaleString()))
//console.log("Apartado C: ", pacientesVisitados) // La propiedad 'ultimaVisita' de TODOS los pacientes debe estar actualizada a fecha de hoy //Resuelto🆗




// D) DIFÍCIL. Usa la función map para AGREGAR un nuevo campo al array de pacientes. 
//El campo debe llamarse 'avisos'. 
//Si el paciente NO ha pagado la última visita, dicho campo debe contener el string 'Paciente moroso, cobrar!'; 
//en caso contrario, debe dejarse vacío. 
//BONUS: usa un condicional ternario. BONUS: Usa el operador ...object para no tener que escribir todos los campos.

/*let cositas = [{
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19',
    avisos: 'Paciente moroso, cobrar!'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19',
    avisos: ''
}]

let pacientesAvisos = cositas.map(paciente => paciente.avisos = 'Paciente moroso, cobrar!'? (paciente.nombre + " Paciente moroso, cobrar!") :'' );
console.log("Apartado D: ", pacientesAvisos);

// E) Usa la función map para crear tantos tags <li> como pacientes hay en el array
//let pacientesLista; // TODO
// console.log("Apartado E: ", pacientesLista);

/**
 * ['<li>Pedro</li>', '<li>María</li>']
 */



