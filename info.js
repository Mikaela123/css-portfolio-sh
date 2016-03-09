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
    greeceinfo.innerHTML = "Location: Southeastern Europe<br>Capital: Athens<br>Popuation: 11.03million<br>Activities: Beaches, Hiking, Sightseeing, Museums, Boating, Swimming<br><br>	Go to Greece today to enjoy a beautiful vacation filled with breathtaking views and interesting history behind the centuries old country. There are many activities that you can do there such as boating or cruising to different islands on Greece, sightseeing Delphi, one of the most important archeological sites in Greek history. You can also tour Athens, Greece's beloved capital filled with amazing history and stories to share. Last, but not least you must visit, Santorini Architecture to see whitewashed homes and blue-domed churches next to thee deep, blue ocean. Visit Greece to enjoy the beautiful beaches and see the history of Greece today!";
});
            
israel.addEventListener("click", function(){
    israelinfo.innerHTML = "Location: Middle Eastern city west of the Dead Sea<br>Capital: Jerusalem<br>Popuation: 809,112<br>Activities: Cycling, Jeep Tours, ATVs &Quad Runners, Horseback Riding, Rafting & Kayaking, Paragliding, Scuba Diving, Swim with Dolphins, Camel Riding<br><br> Go to Israel today to experience unique tradition, religion, and history, but also, increasingly, of modern culture and heritage. Visit the alluring landscape Israel has to offer such as Galilee or Negev Desert. Surrounded by the beautiful scenery of the Negev Desert, there lies the Dead Sea. A fun fact about the Dead Sea is that it is the lowest place on Earth and you can enjoy a relaxing swim in it as well! COme to the most historical and religious country in the world today and experience new cultures, religions, and new ideas!";
});

newyork.addEventListener("click", function(){
    newyorkinfo.innerHTML = "Location: Eastern part of the US<br>Capital: New York City<br>Popuation: 8.406 million<br>Activities: Tour New York, Try all kinds of different cultural food, Walk in Central Park, Broadway Shows, Sightseeing, Museums, Shopping<br><br>The city that never sleeps is one place you don't want to miss. New York City is one of the most diverse, cultural cities in the world. You can enjoy authentic, savory dishes and of course delicious pizza. After eating, you must visit famous attractions such as the Statue of Liberty, Empire State Building, Central Park, Metropolitan Museum of of Art, and Times Square. Don't forget to buy tickets and watch an entertaining and exquist Broadway show that consist of talented singers and wonderful dancers. Visit New York city for a once in a life time experience in this special city today!";
});

barcelona.addEventListener("click", function(){
    barcelonainfo.innerHTML = "Location: Europe's Iberian Peninsula<br>Capital: Madrid<br>Popuation: 46.77 million<br>Activities: Sightseeing, Tours, Boating, Wine Tasting, Concerts, Shopping, Water Sports, Amusment Parkd, Spas<br><br>";
});

