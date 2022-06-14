let jugador1,jugador2
let panelInicio, panelRondas;
let ronda = 0;
let respuestas = [];
let panelResultados = document.getElementById('resultados')
function iniciar(){
    //capturamos los nombre de los jugadores
    jugador1 = document.getElementById('jugador1').value;
    jugador2 = document.getElementById('jugador2').value;
    
    //Cambiamos los estilos de los paneles para mostrar u ocultar
    panelInicio = document.getElementById('inicio');
    panelRondas = document.getElementById('rondas');

    panelInicio.classList.remove('visible');
    panelInicio.classList.add('invisible');

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');

    //cargar panel del jugador 1
    document.getElementById(tituloJ1).innerText = 'Turno Jugador ' + jugador1;
    document.getElementById(tituloJ2).innerText = 'Turno Jugador ' + jugador2;

    document.getElementById(respuestaJ1).classList.remove('invisible');
    document.getElementById(respuestaJ1).classList.add('visible');

    //incremento contador de rondas
    ronda ++;
    document.getElementById('contadorRonda').innerText = 'Ronda #' + ronda;
}

function seleccion(opcion, jugador){

    respuestas.push(opcion);

    //validamos en que jugador estamos
    if (jugador === 1) {
        document.getElementById(respuestaJ2).classList.remove('invisible');
        document.getElementById(respuestaJ2).classList.add('visible');
        document.getElementById(respuestaJ1).classList.remove('visible');
        document.getElementById(respuestaJ1).classList.add('invisible');
    }
    else {
        document.getElementById(respuestaJ2).classList.remove('visible');
        document.getElementById(respuestaJ2).classList.add('invisible');
        panelResultados.classList.remove('invisible');
        panelResultados.classList.add('visible');
        panelRondas.classList.remove('visible');
        panelRondas.classList.add('invisible');


    }


}

function ganador(respuestas){
    //validamos resultados
    //jugador 1
    switch (respuestas[0]){
        case 1:{
            if(respuestas[1]===1){

            }else if(respuestas[1]===2){

            }else{

            }

            break;
        }
        case 2:{
            if(respuestas[1]===1){

            }else if(respuestas[1]===2){

            }else{
                
            }
            break;
        }
        case 3:{
            if(respuestas[1]===1){

            }else if(respuestas[1]===2){

            }else{

            }

            break;
        }  
    }
}
