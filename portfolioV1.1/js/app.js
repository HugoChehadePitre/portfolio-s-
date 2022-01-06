/**** DATE ****/
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/*** BACK TO TOP BUTTON ***/
const backToTop = document.querySelector('.backtotop');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 500) {
        backToTop.classList.add('showbtn')
    } else {
        backToTop.classList.remove('showbtn')

    }
});


/**** MOBILE NAVIGATION BAR *****/ 


const navBtn = document.querySelector('.nav__btn');
const navMobileList = document.querySelector(".nav__list--mobile");
const navListItem = document.querySelectorAll(".nav__mobile--item");


navBtn.addEventListener('click', () => {
if(!navMobileList.classList.contains("showlist")) {
    navMobileList.classList.add("showlist");
} else {
    navMobileList.classList.remove("showlist");
}
});

navListItem.forEach((item) => {
item.addEventListener('click', () => {
    navMobileList.classList.remove('showlist')
    });
});



