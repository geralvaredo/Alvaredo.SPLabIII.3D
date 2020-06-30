function eliminar(){
    if(confirm("Eliminar?")){
        lista = JSON.parse(localStorage.getItem('anuncios'));
        for(i=0; i < lista.data.length; i++){
            if(lista.data[i].id == a.id){
                lista.data.splice(i,1);
                //console.log(p baja(p.id);
                vaciarCampos();
                //$('spinner').hidden = false;
                break;
            }
        }
        limpiarTabla();
        crearTabla(lista.data);
        lista = JSON.stringify(lista);
        localStorage.setItem("anuncios", lista);
        tipoMod = null;
        eliminarElemento();
    }

}

function eliminarElemento(){
    baja(a.id);
}