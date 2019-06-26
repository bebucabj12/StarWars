$(document).ready(function(){
    //Pega a la api y guarda datos en el localStorage
    function call(){
        var request = $.ajax({
            url: "https://swapi.co/api/starships/",
            method: "GET"
        });    
        request.done(function (data){
            var starships = data.results;
            saveStarships(starships);
            printStarships(starships);
        }),
        
        request.fail(function (error) {
            console.log(error)
        });
    };
    
    //Funcion para guardar los personajes en el localStorage
    function saveStarships(starships){
         var starships = JSON.stringify(starships);
         localStorage.setItem('starships', starships)
    }
    if(localStorage.getItem('starships')){
        var starshipsJSON = localStorage.getItem('starships');
        var starshipsList = JSON.parse(starshipsJSON)
        printStarships(starshipsList)
    } else {
        call();
    }

    //Armando la table mediante un for
    function printStarships(){
               
           for(var i = 0; i< starshipsList.length; i++){
           var tableBody = document.getElementById("tableBody")
    
           var tr = document.createElement("tr")
           tableBody.append(tr);
    
           var tdVacio = document.createElement("td")
           tdVacio.textContent = " "
           tr.append(tdVacio);
           
           var tdName = document.createElement("td")
           tdName.textContent = starshipsList[i].name
           tr.append(tdName);
           
           var tdManufacturer = document.createElement("td")
           tdManufacturer.textContent = starshipsList[i].manufacturer
           tr.append(tdManufacturer);
           
           var tdCrew = document.createElement("td")
           tdCrew.textContent = starshipsList[i].crew
           tr.append(tdCrew);
           
           var tdPassengers = document.createElement("td")
           tdPassengers.textContent = starshipsList[i].passengers
           tr.append(tdPassengers);
    
           var tdConsumables = document.createElement("td")
           tdConsumables.textContent = starshipsList[i].consumables
           tr.append(tdConsumables);
    
           var button = document.createElement('button')
           button.className = 'btn btn-primary';
           button.textContent = 'Eliminar';
           tr.append(button);
           button.dataset.id = i;
           };
       };       
  
   //Funcion para eliminar los datos del localStorage
    $('.btn.btn-primary').click(function(){
        $(this).parentsUntil('tbody').fadeOut(1000, function () {
           $(this).remove();
           location.reload();
        });
        
        var id = $(this).data('id');
        var starshipsJSONFromLS = localStorage.getItem('starships');
        var starshipsFromLS = JSON.parse(starshipsJSONFromLS);
        
        starshipsFromLS.splice(id,1);
        
        saveStarships(starshipsFromLS);
       
    });
    //Funcion para recargar los items
    
    if (localStorage.getItem('starships') === '[]') {
        localStorage.removeItem('starships');
        var buttonReset = document.getElementById('buttonReset');
        buttonReset.classList.remove('d-none');
        buttonReset.classList.add('d-block');
        buttonReset.onclick = reset;
        function reset() {
            location.reload()
        }
    }
});        
    
