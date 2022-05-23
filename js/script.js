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