// JavaScript File
var fortuneButton = document.getElementsById("fortuneButton");
var fortuneButtonInfo = document.getElementsById("fortuneButtonInfo");

var pickedColor;
var hasColor = false
var colors = document.querySelectorAll("input.colors")
for(var i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function (evt){

    if(!hasColor){
        pickedColor = evt.target.value;       
        evt.target.style.border = "solid black 2px"
        hasColor = true
    }

    });
}

var pickedNumber;
var hasNumber = false
var numbers = document.querySelectorAll("input.numbers")
for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (evt){
        
    if(!hasNumber){
        pickedNumber = evt.target.value;
        evt.target.style.border = "solid black 2px"
        hasNumber = true
    }
    
    });
}

var pickedShape;
var hasShape = false
var shapes = document.querySelectorAll("button.shapes")
for(var i = 0; i < shapes.length; i++){
    shapes[i].addEventListener("click", function (evt){
        
    if(!hasShape){
        pickedShape = evt.target.value;
        evt.target.style.border = "solid black 2px"
        hasShape = true
    }
    
    });
}

var pickedMonth;
var hasMonth = false
var months = document.querySelectorAll("input.months")
for(var i = 0; i < months.length; i++){
    months[i].addEventListener("click", function (evt){
        
    if(!hasMonth){
        pickedMonth = evt.target.value;
        evt.target.style.border = "solid black 2px"
        hasMonth = true
    }
    
    });
}

var fortuneButton;
var fortuneButton = document.querySelectorAll("input.fortuneButton")
for(var i = 0; i < months.length; i++){
    fortuneButton[i].addEventListener("click", function (evt){
        
        evt.target.style.color = "pink"
    });
}