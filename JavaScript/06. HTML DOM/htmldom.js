//HTML DOM stand for Document Object Model

document.getElementById('image').alt ="Internet Error";
document.getElementById('image').src = "https://static.wixstatic.com/media/4ec883_14c23ac75f9b4eeab13ea144144c7757~mv2.png";

document.getElementById('h4-text').innerHTML = "HELLO BLUE TECHNOLOGY";
document.getElementById('h4-text').style.color = "blue";
document.getElementById('h4-text').style.padding = "15px";
document.getElementById('h4-text').style.background = "lightblue";
document.getElementById('h4-text').style.display = "inline-block";
document.getElementById('h4-text').style.border = "1px solid red";
document.getElementById('h4-text').style.borderRadius = "10px";


var id = null;
function myMove(){
    var elem = document.getElementById('animate');
    var pos = 0;
    clearInterval(id);
    id = setInterval(frames,5);
    function frames(){
        if(pos == 320){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
           
           
        }
    }
}
var para = document.createElement('myText');
var node = document.createTextNode('This is new');
para.appendChild(node);
//not Success
