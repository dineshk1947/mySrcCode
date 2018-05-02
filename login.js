$(document).ready(function() {
  $("#showLoder").hide();
    $('form').submit(function(event) {

        var formData = {
            'psw'              : $('input[name=psw]').val(),
            'email'            : $('input[name=email]').val(),
            'psw-repeat'    : $('input[name=psw-repeat]').val()
        };
        $.ajax({
            type        : 'POST',
            url         : 'https://reqres.in/api/users',
            data        : formData,
            dataType    : 'json',
            encode      : true
        })
            .done(function(data) {
              $("#showLoder").show();
                console.log(data);
                setTimeout(function(){
                    $("#showLoder").hide();
                 }, 3000);
                 $(':input[type="submit"]').prop('disabled', true);
                 // alert("Successfully Submited!!");
                 //window.location.href = "welcome.html";
            });

        event.preventDefault();
    });

});
