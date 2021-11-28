var interval = null;

// function to apply zoom in the music styles divs
function generateZoom(obj){
    var output = document.getElementById(obj);

    output.style.backgroundColor = "#8fc0dd";
    output.style.margin = "1%";
} // end of function generateZoom

/*---------------------------------*/

// function to remove zoom from the music styles divs
function backFromZoom(obj){
    var output = document.getElementById(obj);

    output.style.backgroundColor = "white";
    output.style.margin = "0";
}// end of function backFromZoom

/*---------------------------------*/

// function to apply zoom in the music benefits divs
function applyZoom(obj){
    var output = document.getElementById(obj);

        output.style.marginTop= "-5%";
        output.style.backgroundColor = "rgb(74, 57, 131)";
}// end of function applyZoom

/*---------------------------------*/

// function to remove zoom from the music benefits divs
function removeZoom(obj){
   
    var output = document.getElementById(obj);

    output.style.marginTop= "0";
    output.style.backgroundColor = "rgb(92, 76, 146) ";
}// end of function removeZoom

/*---------------------------------*/

// function to blink the introduction at home page
function createBlink(){
    var interval = 1000;
    var time = setInterval(function(){
        var div = document.getElementById("middle");
        div.style.visibility = (div.style.visibility == "hidden" ? "" : "hidden");
    }, interval)

    var text = "Welcome to Music World";

    var target = document.getElementById("middle");

    target.innerText = text;

    target.style.borderRadius="20px";
    target.style.color = "cornflowerblue";
    target.style.fontSize = "xx-large";
    target.style.textAlign = "center";
    target.style.fontWeight = "bolder";
    target.style.height = "100px";
}// end of function createBlink