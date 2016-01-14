// JavaScript File
var pickedColor;
var colors = document.querySelectorAll("input.colors")
for(var i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function (evt){
        
        evt.target.style.color = "white"
    });
}
if()

var pickedNumber;
var numbers = document.querySelectorAll("input.numbers")
for(var i = 0; i < colors.length; i++){
    numbers[i].addEventListener("click", function (evt){
        
        evt.target.style.color = "white"
    });
}

var pickedShape;
var shapes = document.querySelectorAll("button.shapes")
for(var i = 0; i < shapes.length; i++){
    shapes[i].addEventListener("click", function (evt){
        
        evt.target.style.color = "white"
    });
}

var pickedMonth;
var months = document.querySelectorAll("input.months")
for(var i = 0; i < months.length; i++){
    months[i].addEventListener("click", function (evt){
        
        evt.target.style.color = "white"
    });
}