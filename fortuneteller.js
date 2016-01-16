// Javascript File

//This is for the color buttons so that it knows that you have already chosen one of the buttons of the question
var pickedColor;
var hasColor = false;
var colors = document.querySelectorAll("input.colors");
for(var i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function (evt){
//the if statement is so that the user can only choose one answer for each question
    if(!hasColor){
        pickedColor = evt.target.value;       
        evt.target.style.border = "solid black 2px";
        hasColor = true;
    }

    });
}
//This is for the number questions, this allows the user to clicj on the option they want and only letting them select one answer
var pickedNumber;
var hasNumber = false;
var numbers = document.querySelectorAll("input.numbers");
for(var i = 0; i < numbers.length; i++){    
    numbers[i].addEventListener("click", function (evt){
        
    if(!hasNumber){
        pickedNumber = evt.target.value;
        evt.target.style.border = "solid black 2px";
        hasNumber = true;
    }
    
    });
}
//This is for the shape question, allowing the user to only choose one answer for the question
var pickedShape;
var hasShape = false;
var shapes = document.querySelectorAll("button.shapes");
for(var i = 0; i < shapes.length; i++){
    shapes[i].addEventListener("click", function (evt){
        
    if(!hasShape){
        pickedShape = evt.target.value;
        evt.target.style.border = "solid black 2px";
        hasShape = true;
    }
    
    });
}
//This is for the month question. Here I made if statements so that the user can only select one answer per question.
var pickedMonth;
var hasMonth = false;
var months = document.querySelectorAll("input.months");
for(var i = 0; i < months.length; i++){
    months[i].addEventListener("click", function (evt){
        
    if(!hasMonth){
        pickedMonth = evt.target.value;
        evt.target.style.border = "solid black 2px";
        hasMonth = true;
    }
    
    });
}
//This for the Fortune Button, this button will allow the user receive the fortune they have been waiting for.
var pickedFortuneButton;
var fortuneButtonAnswer = document.getElementById("fortuneButtonAnswer");
var fortuneButton = document.querySelectorAll("input.fortuneButton");
for(var i = 0; i < months.length; i++){
    fortuneButton[i].addEventListener("click", function (evt){
        
        evt.target.style.color = "green";
        fortuneButtonAnswer.innerHTML = "A beautiful, smart, and loving person will be coming into your life.";
    });
}







