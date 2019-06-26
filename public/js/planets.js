$(document).ready(function(){
//Pega a la api y guarda datos en el localStorage
function call() {
  fetch('https://swapi.co/api/planets/')
  .then((data) => {
    return data.json();
  }).then((data) => {
    let planets = data.results;
    savePlanets(planets);
    printPlanetas(planets);
  })
}
/*function call(){
    var request = $.ajax({
        url: "https://swapi.co/api/planets/",
        method: "GET"
    });
    request.done(function (data){
        var planets = data.results;
        savePlanets(planets);
        printPlanetas(planets);
    }),
    request.fail(function (error) {
      console.log(error)
    })
  };*/
  
  //Funcion para guardar los personajes en el localStorage
    function savePlanets(planetas){
      var planetas = JSON.stringify(planetas)
      localStorage.setItem('planetas', planetas)
    }
  if(localStorage.getItem('planetas')){
      var planetasJSON = localStorage.getItem('planetas')
      var planetsList = JSON.parse(planetasJSON)
      printPlanetas(planetsList)
  } else{
      call();
  }
//Armando la table mediante un for
function printPlanetas(){
        
       for(var i = 0; i < planetsList.length; i++){
       var tableBody = document.getElementById("tableBody")

       var tr = document.createElement("tr")
       tableBody.append(tr);

       var tdVacio = document.createElement("td")
       tdVacio.textContent = " "
       tr.append(tdVacio);
       
       var tdName = document.createElement("td")
       tdName.textContent = planetsList[i].name
       tr.append(tdName);
       
       var tdClimate = document.createElement("td")
       tdClimate.textContent = planetsList[i].climate
       tr.append(tdClimate);
       
       var tdGravity = document.createElement("td")
       tdGravity.textContent = planetsList[i].gravity
       tr.append(tdGravity);
       
       var tdPopulation = document.createElement("td")
       tdPopulation.textContent = planetsList[i].population
       tr.append(tdPopulation);

       var button = document.createElement('button')
       button.className = 'btn btn-danger';
       button.textContent = 'Eliminar';
       tr.append(button);
       button.dataset.id = i;
       };
   };

        
//Funcion para eliminar los datos del localStorage
$('.btn.btn-danger').click(function(){
    $(this).parentsUntil('tbody').fadeOut(1000, function () {
      $(this).remove();
      location.reload();
    });
    
    var id = $(this).data('id');
    var planetsJSONFromLS = localStorage.getItem('planetas');
    var planetsFromLS = JSON.parse(planetsJSONFromLS);
    
    planetsFromLS.splice(id,1);
    
    savePlanets(planetsFromLS);
  });
});

if (localStorage.getItem('planetas') === '[]') {
  localStorage.removeItem('planetas');
  var buttonReset = document.getElementById('buttonReset');
  buttonReset.classList.remove('d-none');
  buttonReset.classList.add('d-block');
  buttonReset.onclick = reset;
    function reset() {
      location.reload()
  }
}