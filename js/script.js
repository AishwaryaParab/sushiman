import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// selecting a popular food category
const filterBtnEls = document.querySelectorAll('.popular-foods__filter-btn');

filterBtnEls.forEach((filterBtnEl) => {
    filterBtnEl.addEventListener('click', (e) => {
        document.querySelector('.active')?.classList.remove('active');
        e.target.classList.add('active');
    });
});