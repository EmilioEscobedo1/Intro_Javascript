let jugador1,jugador2
let panelInicio, panelRondas

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
}
