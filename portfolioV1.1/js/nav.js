let createNav = () => {
    const nav = document.querySelector('.nav');

    nav.innerHTML = `<h4 id="nav__title"><span id="nav__h">H</span>CP</h4>
    <button class="nav__btn" type="button">
        <i class="fa fa-bars fa-2x"></i>
    </button>

<ul class="nav__list--mobile">
    <a class="nav__item--link" href="/index.html#home"><li class='nav__mobile--item'>home</li></a>
    <a class="nav__item--link" href="/index.html#about"><li class='nav__mobile--item'>about</li></a>
    <a class="nav__item--link" href="/index.html#work"><li class='nav__mobile--item'>work</li></a>
    <a class="nav__item--link" href="/index.html#contact"><li class='nav__mobile--item'>contact</li></a>
    
</ul>

<ul id="nav__regular">
    <li class="nav__list--item"><a href="/index.html#home" class="nav__item">home</a></li>
    <li class="nav__list--item"><a href="/index.html#about" class="nav__item">about</a></li>
    <li class="nav__list--item"><a href="/index.html#work" class="nav__item">work</a></li>
    <li class="nav__list--item"><a href="/index.html#contact" class="nav__item">contact</a></li>
</ul>`

}

createNav();
