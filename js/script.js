import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

function showFoodItems(index) {
    foodMenus.forEach((foodMenu, i) => {
        if(index == i) {
            return foodMenu.style.display = "flex";
        }
        foodMenu.style.display = "none";
    });
}

document.querySelector(".footer__logo").addEventListener('click', (e) => {
    window.scrollTo(0, 0);
});

// selecting a popular food category
const filterBtnEls = document.querySelectorAll('.popular-foods__filter-btn');
const foodMenus = document.querySelectorAll('.popular-foods__catalogue');

filterBtnEls.forEach((filterBtnEl, index) => {
    filterBtnEl.addEventListener('click', (e) => {
        document.querySelector('.active')?.classList.remove('active');
        e.target.classList.add('active');
        showFoodItems(index);
    });
});

showFoodItems(0); // at first, all is selected

// responsive mobile menu
const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile_header__menu");
const mobileMenuItems = document.querySelectorAll(".mobile_header__menu > li");
const body = document.body;
const cancelBtn = document.querySelector(".cancel");

function hideMobileMenu() {
    hamburgerIcon.style.display = "block";
    mobileMenu.style.display = "none";
    body.style.overflow = "auto";
}

hamburgerIcon.addEventListener('click', (e) => {
    hamburgerIcon.style.display = "none";
    mobileMenu.style.display = "flex";
    body.style.overflow = "hidden";
})

cancelBtn.addEventListener('click', (e) => {
    hideMobileMenu();
})

mobileMenuItems.forEach((mobileMenuItem, index) => {
    mobileMenuItem.addEventListener('click', () => {
        hideMobileMenu();
    })
});

// play video
const playBtn = document.querySelector(".hero-content_play-button");
const videoPlayer = document.querySelector(".video-player");

playBtn.addEventListener('click', () => {
    videoPlayer.style.display = "block";
});

// send mail
const mailInput = document.querySelector(".subscription__form input");
const submitBtn = document.querySelector(".subscription__form button");
submitBtn.addEventListener('click', () => {
    mailInput.value = "";
});

