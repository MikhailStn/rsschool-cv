const hamburgerIcon = document.querySelector('.hamburger-icon')
const hamburger = document.querySelector('.hamburger')
const body = document.querySelector('.body')
const hamurgerBackground = document.querySelector('.hamburger__background')
const links = document.querySelectorAll('.hamburger__navigation-link')

const toggleMenu = () => {
    hamburgerIcon.classList.toggle('open');
    hamburger.classList.toggle('open')
    body.classList.toggle('open')
    hamurgerBackground.classList.toggle('open')
}

const closeMenu = () => {
    hamburgerIcon.classList.remove('open');
    hamburger.classList.remove('open')
    body.classList.remove('open')
    hamurgerBackground.classList.remove('open')
}


hamburgerIcon.addEventListener('click', toggleMenu);
links.forEach(el => el.addEventListener('click', closeMenu))
hamurgerBackground.addEventListener('click', closeMenu)