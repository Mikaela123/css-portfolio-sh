// JavaScript File
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info");

item1.addEventListener("click", function(){
    info1.innerHTML = "Some stuff";
    info2.innerHTML = "some other stuff";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Item 2 stuff";
    info2.innerHTML = "Item 2 other stuff";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "Item 2 stuff";
    info2.innerHTML = "Item 2 other stuff";
});