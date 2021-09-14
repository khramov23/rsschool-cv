let burger = document.querySelector('.burger');
let burgerStick = document.querySelector('.burger__stick');
let mobileMenu = document.querySelector('.mobile-menu')
let link = document.querySelectorAll('.mobile__list-item a')

burger.addEventListener('click', () => {
  if (burgerStick.classList.contains('burger__stick_active')) {
    burgerStick.classList.remove('burger__stick_active');
    mobileMenu.classList.remove('mobile-menu_active')
  } else {
    burgerStick.classList.add('burger__stick_active');
    mobileMenu.classList.add('mobile-menu_active')
  }
})

for (let key of link) {
  key.addEventListener('click', () => {
    burgerStick.classList.remove('burger__stick_active');
    mobileMenu.classList.remove('mobile-menu_active')
  })
}