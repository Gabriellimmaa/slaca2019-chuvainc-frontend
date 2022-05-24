$(document).ready(function() {
 
    $('#scrolTop, #scrolTop2, #scrolTop3, #scrolTop4').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });

    if($('#error_name:visible')){
        setTimeout(function(){
            $('#error_name').fadeOut();;
        }, 3000)
    }

});

function createTopic() {
    document.getElementById("topic-create").style.display = "block";
    document.getElementById("topic-home").style.display = "none";
    document.getElementById("topic-sucess").style.display = "none";
    document.getElementById("obfuscate").style.display = "none";
}

function sendTopic() {
    document.getElementById("topic-sucess").style.display = "block";
    document.getElementById("obfuscate").style.display = "block";
    document.getElementById("topic-home").style.display = "none";
    document.getElementById("topic-create").style.display = "none";
}