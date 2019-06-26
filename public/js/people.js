/*- Crear HOME con una tabla que se pueda eliminar personajes.
- cuando se refresque home, los personajes queden eliminados. 
- Crear 2 paginas mas como HOME pero que le peguen a otro servicio.
- Distintos diseños de tabla
- Persistir datos de servicio 
- Crear una pagina de contacto, devuelva un alert de mail enviado / un alert bootstrap. 
- validar campo mail
- validar vacios
- agregar un parrafo <p> y un gif :)
- La web tiene que ser responsive design (Bootstrap)
- Usar Pug para las vistas.
- usar pug para TODO*/

$(document).ready(function(){ 
  //Pegarle a la API para que traiga todos los personajes
  function call() {
  fetch('https://swapi.co/api/people/')
  .then((data) => {
    return data.json();
  }).then((data) => {
    let personajes = data.results;
    savePeople(personajes);
    printPersonaje(personajes);
  })
}

  /*function call() {
    var request = $.ajax({
      url: "https://swapi.co/api/people/",
      method: "GET"
    });
    
    request.done(function(data){
      var personajes = data.results;
      savePeople(personajes);
      printPersonaje(personajes);
    }),
    request.fail(function (error) {
      console.log(error)
    });
  };*/
  
  //Funcion para guardar los personajes en el localStorage
  function savePeople(personajes){
    var personajes = JSON.stringify(personajes)
    localStorage.setItem('personajes', personajes);
  }
  
  if(localStorage.getItem('personajes')) {
    var personajesJSON = localStorage.getItem('personajes')
    var personajesList = JSON.parse(personajesJSON);
    printPersonaje(personajesList);
  } else {
    call();
  }
  //Armando la table mediante un for
  function printPersonaje() {
    
    for (var i = 0; i < personajesList.length; i++) {
      
      var tableBody = document.getElementById('tableBody');
      
      var tr = document.createElement('tr');
      tableBody.append(tr);
      
      var tdVacio = document.createElement('td');
      tdVacio.textContent = " "
      tr.append(tdVacio);
      
      var tdName = document.createElement('td');
      tdName.textContent = personajesList[i].name
      tr.append(tdName);
      
      var tdGender = document.createElement('td');
      tdGender.textContent = personajesList[i].gender
      tr.append(tdGender);
      
      var tdHeight = document.createElement('td');
      tdHeight.textContent = personajesList[i].height
      tr.append(tdHeight);
      
      var tdMass = document.createElement('td');
      tdMass.textContent = personajesList[i].mass
      tr.append(tdMass);
      
      var tdEye_color = document.createElement('td');
      tdEye_color.textContent = personajesList[i].eye_color
      tr.append(tdEye_color);  
      
      var button = document.createElement('button')
      button.className = 'btn btn-danger';
      button.textContent = 'Eliminar';
      tr.append(button);
      button.dataset.id = i;
    };
  };
  //Funcion para eliminar del localStorage  
  $('.btn.btn-danger').click(function(){
    
    var id = $(this).data('id');
    var personJSONFromLS = localStorage.getItem('personajes');
    var personFromLS = JSON.parse(personJSONFromLS);
    var person = personFromLS.filter(function (personFromLS){
      return personFromLS.name !== id
    });
    person.splice(id,1);
    
    var personJSON = JSON.stringify(person);
    localStorage.setItem('personajes', personJSON);
    
    $(this).parentsUntil('tbody').fadeOut(1000, function () {
      $(this).remove();
      location.reload();
    });
  });
  
  if (localStorage.getItem('personajes') === '[]') {
    localStorage.removeItem('personajes');
    var buttonReset = document.getElementById('buttonReset');
    buttonReset.classList.remove('d-none');
    buttonReset.classList.add('d-block');
    buttonReset.onclick = reset;
    function reset() {
      location.reload()
    }
  }
});
  