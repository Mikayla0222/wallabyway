/*
function hello(){
  alert("hellooo, this is my website");
}
*/


function myFunction() {
    var string = "Favorites Page";
    var result = string.link("favorites.html");
    document.getElementById("button").innerHTML = result;
}

function hide(id){
    var x = document.getElementById(id);
    x.style.display = "none";
}

function showandhidemovies() {
    var x = document.getElementById("starwasr");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById("bttf");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
