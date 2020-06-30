

function checks(event){
    let lista = JSON.parse(localStorage.getItem('anuncios'));
    let listaFiltrada = JSON.parse(localStorage.getItem('listaFiltrada'));
    let columnas = JSON.parse(localStorage.getItem('columnas'));
    var option;
    if(option == null || option == undefined){
        option = JSON.parse(localStorage.getItem('opciones'));
    }
    if(event.target.checked){
        if(listaFiltrada.data == null || listaFiltrada.data == undefined ){
            reducirColumnas(event.target.id,listaFiltrada);
        }else {
            reducirColumnas(event.target.id,listaFiltrada.data);
        }

        for(let i= 0 ; i< columnas.length; i++){
            switch (event.target.id) {
                case "2":
                    columnas[i].titulo = 1;
                    break;
                case "3":
                    columnas[i].transaccion = 1;
                    break;
                case "4":
                    columnas[i].descripcion = 1;
                    break;
                case "5":
                    columnas[i].precio = 1;
                    break;
                case "6":
                    columnas[i].animal = 1;
                    break;
                case "7":
                    columnas[i].raza = 1;
                    break;
                case "8":
                    columnas[i].fecha = 1;
                    break;
                case "9":
                    columnas[i].vacunas = 1;
                    break;
                default:
                    break;
            }

        }

        option.push(event.target.id);
        option = JSON.stringify(option);
        localStorage.setItem("opciones", option);
        var listaColumnas = JSON.stringify(columnas);
        localStorage.setItem("columnas", listaColumnas);
    }
    else {
        for (let i= 0 ; i < option.length;i++) {
            if(option[i] == event.target.id){
                option.splice(i,1);
                break;
            }
        }

        for(let i= 0 ; i< columnas.length; i++){
            switch (event.target.id) {
                case "2":
                    columnas[i].titulo = 0;
                    break;
                case "3":
                    columnas[i].transaccion = 0;
                    break;
                case "4":
                    columnas[i].descripcion = 0;
                    break;
                case "5":
                    columnas[i].precio = 0;
                    break;
                case "6":
                    columnas[i].animal = 0;
                    break;
                case "7":
                    columnas[i].raza = 0;
                    break;
                case "8":
                    columnas[i].fecha = 0;
                    break;
                case "9":
                    columnas[i].vacunas = 0;
                    break;
                default:
                    break;
            }

        }

        option = JSON.stringify(option);
        localStorage.setItem("opciones", option);
        traerColumnas(option,lista.data);
        var listaColumnas = JSON.stringify(columnas);
        localStorage.setItem("columnas", listaColumnas);
    }

}

function reducirColumnas(valor,lista){
    var listaFiltrada = lista.map(
        function (obj) {
            switch (valor) {
                case "1":
                    delete obj.id;
                    break;
                case "2":
                    delete obj.titulo;
                    break;
                case "3":
                    delete obj.transaccion;
                    break;
                case "4":
                    delete obj.descripcion;
                    break;
                case "5":
                    delete obj.precio;
                    break;
                case "6":
                    delete obj.animal;
                    break;
                case "7":
                    delete obj.raza;
                    break;
                case "8":
                    delete obj.fecha;
                    break;
                case "9":
                    delete obj.vacunas;
                    break;
            }
            var rObj = {};
            rObj = obj;
            return rObj;
        });

    limpiarTabla();
    crearTabla(listaFiltrada);
    lista = JSON.stringify(lista);
    localStorage.setItem("listaFiltrada", lista);
}

function traerColumnas(option,lista) {
    var listaNueva = lista.filter(
        function (obj) {
            for (let i=0 ; i < option.length;i++){
                if(obj.id == option[i]){
                    delete obj;
                }
            }

            var rObj = {};
            rObj = obj;
            return rObj;
        }
    )
    limpiarTabla();
    crearTabla(listaNueva);
    lista = JSON.stringify(listaNueva);
    localStorage.setItem("listaFiltrada", lista);

}

