// ------nil js-----//
// var slideIndex = 1;
// //showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
/* <page2niljssss></page2niljssss> */
var hoof = ["https://i.postimg.cc/jdHG363D/fourth.png", "https://i.postimg.cc/5tVjdmbD/second.png", "https://i.postimg.cc/1XCy8GxR/sixxxx.jpg","https://i.postimg.cc/jdHG363D/fourth.png"]
var pop = 0;
function nilopp() {
    document.getElementById("images_online_12").src = hoof[pop];
    if (pop < (hoof.length - 1)) {
        pop++;
    }
    else {
        pop = 0;
    }
}
var seet = setInterval(nilopp, 2000)
function currentSlide_nilo() {
    document.getElementById("images_online_12").src = hoof[0];
}
function currentSlide_nilo2() {
    document.getElementById("images_online_12").src = hoof[1];
}
function currentSlide_nilo3() {
    document.getElementById("images_online_12").src = hoof[2];
}
function currentSlide_nilo4() {
    document.getElementById("images_online_12").src = hoof[3];
}
function sliders_nil(j = 0){   
    if(j == 0){
        document.getElementById("images_online_12").src = hoof[j];
        console.log(j)
        j++
        console.log(j)
    }
}
function sliders_nil2(j = 2){   
    if(j == 2){
        document.getElementById("images_online_12").src = hoof[j];
        console.log(j)
        j++
        console.log(j)
    }
}
/* <page2niljssss></page2niljssss> */

// ------nil js-----//

// ------ankit js-----//

// function sticky(){
//     var head =document.querySelector("#header");
//     head.setAttribute("class", "sticky")
    
// }
// var cnt=0;
// function navber(){
//     var nav  =document.querySelector("#n_bar")
//     var mobile=document.querySelector(".mobile_nav")


//     if (cnt%2==0){
//         nav.style.display = "none"
//         mobile.style.display = "none"

//     }else{
//         nav.style.display = "flex"
//         mobile.style.display = "block"

//     }
// cnt++;
// console.log(nav)
// }


// window.addEventListener("scroll", sticky)

// document.querySelector(".nav_icon").addEventListener("click",navber);
// ------ankit js-----//
