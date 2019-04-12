// CALCULATOR BUTTON FUNCTIONS

// Comments labelled by class names of buttons ("input" is an id)

var startFontSize = '120px';
var constants = [];
var addPend = false;
var subPend = false;
var multiPend = false;
var divPend = false;
var clear = false;
var twoConst = false;


window.addEventListener('load', () => {
    document.getElementById("input").style['font-size'] = startFontSize //need to pre-load font size 
})

function aC() {
    var zero = 0;
    document.getElementById("input").innerHTML = zero;
    document.getElementById("input").style['font-size'] = startFontSize;
    constants = [];


    
  }
  

// adding a value while removing 0 (value of AC)

function addNumber(param) {
    if(document.getElementById("input").innerHTML === '0'){
        document.getElementById("input").innerHTML = '';
    }
    
    if(document.getElementById("input").innerHTML.length >= 1 /                                   // shrinking integers
    parseFloat(document.getElementById("input").style['font-size'].replace('px', '')) * 1000) {
        document.getElementById("input").style['font-size'] = 
        `${Math.max(parseFloat(document.getElementById("input").style['font-size'].replace('px', '')) - 20, 15)}px`;
    }
    if (clear) {                           //removing 0 
        document.getElementById("input").innerHTML = "";
        clear = false;
    } 
    var curval = document.getElementById("input").innerHTML+= param;
    console.log(document.getElementById("input").innerHTML);
}

// OPERATORS

function add() {
    var integers = parseFloat(document.getElementById("input").innerHTML);
    constants.push(integers);
        
    addPend = true;
    subPend = false;
    multiPend = false;
    divPend = false;
    clear = true;
    console.log(constants);
    if(constants.length > 2) {
        equals()
    }        

}
 

function subtract() {
    var integers = parseFloat(document.getElementById("input").innerHTML);           
    constants.push(integers);
    console.log(constants);
    addPend = false;
    subPend = true;
    multiPend = false;
    divPend = false;
    clear = true;
    if(constants.length === 2) {
        equals()
    }        
    console.log(subtract);
}

function multiply() {
    var integers = parseFloat(document.getElementById("input").innerHTML);           
    constants.push(integers);
    console.log(constants);
    subPend = false;
    addPend = false;
    multiPend = true;
    divPend = false;
    clear = true;
    if(constants.length === 2) {
        equals()
    }        
}

function divide() {
    var integers = parseFloat(document.getElementById("input").innerHTML);           
    constants.push(integers);
    console.log(constants);
    subPend = false;
    addPend = false;
    multiPend = false;
    divPend = true;
    clear = true;
    if(constants.length === 2) {
        equals()
    }        
}


function equals() {
    var integers = parseFloat(document.getElementById("input").innerHTML);    ///turn into integers
    if(constants.length < 2) {       
    constants.push(integers);
    }
    console.log(constants);
    var sum = constants[0];
    
    
    if(addPend) {
        for (var i = 1; i < constants.length; i++){ // use a different way to add the integers together ???
            sum += constants[i]; 
        }
    }

    else if(subPend) {
        for (var i = 1; i < constants.length; i++){
            sum -= constants[1];
        }
    }    
    else if(multiPend) {
        for (var i = 1; i < constants.length; i++){
            sum *= constants[1];
        }
    }
    else if (divPend) {
        for (var i = 1; i < constants.length; i++){
            sum/= constants[1];
        }
    }    
    constants = [];
    
   console.log(sum);
    
    document.getElementById("input").innerHTML= sum;

    constants = [sum];
    console.log(constants);
}