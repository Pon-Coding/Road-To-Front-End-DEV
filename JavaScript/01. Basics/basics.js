console.log("Hello Blue Technology");

var counter = 0;
var fontSize = 30;
function ClickMe(){
    counter++;
    document.getElementById('InputMe').innerHTML = "BLUE TECHNOLOGY --> "+counter;
    
}

function chnageColor(){
    document.getElementById('InputMe').style.color = "BLUE";
}
function resetColor(){
    document.getElementById('InputMe').style.color = "BLACK";
}

function loopIncreaseFont(){
    fontSize+=3;
    document.getElementById('InputMe').style.fontSize = fontSize+"px";
}