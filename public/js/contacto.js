$(document).ready(function(){
    //Asigno el evento onclik al boton submit
    document.addEventListener('DOMContentLoaded', function() {
        window.onload = function(){
            var btSubmit = document.getElementById("#btSubmit");
            btSubmit.onclick = sendMsj
        } 
        
    });
    //Validacion de campos
    var fName = document.getElementById("fname")  
    fName.onblur = valueName
    function valueName(event){
        var fNameNode = event.target;
        
        if(!fNameNode.value){
            fNameNode.classList.remove("is-valid")
            fNameNode.classList.add("is-invalid")
        } else {
            fNameNode.classList.remove("is-invalid")
            fNameNode.classList.add("is-valid")
        }
    };
    
    var lName = document.getElementById("lname")  
    lName.onblur = valueLastName
    
    function valueLastName(event){
        var lNameNode = event.target;
        
        if(!lNameNode.value){
            lNameNode.classList.remove("is-valid")
            lNameNode.classList.add("is-invalid")
        } else {
            lNameNode.classList.remove("is-invalid")
            lNameNode.classList.add("is-valid")
        }
    };
    
    var email = document.getElementById("email")  
    email.onblur = valueMail
    
    function valueMail(event){
        var emailNode = event.target;
        
        if(
            !emailNode.value ||
            emailNode.value.indexOf("@") === -1 ||
            emailNode.value.indexOf(".") === -1 ||
            emailNode.value.length < 10
            ) {
                emailNode.classList.remove("is-valid")
                emailNode.classList.add("is-invalid")
            } else {
                emailNode.classList.remove("is-invalid")
                emailNode.classList.add("is-valid")
            }
        }   
    });
    //Funcion de alerta de mensaje enviado
    function sendMsj(){
        var fName = document.getElementById("fname")
        var lName = document.getElementById("lname")  
        var email = document.getElementById("email") 
        var message = document.getElementById("message")

        if(!fName.value || !lName.value || !email.value || !message.value){
            alert("Ingrese los datos por favor")
        } else {
            alert("Mensaje enviado con exito")
        };
    }
