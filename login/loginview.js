$(document).ready(function(){
    $('#register-submit').on('submit',function() {
        let userName =document.getElementById("InputUsername").nodeValue;   
        if(userName == ""){
            $("InputUsername").addClass("is-invalid");
            return false
        }
        else{
            $("InputUsername").addClass("is-valid"); 
            return true
        }
    });
});