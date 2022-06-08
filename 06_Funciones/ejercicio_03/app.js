function startTrafficSignal () {
    let green=document.getElementById("verde");
    let red=document.getElementById("rojo");
    let yellow=document.getElementById("amarillo");

    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },5000);

    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },7000);

    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },12000);
}

let timer=setInterval(function () {
    startTrafficSignal();
},12000);

startTrafficSignal()
