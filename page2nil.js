
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




