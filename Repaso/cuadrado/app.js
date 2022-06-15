
function calcularArea(base,altura){
    return base * altura;
}

function obtenerArea(){
    const ladoA = document.getElementById("base");
    const valorDeLaBase = Number(ladoA.value);


    const ladoB = document.getElementById("altura");
    const valorDeLaAltura = Number(ladoB.value);

    const area = calcularArea(valorDeLaBase, valorDeLaAltura);
}