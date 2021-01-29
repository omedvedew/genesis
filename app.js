
// SLIDER SCRIPT
$(document).ready(function(){
    $('.slider').slick({
    //   setting-name: setting-value
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: true,
    });
});


// ABOUT SCRIPT
let toBSBtn = document.querySelector(".to-big-size-btn");
let aboutImage = document.querySelector(".about-image");
let aboutImageContainer = document.querySelector(".about-image-container");
function changeImageBtn () {
    if (aboutImage.classList.contains("about-image-active")) {
        toBSBtn.classList.add("to-close-btn");
    } else {
        toBSBtn.classList.remove("to-close-btn");
    };
};
function changeImage () {
    aboutImage.classList.toggle("about-image-active");
    aboutImageContainer.classList.toggle("about-image-container-active");
}

toBSBtn.addEventListener("click", function() {
    changeImage();
    changeImageBtn();
});

aboutImageContainer.addEventListener("click", function(e) {
    if (e.target === aboutImageContainer) {
        changeImage();
    };
    changeImageBtn();
});


// TABS SCRIPT

// def img script
let defaultTabImage = document.querySelector(".def-tab-img");
function rotateImage() {
    defaultTabImage.classList.toggle("def-tab-img-rotated");
};
let rotation = setInterval(rotateImage, 1500);

function hideTabImage() {
    clearInterval(rotation);
    defaultTabImage.classList.add("def-tab-img-hidden");
}







