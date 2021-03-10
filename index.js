// ------nil js-----//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// ------nil js-----//

// ------ankit js-----//

function sticky(){
    var head =document.querySelector("#header");
    head.setAttribute("class", "sticky")
    
}
var cnt=0;
function navber(){
    var nav  =document.querySelector("#n_bar")
    var mobile=document.querySelector(".mobile_nav")


    if (cnt%2==0){
        nav.style.display = "none"
        mobile.style.display = "none"

    }else{
        nav.style.display = "flex"
        mobile.style.display = "block"

    }
cnt++;
console.log(nav)
}


window.addEventListener("scroll", sticky)

document.querySelector(".nav_icon").addEventListener("click",navber);
// ------ankit js-----//
