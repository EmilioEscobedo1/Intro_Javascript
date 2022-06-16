
let planilla = document.getElementById('planilla');

function generar(){
    let alumnos = Number(document.getElementById('alumnos').value);
    let notas = Number(document.getElementById('notas').value);

    //ciclo para crear filas
    for(let i = 1; i <= alumnos + 1; i++){
        let tr = document.createElement('tr');

        //validamos si la fila a crear es el encabezado
        if(i===1){
            //ciclo para crear columnas
            for(let j = 1; j <= notas + 3; j++){
                let th = document.createElement('th');
                let titulo;

                if(j===1){ //esta es la columna de orden
                     titulo = document.createTextNode('Orden');
                }else if(j===2){ //columna de estudiante
                    titulo = document.createTextNode('Estudiante');
                }else if(j===notas + 3){ //columna de definitva
                    titulo = document.createTextNode('Def');
                    planilla.setAttribute("border","2");
                }else{
                    titulo = document.createTextNode('Nota ' + (j - 2));
                }

                th.appendChild(titulo);
                tr.appendChild(th);
            }

            planilla.appendChild(tr);
        }else{
            //ciclo para crear columnas
            for(let j = 1; j <= notas + 3; j++){
                let td = document.createElement('td');
                let elemento;

                if(j===1){ //esta es la columna de orden
                     elemento = document.createTextNode(i - 1);

                }else if(j===notas + 3){ //columna de definitva
                    elemento = document.createElement('span');
                    elemento.setAttribute('id','p'+(i-1));
                }else{
                    elemento = document.createElement('input');
                    elemento.setAttribute('id','n'+ (j-2) + 'e' + (i-1));
                }

                td.appendChild(elemento);
                tr.appendChild(td);
            }

            planilla.appendChild(tr);
        }
    }
}

function calcular(){
        let sumaGeneral = 0;
        let promedioGeneral;
    
        let alumnos = Number(document.getElementById('alumnos').value);
        let notas = Number(document.getElementById('notas').value);
    
        //leemos los estudiantes de la tabla
        for(let i=2; i<=alumnos+1; i++){
            let suma = 0;
            let promedio = 0;
    
            //leemos las notas del estudiante en cada fila
            for(let j=3; j<=notas+3; j++){
                if(j===notas+3){
                    //calculamos el promedio
                    promedio = suma / notas;
    
                    //sumo a la suma general
                    sumaGeneral = sumaGeneral + promedio;
    
                    document.getElementById('p'+(i-1)).innerText = promedio.toFixed(2);
                }
                else{
                    //capturamos la nota de la columna actual
                    suma = suma + Number(document.getElementById('n'+ (j-2) + 'e' + (i-1)).value);
                }
            }
        }
    
        //calculo promedio general
        promedioGeneral = sumaGeneral / alumnos;
    
        document.getElementById('promedioGen').innerText = `El promedio general del grupo es ${promedioGeneral.toFixed(2)}`;
}
       
