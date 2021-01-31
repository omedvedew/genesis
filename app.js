
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
let defaultTab = document.querySelector(".default-tab");
function hideTabImage() {
    clearInterval(rotation);
    // defaultTabImage.classList.add("def-tab-img-hidden");
    defaultTab.classList.add("default-tab-hidden");
}

// tabs script
let tabBtns = document.querySelectorAll(".tab-btn");
let tabFeatures = document.querySelectorAll(".tab-feature");
let tabContainer = document.querySelector(".features-container");

tabContainer.addEventListener("click", function(e) {
    let target = e.target;
    if (target.classList.contains("tab-btn")) {
        hideTabImage();
        tabBtns.forEach((btn, i) => {
            btn.classList.remove("tab-btn-active");
            tabFeatures[i].classList.remove("tab-feature-active");
            if (target === btn) {
                btn.classList.add("tab-btn-active");
                tabFeatures[i].classList.add("tab-feature-active");
            };
        });
    };
});



// MOBILE MENU SCRIPT
let logoBtn = document.querySelector(".logo");
let mobileMenu = document.querySelector(".mobile-menu");
let closeMobileMenuBtn = document.querySelector(".close-mob-menu-btn");
console.log(mobileMenu);
function showMobileMenu() {
    mobileMenu.classList.add("mobile-menu-active");
    setTimeout(hideMobileMenu, 7000);
};
function hideMobileMenu() {
    mobileMenu.classList.remove("mobile-menu-active");
};
logoBtn.addEventListener("click", showMobileMenu);
closeMobileMenuBtn.addEventListener("click", hideMobileMenu);
mobileMenu.addEventListener("click", hideMobileMenu);

// TREE MODAL "ADD FAMILY MEMEVER" SCRIPT
let afmModal = document.querySelector(".profile-modal-container");
let afmModalWindow = document.querySelector(".profile-modal-window");
let afmButton = document.querySelector(".add-family-member-btn");
let afmSubmitBtn = document.querySelector(".profile-submit-btn");
let afmCancelBtn = document.querySelector(".profile-cancel-btn");

function showAFMModal() {
    afmModal.classList.add("pmc-active");
};
function hideAFMModal() {
    afmModal.classList.remove("pmc-active");
};

afmButton.addEventListener("click", showAFMModal);
afmSubmitBtn.addEventListener("click", hideAFMModal);
afmCancelBtn.addEventListener("click", hideAFMModal);
afmModal.addEventListener("click", function(e) {
    let target = e.target;
    if (target === afmModal) {
        hideAFMModal();
    };
});



// PROFILE INFO MODAL SCRIPT
let infoModal = document.querySelector(".profile-info-modal");
let infoModalCloseBtn = document.querySelector(".profile-info-close-btn");
let personBtn = document.querySelectorAll(".person");

function showInfoModal() {
    infoModal.classList.add("profile-info-modal-active");
    console.log(personBtn);
};
function hideInfoModal() {
    infoModal.classList.remove("profile-info-modal-active");
};

personBtn.forEach((btn) => {
    btn.addEventListener("click", function() {
        console.log(btn.lastElementChild.textContent);
    });
});
infoModalCloseBtn.addEventListener("click", hideInfoModal);





