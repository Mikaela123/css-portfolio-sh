// JavaScript File
var hat1= document.getElementById("hat1");
var hat2= document.getElementById("hat2");
var hat3= document.getElementById("hat3");

var hatimage1= document.getElementById("hatimage1");
var hatimage2= document.getElementById("hatimage2");


var dress1= document.getElementById("dress1");
var dress2= document.getElementById("dress2");
var dress3= document.getElementById("dress3");
var dress4= document.getElementById("dress4");
var dress5= document.getElementById("dress5");
var dress6= document.getElementById("dress6");

var dressimage1= document.getElementById("dressimage1");
var dressimage2= document.getElementById("dressimage2");

var shoes1= document.getElementById("shoes1");
var shoes2= document.getElementById("shoes2");
var shoes3= document.getElementById("shoes3");
var shoes4= document.getElementById("shoes4");

var shoesimage1= document.getElementById("shoesimage1");
var shoesimage2= document.getElementById("shoesimage2");

var info= document.getElementById("info");

var info1= document.getElementById("info1");
var info2= document.getElementById("info2");


hat1.addEventListener("click", function(){
    hatimage1.innerHTML = " ";
    hatimage2.innerHTML = "<img src='http://content.mycutegraphics.com/graphics/clothing/girls-hat-pink-bow.png' alt='pink hat' width='150px' class='hat' id='pinkhat'>"
});

hat2.addEventListener("click", function(){
    hatimage1.innerHTML = " ";
    hatimage2.innerHTML = "<img src='http://www.cutecliparts.com/wp-content/uploads/2015/08/Yellow-Girls-Hat-Clip-Art.png' alt='yellow hat' width=150px' class='hat' id='yellowhat'>"
});

hat3.addEventListener("click", function(){
    hatimage1.innerHTML = " ";
    hatimage2.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/307/girl-hat-clip-art-307589.png' alt='purple hat' width='150px' class='hat' id='purplehat'>"
});

dress1.addEventListener("click", function(){
    dressimage1.innerHTML = " ";
    dressimage2.innerHTML = "<img src='http://images.clipartpanda.com/tango-clipart-red-dress-md.png' alt='red dress' width='200px' class='dress' id='reddress'>"
});

dress2.addEventListener("click", function(){
    dressimage1.innerHTML = " ";
    dressimage2.innerHTML = "<img src='http://cliparts.co/cliparts/pT7/8yk/pT78yk68c.png' alt='orange dress' width='200px' class='dress' id='orangedress'>"
});

dress3.addEventListener("click", function(){
    dressimage1.innerHTML = " ";
    dressimage2.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/118/yellow-dress-clip-art-118114.png' alt='yellow dress' width='200px' class='dress' id='yellowdress'>"
});

dress4.addEventListener("click", function(){
    dressimage1.innerHTML = " ";
    dressimage2.innerHTML = "<img src='http://images.clipartpanda.com/green-dress-clipart-green-dress-md.png' alt='green dress' width='200px' class='dress' id='greendress'>"
});

dress5.addEventListener("click", function(){
    dressimage1.innerHTML = " ";
    dressimage2.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/255/dress-clip-art-255104.png' alt='blue dress' width='200px' class='dress' id='bluedress'>"
});

dress6.addEventListener("click", function(){
    dressimage1.innerHTML = " ";
    dressimage2.innerHTML = "<img src='http://www.clker.com/cliparts/q/E/4/r/Q/L/purple-dress-md.png' alt='purple dress' width='200px' class='dress' id='purpledress'>"
});

shoes1.addEventListener("click", function(){
    shoesimage1.innerHTML = " ";
    shoesimage2.innerHTML = "<img src='http://www.clipartlord.com/wp-content/uploads/2014/05/high-heel-shoes5.png' alt='red shoes' width='75px' class='shoes' id='redshoes'>"
});

shoes2.addEventListener("click", function(){
    shoesimage1.innerHTML = " ";
    shoesimage2.innerHTML = "<img src='http://images.clipshrine.com/download/wheel/medium-High-Heels-Woman-Shoe-Fashion-166.6-14061.png' alt='green shoes' width='75px' class='shoes' id='greenshoes'>"
});

shoes3.addEventListener("click", function(){
    shoesimage1.innerHTML = " ";
    shoesimage2.innerHTML = "<img src='http://images.clipshrine.com/wheel/thumb-High-Heels-Woman-Shoe-Fashion-0-14061.png' alt='turqiouse shoes' width='75px' class='shoes' id='turquoiseshoes'>"
});

shoes4.addEventListener("click", function(){
    shoesimage1.innerHTML = " ";
    shoesimage2.innerHTML = "<img src='http://images.clipshrine.com/download/wheel/large-Red-Shoe-66.6-14061.png' alt='purple shoes' width='75px'  class='shoes' id='purpleshoes'>"
});

info.addEventListener("click", function(){
    info1.innerHTML = "Why Did You Choose That Combination of Colors?";
    info2.innerHTML = "Color choices are connected to emotional responses that doesn't have a valid explanation as to why. The powerful influence of color impacts our choices in everything from choice of food, clothes, cars. Psychologists Stephen Palmer and Karen Schloss of UC Berkeley tested the theory that human color preference is adaptive; that is, people are more likely to survive and reproduce successfully if they are attracted to objects with colors that look good to them, and they will avoid objects with colors that look bad to them. In that case they belive when colors are associated with a positive memory of someone, they result in liking that color because it reminds them of a positive experience. Stephen Palmer and Karen Schloss performed an experiment where they asked 48 participants to rate 32 colors to their liking. Their results showed that brightly saturated colors were perferred over muted, dull pastel colors. Brown and olives green were lest perferred than vibrant colors such as orange and yellow. The highest rankings of likes were bright reds, blues, and green. Although this study showed that vibrant, brightly saturated colors were most liked these colors were not associated with objects such as food so we don't know how people would react to various colored things in our world. In conclusion, colors are a very important part of our life, we make decisions off them and can change our emotion about anything.  ";
});