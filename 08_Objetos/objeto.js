const gato = {
    nombre: "alfa",
    alias: "peluchin",
    apodo: "gato bola",
    raza: "Siames",
    edad: 6,
    color: ["blanco", "gris"],
    vacunas: {
        triplefelina: "true",
        rabia: "false",
    },
};

console.log(gato.edad);
console.log(gato["edad"]);

console.log(gato.vacunas.triplefelina.toUpperCase());
console.log(gato?.vacunas?.influenza?.toUpperCase());

console.log(gato.nombre)





const miArray = ["string", 4, [], {}];
miArray.length
//arreglo de strings
const razas = ["siames", "bengala", "carey", "persa", "bombay", "egipcio"];

// arregloDeNumeros
const pesos = [5,2,1,3,4];