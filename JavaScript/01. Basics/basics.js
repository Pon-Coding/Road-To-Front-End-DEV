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
//Object
var car = {
    Ronaldo : "Cry",
    Messi : "Won The World Cup"
}
// console.log(car.Ronaldo);


//String methods

var str = "ROPON POV";

var pos = str.indexOf("N");
var search = str.search("P");
var slice = str.slice(0,5);
// console.log(slice);


//Number Methods
var pi = 3.14;
var value1 = 3;

// console.log(pi.toFixed(1));

//=> Arrays Methods
var books = ["Book-1","Book-2","Book-3"];
var emptyStr = "";

for(var i=0; i<books.length; i++){
    emptyStr+=books[i] + "\t";
}
books.pop();
books.push("Book-6");
books.push("Book-4");
books.push("Book-5");
books.sort();
books.reverse();
// console.log(books);


//Date Method
var date = new Date();

// console.log(date);


function enterYourGoat(){
    var goatName = document.getElementById('goat').value;
    var getYourGoat = document.getElementById('yourGoat');
    switch(goatName){
        case "MESSI":
            getYourGoat.style.color = "green";

            getYourGoat.innerHTML = "Won The World Cup 2022";
            break;
        case "RONALDO":
            getYourGoat.style.color = "blue";

            getYourGoat.innerHTML = "Cry More Bro ): ";
            break;
        default:
            if(goatName == "" || goatName == null || goatName == NaN){
                window.alert("Please Input Something In The Text Field !!! ");
            } else {
                getYourGoat.style.color = "red";
                getYourGoat.innerHTML = "Error 404";
    
                window.alert("You input was not found. \n Please try something new instead of "+goatName);
            }
           
    }
}


//Bitwise Operator
// &              AND
// |              OR
// ^              XOR
// ~              NOT
// <<             Zero fill left shift
// >>             Signed right shift
// >>>            Zero fill right shift



// => Class In Java-Script
class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
std = new Student(1,"Ropon");




//JSON 
//stand for -> Javascript Object Notation

// [
//     "status code" : 200,
//     "date" : [
//         {
//             "Name" : "Ropon",
//             "Age" : 20,
//         }
//     ]
    
// ]

