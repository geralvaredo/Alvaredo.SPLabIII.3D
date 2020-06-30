function listarModificacion(a){
    lista = JSON.parse(localStorage.getItem('anuncios'));
    for(var i=0; i < lista.data.length; i++){
        if(lista.data[i].id == a.id){
            lista.data[i].titulo =  a.titulo;
            lista.data[i].transaccion =  a.transaccion;
            lista.data[i].descripcion =  a.descripcion;
            lista.data[i].precio =    a.precio;
            lista.data[i].animal =    a.animal;
            lista.data[i].raza =    a.raza;
            lista.data[i].fecha =    a.fecha;
            lista.data[i].vacunas =    a.vacunas;
            break;
        }
    }
    vaciarCampos();
    limpiarTabla();
    crearTabla(lista.data);
    lista = JSON.stringify(lista);
    localStorage.setItem("anuncios", lista);
    modificarElemento(a);

}

function modificarElemento(a) {
    modificar(a);
}