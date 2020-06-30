var servidor = "http://localhost:3000/";

function listado(xhr){
    var url = servidor + "traer";
    xhr.open("GET", url, true);
    xhr.send();
    cargarDatos(1);
}


function agregar(a){
  var url = servidor + "alta";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type","application/json");  
  xhr.send( JSON.stringify( a ));
  cargarDatos(0);
}

function baja(a){ 
  //application/x-www-form-urlencoded 
  var url = servidor + "baja";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type","application/json");  
  xhr.send(JSON.stringify({"id": a }));
  cargarDatos(0);
}

function modificar(a){
  var url = servidor + "modificar";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type","application/json");  
  xhr.send( JSON.stringify( a ));
  cargarDatos(0);
}