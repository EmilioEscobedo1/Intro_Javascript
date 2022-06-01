//Primer paso: Definir las variables
let nombreCompleto; 
let anioActual, anioNacimiento;
let edad;
let resultado;

//Segundo paso: Solicitar los datos
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = Number(prompt('Digita el año actual'));
anioNacimiento = Number(prompt('Digita el año de tu nacimiento'));

//Tercer paso: Desarrollo de la logica 
// if (typeof(anioActual) === 'number' && typeof(anioNacimiento) === 'number')
// {
//     edad = anioActual - anioNacimiento;

//     resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`
// }
// else 
// {
//         resultado = 'Por favor ingresa años validos'
// }

if(anioActual === isNaN(anioActual) || isNaN(anioNacimiento)) 
{
    resultado = 'Por favor ingresa años validos'
}
else 
{
    edad = anioActual - anioNacimiento;

    resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`
}

//Cuarto paso: Mostrar los resultados;
document.write(resultado);