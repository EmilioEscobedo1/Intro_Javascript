let jugador1,jugador2
let panelInicio, panelRondas

function iniciar(){
    panelInicio = document.getElementById('inicio');
    panelRondas = document.getElementById('rondas');
    jugador1 = document.getElementById('jugador1').value;
    jugador2 = document.getElementById(jugador2).value;
    
    panelInicio.classList.remove('visible');
    panelInicio.classList.add('invisible');

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');
}
