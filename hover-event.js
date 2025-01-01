// slider for mobile 

let flag = 0;

function controller(x) {
    flag = flag + x;
    slideShow(flag);
}

slideShow(flag);

function slideShow(num) {
    let slide = document.getElementsByClassName("img-box-m");

    if (num == slide.length) {
        flag = 0;
        num = 0;
    }

    if (num < 0) {
        flag = slide.length - 1;
        num = slide.length - 1;
    }

    for (let y of slide) {
        y.style.display = "none";
    }

    slide[num].style.display = "inline";
}