//Definir las variables
let edad 
let embarazo
let residencia 
let anioActual

//Solicitar los datos 

anioActual = Number(prompt('Ingresa el año actual'));
anioNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
embarazo = prompt('¿Eres mujer y estas embarazada con mas de 9 semanas de gestacion? Si | No');
residencia = prompt('¿Eres de un municipio fronterizo (Baja California, Sonora, Chihuahua, Coahuila, Nuevo León, Tamaulipas, Sinaloa, Durango)?, Si o No');
edad = anioActual - anioNacimiento;

if (edad >= 30) 
{
    alert('Eres candidato a vacunarte')
}
if (edad < 18)
{
    alert('No eres candidato a vacunarte por ser menor de edad')
}

else if (edad > 18 && residencia === 'Si')
{
    alert('Eres candidato a vacunarte') 
}

else if (embarazo === 'Si') 
{
    alert('Eres candidato a vacunarte') 
}

else
{
    alert('No eres candidato para vacunarte.')
}








