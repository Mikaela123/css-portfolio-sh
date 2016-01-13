// JavaScript File
var greece = document.getElementById("greece");
var israel = document.getElementById("israel");
var newyork = document.getElementById("newyork");
var barcelona = document.getElementById("barcelona");
var greeceinfo = document.getElementById("greeceinfo");
var israelinfo = document.getElementById("israelinfo");
var newyorkinfo = document.getElementById("newyorkinfo");
var barcelonainfo = document.getElementById("barcelonainfo");

greece.addEventListener("click", function(){
    greeceinfo.innerHTML = "Location: Southeastern Europe<br>Capital: Athens<br>Popuation: 11.03million<br>Activities: Beaches, Hiking, Sightseeing, Museums, Boating, Swimming";
});
            
israel.addEventListener("click", function(){
    israelinfo.innerHTML = "Location: Middle Eastern city west of the Dead Sea<br>Capital: Jerusalem<br>Popuation: 809,112<br>Activities: ";
    info2.innerHTML = "Item 2 other stuff";
});

newyork.addEventListener("click", function(){
    newyorkinfo.innerHTML = "Location: Eastern part of the US<br>Capital: New York City<br>Popuation: 8.406 million<br>Activities: ";
    info2.innerHTML = "Item 2 other stuff";
});

barcelona.addEventListener("click", function(){
    barcelonainfo.innerHTML = "Location: Europe’s Iberian Peninsula<br>Capital: Madrid<br>Popuation: 46.77 million<br>Activities: ";
    info2.innerHTML = "Item 2 other stuff";
});

