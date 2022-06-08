// Cuente el numero de vocales en un string (cadena de caracteres)

const vocales = ['a', 'e', 'i', 'o', 'u'];

const miNombre = 'Gerardo Nava Pereda'

miNombre.length
miNombre[0]


const constarVocales = function(string) {
    const contadorDeVocales = 0;
    const arregloDeMiNombre = string.split("");
console.log("LONGITUD", arregloDeMiNombre.length, "FIN");

    for(let i = 0; i < arregloDeMiNombre.length; i++ ) {
     if (vocales.includes(arregloDeMiNombre[i])) {
        contadorDeVocales++;
     };
    }
    return contadorDeVocales;
}

const misVocales = constarVocales('Gerardo Nava Pereda')
console.log(misVocales);