AOS.init({
    offset: 380,
    delay: 50, 
    duration: 500,
});

const btn = document.querySelectorAll(".test-btn");
const slider = document.getElementById("slider");

btn[0].onclick = function() {
    slider.style.transform = "translate(0px)";
    for(i=0; i<5; i++){
        btn[i].classList.remove("active");
    }this.classList.add("active");
}
btn[1].onclick = function() {
    slider.style.transform = "translate(-800px)";
    for(i=0; i<5; i++){
        btn[i].classList.remove("active");
    }this.classList.add("active");
}
btn[2].onclick = function() {
    slider.style.transform = "translate(-1600px)";
    for(i=0; i<5; i++){
        btn[i].classList.remove("active");
    }this.classList.add("active");
}
btn[3].onclick = function() {
    slider.style.transform = "translate(-2400px)";
    for(i=0; i<5; i++){
        btn[i].classList.remove("active");
    }this.classList.add("active");
}
btn[4].onclick = function() {
    slider.style.transform = "translate(-3200px)";
    for(i=0; i<5; i++){
        btn[i].classList.remove("active");
    }this.classList.add("active");
}
Source Code.txt
Displaying Source Code.txt.