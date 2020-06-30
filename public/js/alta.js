function guardar(){
    if(!validacionCampos()){
        anuncio = traerAnuncio();
        if(tipoMod == null || tipoMod == undefined){
            agregarNuevo(anuncio);
            agregar(anuncio);
            vaciarCampos();
            //crearTabla(lista.data);
        }else{
              if(confirm("Guardar Cambios")){
                  listarModificacion(anuncio);
              }
            $('btnGuardar').removeEventListener('click',modulo(),false);
            tipoMod = null;
        }
    }
}

function agregarNuevo(a){
    lista = JSON.parse(localStorage.getItem('anuncios'));
    limpiarTabla();
    lista.data.push(a);
    crearTabla(lista.data);
    lista = JSON.stringify(lista);
    localStorage.setItem("anuncios", lista);
}