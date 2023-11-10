var fontSize = 18;

function increaseFont(){
    document.getElementById('result').style.fontSize =fontSize+"px";
    fontSize++;
}
function decreaseFont(){
    document.getElementById('result').style.fontSize =fontSize+"px";
    fontSize--;
}
function resetFont(){
    document.getElementById('result').style.fontSize ="18px";
}
function colorSelect(yourColor){
    document.getElementById('result').style.color = yourColor;
}
function colorChange(buttonElement){

    // console.log();
  var id =   document.getElementById(buttonElement.id).value;
    switch(id){
        case "Color-1":
            colorSelect("WHITE");
        break
        case "Color-2":
            colorSelect("RED");

        break
        case "Color-3":
            colorSelect("ORANGE");

        break
        case "Color-4":
            colorSelect("GREEN");

        break
        case "Color-5":
            colorSelect("BLACK");

        break
        case "Color-6":
            colorSelect("PINK");

        break
        case "Color-7":
            colorSelect("BLUE");

        break
        case "Color-8":
            colorSelect("YELLOW");

        break
        case "Color-9":

        break
    }
}

function sentTextToResult(){
    var valueFromTxt = document.getElementById('text-01').value;

    document.getElementById('result').innerHTML = valueFromTxt;
}
function sentRealTimeText(){
   var valueT1 = document.getElementById('real-time-text').value;
    document.getElementById('result').innerHTML = valueT1;
}


function addMore(){
    var addRadio = '<tr> <td> Blue Technolgy </td> <td> KIMSENG </td><td> Cambodia </td> </tr>';
    var myTable = '<fieldset> <legend> KIMSENG </legend> <input type="radio"> </input> '+addRadio;
    document.getElementById('seng').innerHTML +=addRadio; 
    // document.write(rs);
    
}

function selectValueLight(){
    var radioButtons = document.getElementById('Light').value;
        console.log(radioButtons);
    document.body.style.backgroundColor = "White";
    document.getElementsByTagName('legend')[0].style.color = "Black";
    var documentT = document.getElementsByClassName('template-tool');

    for(var i=0;i<documentT.length; i++){
        documentT[i].style.backgroundColor = "grey";
    }
        
}
function selectValueDark(){
    var radioButtons = document.getElementById('Dark').value;
        console.log(radioButtons);

    document.body.style.backgroundColor = "Black";
    document.getElementsByTagName('legend')[0].style.color = "White";
   var documentT = document.getElementsByClassName('template-tool');

    for(var i=0;i<documentT.length; i++){
        documentT[i].style.backgroundColor = "red";
    }


}
