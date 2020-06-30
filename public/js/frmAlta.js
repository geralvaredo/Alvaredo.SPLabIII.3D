function formulario(){


  let div = $('frmAlta');
  let divAnimalImagen = document.getElementById('divAnimal');
  let tituloAdministracion = document.getElementById('administracion');
  let frmAlta = document.createElement('form');  
  let divTitulo = document.createElement('div');
  let divAnimales = document.createElement('div'); 
  let divDescripcion = document.createElement('div');
  let divPrecio = document.createElement('div');
  let divRaza = document.createElement('div');
  let divFecha = document.createElement('div');
  let divVacunas = document.createElement('div');
  let divBotones = document.createElement('div');  

  /**
   COMPONENTES
   */
  
  let titulo = document.createElement('input');
  let perro = document.createElement('input');
  let gato = document.createElement('input');
  let descripcion = document.createElement('input');
  let precio = document.createElement('input');
  let raza = document.createElement('input');
  let fecha = document.createElement('input');
  let vacunas = document.createElement('select');
  let imgRaza = document.createElement('img');
  let imgMono = document.createElement('img');
  let imgVacuna = document.createElement('img');
  
    
  let btnGuardar = document.createElement('input');
  let btnCancelar = document.createElement('input');
  let btnEliminar = document.createElement('input');
 
  /** ETIQUETAS */
  //let vacunasTxt = document.createElement('label');
  let tituloInformacion = document.createElement('h5');
  let idTxt = document.createElement('label');
  let tituloTxt = document.createElement('label');
  let animalTxt = document.createElement('label');
  let perroTxt = document.createElement('label');
  let gatoTxt = document.createElement('label');
  let descripcionTxt = document.createElement('label');
  let precioTxt = document.createElement('label');
  //let razaTxt = document.createElement('label');
  //let fechaTxt = document.createElement('label');

    

  /** TIPOS DE COMPONENTES */
    
    titulo.type = 'text';   
    perro.type = 'radio';
    perro.value = 'perro';    
    gato.type = 'radio';
    gato.value= 'gato';      
    descripcion.type = 'text';
    precio.type = 'text';    
    raza.type = 'text';    
    fecha.type = 'date';
    imgRaza.src = 'img/perro.png';
    imgMono.src = 'img/mono.jpg';
    imgVacuna.src = 'img/vacuna.png';
    
    btnGuardar.type = 'button';    
    btnCancelar.type = 'button';  
    btnEliminar.type = 'button';

    /* ID DE COMPONENTES */

    titulo.id = 'titulo';
    perro.id = 'perro';
    gato.id = 'gato';
    descripcion.id = 'descripcion';
    precio.id = 'precio';
    raza.id = 'raza';
    fecha.id = 'fecha';
    vacunas.id = 'vacunas';
    imgMono.id = 'iMono';
    imgRaza.id = 'iRaza';
    imgVacuna.id = 'iVacuna';
    btnGuardar.id = 'btnGuardar';
    //btnCancelar.id = 'btnCancelar';
    btnEliminar.id = 'btnEliminar';

    /** NOMBRE DE COMPONENTES */

    perro.name = "animal";
    gato.name = "animal";
    titulo.name = "titulo";
    descripcion.name = "descrippion"; 
    precio.name = "precio";
    raza.name = "raza";
    fecha.name = "fecha";
    vacunas.name = 'vacunas';
    
    btnGuardar.name = 'btnGuardar';
    //btnCancelar.name = 'btnCancelar';
    btnEliminar.name = 'btnEliminar';

   /** PLACEHOLDER DE COMPONENTES */

   titulo.placeholder= 'Titulo';
   descripcion.placeholder = 'Descripcion';
   precio.placeholder = 'Precio';
   raza.placeholder = 'Raza';
   fecha.placeholder = 'Autos';


  /** VALOR DE LAS ETIQUETAS */

    document.querySelector("h1").innerHTML = "Administracion";
    document.getElementById('animal').src = 'img/mascota.png';
    tituloInformacion.innerText = "Informacion del Anuncio";
    idTxt.innerText = 'Id';
    tituloTxt.innerText = 'Titulo';
    animalTxt.innerText = 'Animal:';
    perroTxt.innerText = 'Perro';
    gatoTxt.innerText = 'Gato'; 
    descripcionTxt.innerText = 'Descripcion';
    precioTxt.innerText = 'Precio';
    //razaTxt.innerText = 'Raza';
    //fechaTxt.innerText = 'Fecha';
    //vacunasTxt.innerText = 'Vacunas';


   /** CLASES DE LOS COMPONENTES  */

    administracion.classList.add('spaceBottom');
    document.body.className = 'body';
    div.className = 'orange-theme';
    tituloInformacion.classList.add('informacionAnuncio');
    divAnimalImagen.classList.add('spaceBottom');
    divVacunas.classList.add('spaceTop');
    divTitulo.className = 'form-group col-md-10';
    titulo.className = 'form-control';
    divAnimales.className = 'form-group inline';
    divAnimales.classList.add('spaceLeft');
    perro.className = 'radio';
    gato.className = 'radio';
    perro.classList.add('spaceLeft');
    perro.classList.add('spaceRight');
    gato.classList.add ('spaceLeft');



   divDescripcion.className = 'form-group col-md-10';
   descripcion.className = 'form-control';
   divPrecio.className = 'form-group col-md-10';
   precio.className = 'form-control';
   //divRaza.className = 'form-group col-md-5';
   //raza.className = 'form-control';
    imgRaza.className = 'd-inline';
    raza.className = 'form-control col-md-3 spaceLeft d-inline';
   //divFecha.className = 'form-group col-md-5';
   //fecha.className = 'form-control';
    imgMono.className = 'd-inline spaceLeft';
    fecha.className = 'form-control col-md-3 spaceLeft d-inline';
   //divVacunas.className = 'form-group col-md-5';
   divVacunas.className = 'container spaceTop';
   imgVacuna.className = 'd-inline spaceLeft';
   vacunas.className = 'custom-select col-md-2 spaceLeft';

    
   divBotones.className = 'form-group';   
   btnGuardar.className = 'botones';   
  //btnCancelar.className = 'botones';
   btnEliminar.className = 'botones';  
   /* VALORES DE BOTONES */
   btnGuardar.value = "Guardar";
   //btnCancelar.value = "Cancelar";
   btnEliminar.value = "Eliminar"; 



  /**  * CLASES DE ETIQUETAS */
 
    tituloTxt.className = 'whiteLabel';
    gatoTxt.className = 'form-check-label';
    gatoTxt.classList.add('spaceLeft');
    animalTxt.className = 'form-check-label';
    animalTxt.classList.add('whiteLabel');
    animalTxt.classList.add('spaceTop');    
    perroTxt.className = 'form-check-label';    
    perroTxt.classList.add('whiteLabel');
    gatoTxt.className = 'form-check-label';   
    gatoTxt.classList.add('whiteLabel');

    descripcionTxt.className = 'whiteLabel';
    precioTxt.className = 'whiteLabel';
    //razaTxt.className = 'whiteLabel';
    //fechaTxt.className = 'whiteLabel';
    //vacunasTxt.className = 'form-check-label';
    //vacunasTxt.classList.add('whiteLabel');

    /** ASOCIA EL FORM AL DOM */
    frmAlta.appendChild(tituloInformacion);
    divTitulo.appendChild(tituloTxt);
    divTitulo.appendChild(titulo);    
    frmAlta.appendChild(divTitulo);
    divDescripcion.appendChild(descripcionTxt);
    divDescripcion.appendChild(descripcion);
    divDescripcion.appendChild(animalTxt);
    frmAlta.appendChild(divDescripcion);
    divAnimales.appendChild(perroTxt);
    divAnimales.appendChild(perro);
    divAnimales.appendChild(gatoTxt);
    divAnimales.appendChild(gato);    
    frmAlta.appendChild(divAnimales);   
    divPrecio.appendChild(precioTxt);
    divPrecio.appendChild(precio);
    frmAlta.appendChild(divPrecio);
    //divRaza.appendChild(razaTxt);
    //divRaza.appendChild(raza);
    //frmAlta.appendChild(divRaza);
    //divFecha.appendChild(fechaTxt);
    //divFecha.appendChild(fecha);
    //frmAlta.appendChild(divFecha);
    //divVacunas.appendChild(vacunasTxt);
    divVacunas.appendChild(imgRaza)
    divVacunas.appendChild(raza);
    divVacunas.appendChild(imgMono);
    divVacunas.appendChild(fecha);
    divVacunas.appendChild(imgVacuna);
    divVacunas.appendChild(vacunas);
    frmAlta.appendChild(divVacunas);
    divBotones.appendChild(btnGuardar);
    divBotones.appendChild(btnEliminar);
    //divBotones.appendChild(btnCancelar);
    frmAlta.appendChild(divBotones);     
    div.appendChild(frmAlta);

}

