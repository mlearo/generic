$(document).ready(function(){

	var isEmpty       = /^\s*$/,
    	usernameRegex = /^[a-zA-Z0-9\-\_\@\.]+$/, //declare username validation regex
    	passwdRegex   = /^[a-zA-Z0-9\-\_\@\.]+$/,
        nameTest      = /^[a-zA-Z]/;  


//Refactor to log keyup events caught on the parent object, then check the target of the event using the event.target, 
//then handle the event appropriately
// id=newUserInput; <- is the parent object that contains #newUserNameInput & #newUserPasswd
    (function(){ 
         $('#newUserNameInput').keyup(function(){
            ((!usernameRegex.test($('#newUserNameInput').val())) && (!isEmpty.test($('#newUserNameInput').val()))) ? $('#newUserNameInput'). attr("style", "border:inset red 2px"): $('#newUserNameInput').attr("style", "border:inset #66FF00 2px");
            if(isEmpty.test($('#newUserNameInput').val())) $('#newUserNameInput').css("border", "");
    })})();       

    (function(){ 
        $('#newUserPasswd').keyup(function(){
	        ((!passwdRegex.test($('#newUserPasswd').val())) && (!isEmpty.test($('#newUserPasswd').val()))) ? $('#newUserPasswd'). attr("style", "border:inset red 2px"): $('#newUserPasswd').attr("style", "border:inset #66FF00 2px");
            if(isEmpty.test($('#newUserPasswd').val())) $('#newUserPasswd').css("border", "");
    })})();       


    (function(){
        $("#inputBox").keyup(function(){
            //((!nameTest.test($("#inputBox").val())) || ((!isEmpty.test($("#inputBox").val())) ) ? $(".ellipse").attr("style", "background:#f40707") : $(".ellipse").attr("style", "background:#07f417"));    
            //((!isEmpty.test($("#inputBox").val())))? $(".ellipse").attr("style", "background:#f40707") : $(".ellipse").attr("style", "background:#07f417"));    
        })
    })();

    //console.log(document.location);
   
    //$("#btnSubmit").click( function() { $(".ellipse").attr("style","background: #f40707")});
    

    ///////////////////////////////////////////////// 
    //Understanding how to create private variables  
    /////////////////////////////////////////////////
    var outter = function(){
        var privateInner = "private variable";

        return function inner(){
            return function mostInner(){
                console.log(privateInner);
            }
        };

    };
    outter()()();
    


    $("#signUpButton").click(function(){

		//$("#newUserSignUp").focus();
		//var username = $("#newUserNameInput").val();
		//var passwd = $("#newUserPasswd").val();
		//console.log(username + " " + passwd);	
		//$('#signUpModal').modal('toggle')
	});
	
});