$(document).ready(function () {

    $('#scrolTop, #scrolTop2, #scrolTop3, #scrolTop4').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    if ($('#error_name:visible')) {
        setTimeout(function () {
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

function showMenu() {
    var x = document.getElementById("showMenu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}


function show() {
    document.getElementById('scritta').className = 'visible-text';
}
function hide() {
    document.getElementById('scritta').className = 'hidden-text';
}

var p1 = document.getElementById("p1");
p1.onclick = show;
var p2 = document.getElementById("p2");
p2.onclick = hide;

$('#p2').hide();

$('#p1').click(function () {
    $('#p1').toggle();
    $('#p2').toggle();
});

$('#p2').click(function () {
    $('#p1').toggle();
    $('#p2').toggle();
});
