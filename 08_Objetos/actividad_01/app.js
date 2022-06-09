function iniciarSemaforo () {
const coloresSemaforo = {
    rojo: document.getElementById("red"),
    amarillo: document.getElementById("yellow"),
    verde: document.getElementById("green"),
};

coloresSemaforo.verde.style.opacity=1;
setTimeout (function (){
    coloresSemaforo.verde.style.opacity=.3;
    coloresSemaforo.rojo.style.opacity=.3;
    coloresSemaforo.amarillo.style.opacity=1;
},5000);

setTimeout(function () {
    coloresSemaforo.verde.style.opacity=.3;
    coloresSemaforo.rojo.style.opacity=1;
    coloresSemaforo.amarillo.style.opacity=.3;
},7000);

setTimeout(function () {
    coloresSemaforo.verde.style.opacity=1;
    coloresSemaforo.rojo.style.opacity=.3;
    coloresSemaforo.amarillo.style.opacity=.3;
},12000);
}

let timer=setInterval(function () {
    iniciarSemaforo();
},12000);

iniciarSemaforo()