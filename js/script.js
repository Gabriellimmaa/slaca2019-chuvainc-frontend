function showAnswers(){
    const elements = document.querySelectorAll('.card-answers');
    Array.from(elements).forEach((element, index) => {
        if(element.style.display === "block"){
            element.style.display="none";
        }else{
            element.style.display="block";
        }
    });
    

}

function boldConvert(clicked) {
    var element = document.getElementById("formControlConteudo");
    if (element.style.fontWeight === "") {
        clicked.style.backgroundColor="#EE7A3A";
        clicked.style.color="white";
        element.style.fontWeight="bold";
    }else {
        clicked.style.backgroundColor=null;
        clicked.style.color=null;
        element.style.fontWeight=null;
    }
}

function italicConvert(clicked) {
    var element = document.getElementById("formControlConteudo");
    if (element.style.fontStyle === "") {
        clicked.style.backgroundColor="#EE7A3A";
        clicked.style.color="white";
        element.style.fontStyle="italic";
    }else {
        clicked.style.backgroundColor=null;
        clicked.style.color=null;
        element.style.fontStyle=null;
    }
}

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
