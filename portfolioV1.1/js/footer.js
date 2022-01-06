let createFooter = () => {
const footer = document.querySelector('.footer');

footer.innerHTML = `<ul class="footer__ul" id="wapp__footer--ul">
    <li id='linkedin' class="footer__link"><a href="https://www.linkedin.com/in/hugo-chehade-pitre-028076121/" class="social__btn" target="_blank"><i class="fa fa-linkedin-square fa-lg"></i></a></li> 
    <li class="footer__link"><a href="https://github.com/Riplec" class="social__btn" target="_blank"><i class="fa fa-github-square fa-lg"></i></a></li> 
    <li class="footer__link"><a href="https://www.facebook.com/huuuugs/" class="social__btn" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a></li> 
    <li class="footer__link"><a href="mailto:hugocpitre@gmail.com" class="social__btn"><i class="fa fa-envelope fa-lg"></i></a></li> 
</ul>

<p class="cr__footer"><br>Copyright HCP Webdev © <span id="date"></span>.</p>`

}

createFooter();
