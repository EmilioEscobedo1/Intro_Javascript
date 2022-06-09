//global
var hi = "Hi"


// scope-bloque
const Hola = "Hola"
let bonjour = "Bonjour"

//funcion 
function saludar(nombre) {
    console.log(`Hola ${nombre} desde el bloque de funcion`);

    for (let index = 0; index < 5; index++){
        console.log(index);
        console.log(`Hola ${nombre} desde el for`);

        if (index === 2) {
            let genero = "M";
            console.log(`Hola ${nombre}  desde el if`)
            console.log(genero)
        }
    }
}

// bloque
{}

// if () {};
// switch () {};
// for () {};
