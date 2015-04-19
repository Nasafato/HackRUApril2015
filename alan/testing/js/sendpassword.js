$( "#signin" ).submit(function( event ) {
    var password = $('.password').val();
    var username = $('.username').val();
    $.post("demo_test.py", 
    {
        username: username,
        password: password  
    },
        function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

  console.log( "Password = "+password+", Username = "+username );
  event.preventDefault();
});

function setInvalid()
{

}
