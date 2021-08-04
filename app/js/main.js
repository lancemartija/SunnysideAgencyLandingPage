const burgerBtn = document.querySelector('#burger-menu')

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.classList.contains('active'))
    burgerBtn.classList.remove('active')
  else
    burgerBtn.classList.add('active')
})