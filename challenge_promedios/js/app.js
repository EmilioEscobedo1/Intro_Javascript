function generarPlanilla() {
    var body = document.getElementsByTagName('body')[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 6; i++) {

    var hilera = document.createElement("tr");
    var textoHilera = document.createTextNode("Alumno"+i);
    hilera.appendChild(textoHilera);

    for (var j = 1; j < 6; j++) {  
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("Nota"+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");

}