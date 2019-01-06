var firstTime;
var myInt;
var myTime;
document.addEventListener("DOMContentLoaded", () => {

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-131826143-2');

    var tooltiper = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltiper, {});

    //console.log("firstTime:", firstTime);
    startTrash();

    function startTrash() {
        //console.log("in start");
        firstTime = false;
        //console.log("firstTime:", firstTime);
        setTimeout(trashBegin, 10000);

    }

    function trashBegin() {
        //console.log("in begin");
        //console.log("firstTime:", firstTime);
        myInt = setInterval(myTimer, 1000 / 8);
        myTime = setTimeout(trashStop, 10000);
    }


    function myTimer() {
        var logo = document.getElementById("trashtrash");
        var bck = document.getElementById("splashTrash");

        (logo.style.color == "black") ? logo.style.color = "white": logo.style.color = "black";
        (bck.style.backgroundColor == "white") ? bck.style.backgroundColor = "black": bck.style.backgroundColor = "white";
        
        //console.log('in strobe');
        
        if (firstTime === true) {
            clearInterval(myInt);
            clearTimeout(myTime);
            trashStop();
        }
    }

    function trashStop() {
        //console.log("hit stop");
        
        firstTime = true;
        
        //console.log("firstTime", firstTime);
        
        var logo = document.getElementById("trashtrash");
        var bck = document.getElementById("splashTrash");
        logo.style.color = "white";
        bck.style.backgroundColor = "black";
        
    }
});