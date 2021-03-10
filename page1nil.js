var h = ["https://i.postimg.cc/jdHG363D/fourth.png", "https://i.postimg.cc/5tVjdmbD/second.png", "https://i.postimg.cc/1XCy8GxR/sixxxx.jpg"]







var i = 0;

function nilop() {





    document.getElementById("images11").src = h[i];

    if (i < (h.length - 1)) {
        i++;


    }
    else {
        i = 0;
    }

}

function currentSlide() {


    document.getElementById("images11").src = h[0];

}
function currentSlide2() {


    document.getElementById("images11").src = h[1];

}
function currentSlide3() {


    document.getElementById("images11").src = h[2];

}

var seet = setInterval(nilop, 2000)

function stop1() {
    clearInterval(seet)
}
