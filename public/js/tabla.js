function crearTabla(data){

    let divTabla = $('divTabla');
    let tabla = document.createElement('table');
    let cabecera = document.createElement('thead');
    let tr = document.createElement('tr');
    divTabla.classList.add('spaceTop');
    tabla.className = 'tabla';
    //tabla.classList.add('')
    cabecera.classList.add('orange-theme');
    cabecera.classList.add('whiteLabel');
    var vacunas = document.getElementById('vacunas');
    var options = ["---","Si","No"];
    if(vacunas.children.length < 1){
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.value = options[i];
            option.text = options[i];
            vacunas.appendChild(option);
        }
    }

    let keys = [];
    for(var k in data[0]){
        keys.push(k);
    }

    for(i = 0 ; i< keys.length; i++ ){
        let th = document.createElement('th');
        th.innerText = keys[i];
        tr.appendChild(th);
        cabecera.appendChild(tr);
    }

    let cuerpo = document.createElement('tbody');
    cuerpo.id ='cuerpoTabla';
    cuerpo.className = 'dark-theme';
    cuerpo.classList.add('whiteLabel');
    for(i = 0 ;i< data.length; i++){
        let tr = document.createElement('tr');
        for(value in data[i]){
            let td = document.createElement('td');
            td.innerText = data[i][value];
            tr.appendChild(td);
        }
        tr.addEventListener('click', (e) => {
            a = new Anuncio(tr.children[0].innerText,tr.children[1].innerText,tr.children[2].innerText,tr.children[3].innerText,tr.children[4].innerText,tr.children[5].innerText,tr.children[6].innerText,tr.children[7].innerText,tr.children[8].innerText) ;
            e.preventDefault();
            e.stopPropagation();
            controlador(a);
        });
        cuerpo.appendChild(tr);
    }
    //$('spinner').hidden = true;
    tabla.appendChild(cabecera);
    tabla.appendChild(cuerpo);
    divTabla.appendChild(tabla);
}

