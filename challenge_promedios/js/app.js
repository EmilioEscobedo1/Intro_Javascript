let alumnos = document.getElementById('alumnos');
let notas = document.getElementById('notas');
let planilla = document.getElementById('planilla');

function generar(){
    
    //ciclo para crear filas
    for (let i = 1; i<= (alumnos.value + 1); i++){
        let tr = document.createElement('tr');
        //validamos si la fila a crear es el encabezado
        if(i===1){
            //ciclo para crear columnas
            for (let j = 1; j <= (notas.value + 3); j++){
                let th = document.createElement('th');
                let titulo;

                if(j===1){
                    titulo = document.createTextNode('Orden');
                }else if (j===2){
                    titulo = document.createTextNode('Estudiante');
                }else if (j===notas + 3){
                    titulo = document.createTextNode('Def');
                }else{
                    titulo = document.createTextNode('Nota' + (j-2));
                }

                th.appendChild(titulo);
                tr.appendChild(th);
            }

            planilla.appendChild(tr);
        }else{
        
                    for (let j = 1; j <= notas.value + 3; j++){
                        let td = document.createElement('th');
                        let elemento;
                        let orden;
        
                        if(j===1){
                            elemento = document.createTextNode(i - 1);
                        }else if (j===notas + 3){
                            elemento = document.createElement('span');
                        }else{
                            elemento = document.createElement('input');
                        }
        
                        td.appendChild(elemento);
                        tr.appendChild(td);
                    }
        
                    planilla.appendChild(tr);
        }
    }
}
