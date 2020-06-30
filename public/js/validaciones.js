
function limpiarTabla(){
    $('divTabla').innerText = "";
}

function vaciarCampos(){
    $('titulo').value = ' ';
    document.getElementsByName('animal')[0].checked = false;
    document.getElementsByName('animal')[1].checked = false;
    $('descripcion').value = ' ';
    $('precio').value = ' ';
    $('raza').value = ' ';
    $('fecha').value = $('fecha').defaultValue ;
    //$('vacunas').valueOf('---');
    document.getElementById('vacunas').options[0].selected = 'selected';
}

function validacionCampos(){
    var retorno = false;
    var titulo = $('titulo').value ;
    var animal = valorRadio('animal');
    var descripcion = $('descripcion').value;
    var precio = $('precio').value;
    var raza = $('raza').value;
    var fecha = $('fecha').value;

    if(titulo == '')
    {
        mensaje("nulos",0);
        colorearCampos("titulo");
        retorno = true;
    }
    if(titulo.length < 1)
    {
        mensaje("titulo", 1);
        colorearCampos("titulo");
        retorno = true;
    }
    /*
    if(descripcion == null)
    {
        mensaje("nulos");
        colorearCampos("descripcion");
        retorno = true;
    }

    if(animal == null){
        mensaje("nulos");
        colorearCampos("animal");
        retorno = true;
    }

    if(precio == null)
    {
        mensaje("nulos");
        colorearCampos("precio");
        retorno = true;
    }

    if(raza == null)
    {
        mensaje("nulos");
        colorearCampos("raza");
        retorno = true;
    }

    if(fecha == null)
    {
        mensaje("nulos");
        colorearCampos("fecha");
        retorno = true;
    }
*/


    return retorno;


    /* if(!validacionFecha(fecha))
    {
        mensaje("fecha");
        colorearCampos("fecha");
        retorno = false;
    } */


}

/* function validacionFecha(fecha){
    var retorno = true;

    var anio = fecha.split("-")[0];
    var mes =  fecha.split("-")[1];
    var dia =  fecha.split("-")[2];
    var fechaIngresada = new Date(anio, mes, dia);
    var fechaActual =  new Date();
    if(fechaActual.getTime() < fechaIngresada.getTime()){
        retorno = false;
    }

    return retorno;
} */

function mensaje(campo,valor){
    var mensaje ;
    switch (campo) {
        case 'titulo':
            mensaje ="Debe ingresar un titulo con mas de" + valor + "caracteres" ;
            break;
        case 'descripcion':
            mensaje = "Debe ingresar un apellido con mas de 3 caracteres" ;
            break;
        case 'transaccion':
            mensaje = "Debe ingresar una fecha menor al dia de hoy" ;
            break;
        case 'precio' :
            mensaje = "Debe seleccionar un sexo" ;
            break;
        case 'cantidadBanos' :
            mensaje = "Debe seleccionar un sexo" ;
            break;
        case 'cantidadAutos' :
            mensaje = "Debe seleccionar un sexo" ;
            break;
        case 'cantidadDormitorios' :
            mensaje = "Debe seleccionar un sexo" ;
            break;
        case 'nulos':
            mensaje = "no puede ingresar los campos nulos";
            break;
        default:
            break;
    }

    alert(mensaje);

}

function colorearCampos(campo){
    var cam = document.getElementById(campo);
    cam.style.borderColor = "red" ;
    cam.style.borderWidth = "5px";

}

/* function sinColor(){
    document.getElementById("nombre").style.border = '' ;
    var apellido = document.getElementById("apellido").style.border = '' ;
    var fecha = document.getElementById("fecha").style.border = '' ;
    var sexo = genero("sexo") ;
    sexo.style.border = '';

}  */