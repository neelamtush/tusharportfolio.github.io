// typing animation
var typing = new typed (".typing",{

    strings : ["Web Developer", "Web Designer", "Freelancer"],
    typeSpeed:200,
    backSpeed :80,
    loop:true

});

// sticky navbar
window.onscroll = function(){

    var navbar = document.getElementById("navbar");

    if(window.scrollY > 55){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

    // scroll to top
    let button = document.getElementById("btn");

    if(document.documentElement.scrollTop > 90){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }

};

function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}

// menu toggle bar
function menu(){
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}