function traerAnuncio(){
    var idA = null;
    if(tipoMod == null || tipoMod == undefined){
        idA = traerUltimoId().toString();
    }else{
        idA = a.id;
    }
    let titulo = $('titulo').value;
    let animal =  valorRadio('animal');
    let transaccion = "venta";
    let descripcion = $('descripcion').value;
    let precio = parseInt($('precio').value);
    let raza = $('raza').value
    let fecha = $('fecha').value;
    let vacunas = $('vacunas').value;
    return new Anuncio(idA,titulo,transaccion,descripcion,precio,animal,raza,fecha,vacunas);
}

function valorRadio(s){
    radio=document.getElementsByName(s);
    for(i=0;i<radio.length;i++)
        if (radio[i].checked) {
            valor = radio[i].value;
            return valor;
            break;
        }
    return null;
}

function traerUltimoId(){
    if(lista.data == null || lista.data == undefined){
        lista = JSON.parse(localStorage.getItem('anuncios'));
    }
    a = parseInt(lista.data.pop().id);
    return a = a + 1;
}