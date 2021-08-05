const burgerBtn = document.querySelector('#burger-button')
const burgerNav = document.querySelector('#burger-nav')
const aboutAnchorTag = document.querySelector('#about');
const serviceAnchorTag = document.querySelector('#service');
let burgerBtnIsActive = false;

const removeBurgerNav = () => {
  burgerBtn.classList.remove('active')
  burgerNav.classList.remove('toggle-visibility')
  burgerNav.classList.remove('fade-in')
  burgerNav.classList.add('fade-out')
  burgerBtnIsActive = false;
}

const addBurgerNav = () => {
  burgerBtn.classList.add('active')
  burgerNav.classList.add('toggle-visibility')
  burgerNav.classList.add('fade-in')
  burgerNav.classList.remove('fade-out')
  burgerBtnIsActive = true;
}

burgerBtn.addEventListener('click', () => {
  if (!burgerBtnIsActive) addBurgerNav()
  else removeBurgerNav()
  aboutAnchorTag.addEventListener('click', removeBurgerNav)
  serviceAnchorTag.addEventListener('click', removeBurgerNav)
})