$( "#internSignin" ).submit(function( event ) {
    console.log("intern signing in");
    var password = $('.password').val();
    var username = $('.username').val();
    console.log( "Password = "+password+", Username = "+username );

    $.post("/internSignin", 
    {
        username: username,
        password: password  
    },
        function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

  event.preventDefault();
});

$( "#internRegister" ).submit(function( event ) {
    console.log("intern registering");
    var password = $('.password').val();
    var username = $('.username').val();
    console.log( "Password = "+password+", Username = "+username );
    $.post("/internRegister", 
    {
        username: username,
        password: password  
    },
        function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });


  event.preventDefault();
});

$("#box-login").click(function(event){
    if ($("#box-login").hasClass("active") != true) {
        $("#box-login").addClass("active");
        $("#box-register").removeClass("active");
    }
});

$("#box-register").click(function(event){
    if ($("#box-register").hasClass("active") != true) {
        $("#box-register").addClass("active");
        $("#box-login").removeClass("active");
    }
});