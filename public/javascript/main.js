$(document).ready(function(){

	var isEmpty       = /^\s*$/,
    	usernameRegex = /^[a-zA-Z0-9\-\_\@\.]+$/, //declare username validation regex
    	passwdRegex   = /^[a-zA-Z0-9\-\_\@\.]+$/;

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



	$("#signUpButton").click(function(){

		//$("#newUserSignUp").focus();
		//var username = $("#newUserNameInput").val();
		//var passwd = $("#newUserPasswd").val();
		//console.log(username + " " + passwd);	
		//$('#signUpModal').modal('toggle')
	})
	
});