function crearFiltrosDeColumnas(data) {
    if($('filtros') == null || $('filtros') == undefined){
        let filtros = $('divFiltrosColumnas');
        filtros.classList.add('spaceTop');
        let tabla = document.createElement('table');
        tabla.id = 'filtros';
        let cabecera = document.createElement('thead');
        divTabla.classList.add('spaceTop');
        tabla.className = 'tabla';
        cabecera.classList.add('orange-theme');
        cabecera.classList.add('whiteLabel');
        let tr = document.createElement('tr');
        cabecera.id = 'cuerpo';
        let keys = [];
        for(var k in data[0]){
            keys.push(k);
        }

        for(i = 1 ; i< keys.length; i++ ){
            let th = document.createElement('th');
            th.innerText = keys[i];
            tr.appendChild(th);
            cabecera.appendChild(tr);
        }
        let columnas = JSON.parse(localStorage.getItem('columnas'));
        let cuerpo = document.createElement('tbody');
        cuerpo.id = 'cuerpoCheck';
        var maxTd = 9 ;
        var maxTr = 1 ;
        for (var i = 0 ; i< maxTr; i++){
            let trBody = document.createElement('tr');
            for (let j = 1; j < maxTd; j++) {
                let tdBody = document.createElement('td');
                let chk = document.createElement('input');
                chk.type = "checkbox";
                chk.className = 'form-check-input';
                chk.id = j + 1 ;
                let divCheckbox = document.createElement('div');
                divCheckbox.className = 'form-check form-check-inline';
                chk.addEventListener('change', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    checks(e);
                })

                for(let i = 0 ; i < columnas.length;i++){
                    switch (chk.id) {
                        case "2":
                            chk.checked = columnas[i].titulo;
                            break;
                        case "3":
                            chk.checked = columnas[i].transaccion;
                            break;
                        case "4":
                            chk.checked = columnas[i].descripcion;
                            break;
                        case "5":
                            chk.checked = columnas[i].precio;
                            break;
                        case "6":
                            chk.checked = columnas[i].animal;
                            break;
                        case "7":
                            chk.checked = columnas[i].raza;
                            break;
                        case "8":
                            chk.checked = columnas[i].fecha;
                            break;
                        case "9":
                            chk.checked = columnas[i].vacunas;
                            break;
                    }
                }


                divCheckbox.appendChild(chk);
                tdBody.appendChild(divCheckbox);
                trBody.appendChild(tdBody);
            }
            cuerpo.appendChild(trBody);
        }

        tabla.appendChild(cabecera);
        tabla.appendChild(cuerpo);
        filtros.appendChild(tabla);
    }
}

function filtroTipoRaza(){
    let divFiltros = $('divPromedioRaza');
    let divRaza = document.createElement('div');
    let tipoRaza = document.createElement('select');
    let razaTxt = document.createElement('label');
    let promedioTxt = document.createElement('label');
    let promedio = document.createElement('input');


    var options = ["Todo","Perro","Gato"];

    if(tipoRaza.children.length < 1){
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.value = options[i];
            option.text = options[i];
            tipoRaza.appendChild(option);
        }
    }

    tipoRaza.addEventListener('change', (e) => {
        e.preventDefault();
        e.stopPropagation();
        comboAnimal(e);
    });



    divFiltros.classList.add('container');
    divFiltros.classList.add('spaceTop');
    divFiltros.classList.add('gold-theme');


    razaTxt.innerText = 'Filtrar Animal';
    razaTxt.className = 'whiteLabel';
    tipoRaza.id = 'tipoRaza';
    tipoRaza.name = 'tipoRaza';
    tipoRaza.className = 'custom-select col-md-3';
    tipoRaza.classList.add('spaceLeft');
    divRaza.className = 'tipoRaza';


    promedioTxt.innerText = 'Promedio';
    promedioTxt.className = 'whiteLabel';
    promedioTxt.classList.add('spaceLeft');
    promedioTxt.classList.add('spaceLeft');
    promedio.id = 'promedio';
    promedio.type = 'text';
    promedio.className = 'form-control';
    promedio.classList.add('col-md-5');
    promedio.classList.add('spaceLeft');
    promedio.classList.add('d-inline');
    promedio.setAttribute('disabled',true);


    divRaza.appendChild(razaTxt);
    divRaza.appendChild(tipoRaza);
    divRaza.appendChild(promedioTxt);
    divRaza.appendChild(promedio);
    divFiltros.appendChild(divRaza);


}

function comboAnimal(event){
    var valor = event.target.value;
    let lista = JSON.parse(localStorage.getItem('anuncios'));
    var listaNueva;
    if(valor == "Gato"){
         listaNueva = lista.data.filter(function (anuncio) {
                return anuncio.animal == 'gato';
            });

    }
    if(valor == "Perro"){
         listaNueva = lista.data.filter(function (anuncio) {
            return anuncio.animal == 'perro';
        });

    }
    if(valor == "Todo"){
        listaNueva = lista.data;
    }

    limpiarTabla();
    crearTabla(listaNueva);
    lista = JSON.stringify(listaNueva);
    localStorage.setItem("listaFiltrada", lista);
    promedio(valor);
}

function promedio(valor){
    var listaAnuncios;
    var precioPromedio;
    var largo = "";
    if(valor == "C"){
        listaAnuncios = (JSON.parse(localStorage.getItem('anuncios')));
        largo = listaAnuncios.data.length;
        precioPromedio = listaAnuncios.data.reduce( function (anterior,actual) {
            return anterior + actual.precio ;
        },0);
    }else{
          precioPromedio = null;
          listaAnuncios = "";
          listaAnuncios = JSON.parse(localStorage.getItem('listaFiltrada'));
          largo = listaAnuncios.length;
          precioPromedio = listaAnuncios.reduce( function (anterior,actual) {
            return anterior + actual.precio ;
        },0);

    }
       precioPromedio = precioPromedio / largo;
    $('promedio').value = precioPromedio;
}

