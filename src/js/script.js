let mediaQuery = window.matchMedia('(max-width: 1366px)')
let mediaQueryTwo = window.matchMedia('(min-width: 1366px)')
let mediaQueryThree = window.matchMedia('(max-width: 768px)')
let menuBlur = document.querySelector('.menu-blur')

//swiper-----------------------------------------------------//
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      allowTouchMove: false
    }
  }
})

//menu--------------------------------------------------------//
let menu = document.querySelector('.menu')
let headerMenu = document.querySelector('.header__menu')
let closeHeader = document.querySelector('.menu-header__close')

headerMenu.addEventListener('click', function () {
  menu.removeAttribute('style')
  menu.classList.add('menu--showed')
  menuBlur.classList.add('menu-blur--showed')
})

menuBlur.addEventListener('click', function () {
  menu.classList.remove('menu--showed')
  call.classList.remove('call--showed')
  menuBlur.classList.remove('menu-blur--showed')
  feedback.classList.remove('feedback--showed')
})

closeHeader.addEventListener('click', function () {
  menu.removeAttribute('style')
  menu.classList.remove('menu--showed')
  menuBlur.classList.remove('menu-blur--showed')
})

//call--------------------------------------------------------//
let headerCall = document.querySelector('.header__call')
let menuCall = document.querySelector('.menu-footer__call')
let call = document.querySelector('.call')
let callClose = document.querySelector('.call__close')

headerCall.addEventListener('click', function () {
  call.classList.add('call--showed')
  menuBlur.classList.add('menu-blur--showed')
  feedback.classList.remove('feedback--showed')
})
menuCall.addEventListener('click', function () {
  call.classList.add('call--showed')
  menuBlur.classList.add('menu-blur--showed')
  menu.classList.remove('menu--showed')
  feedback.classList.remove('feedback--showed')
})
callClose.addEventListener('click', function () {
  menuBlur.classList.remove('menu-blur--showed')
  call.classList.remove('call--showed')
})
//feedback--------------------------------------------------------//
let headerFeedback = document.querySelector('.header__chat')
let menuFeedback = document.querySelector('.menu-footer__chat')
let feedback = document.querySelector('.feedback')
let feedbackClose = document.querySelector('.feedback__close')
headerFeedback.addEventListener('click', function () {
  feedback.classList.add('feedback--showed')
  menuBlur.classList.add('menu-blur--showed')
  call.classList.remove('call--showed')
})
menuFeedback.addEventListener('click', function () {
  feedback.classList.add('feedback--showed')
  menuBlur.classList.add('menu-blur--showed')
  menu.classList.remove('menu--showed')
  call.classList.remove('call--showed')
})
feedbackClose.addEventListener('click', function () {
  menuBlur.classList.remove('menu-blur--showed')
  feedback.classList.remove('feedback--showed')
})
//read-more----------------------------------------------------//
let readMore = document.querySelectorAll('.read-more')
let brandsMain = document.querySelector('.brands__swiper-wrapper')
let techMain = document.querySelector('.tech__swiper-wrapper')
let pageText = document.querySelector('.page__text')

readMore.forEach((button) => {
  button.addEventListener('click', function () {
    showMore(button)
  })
})

function showMore(button) {
  if (button.textContent === 'Показать все') {
    brandsMain.style.height = `${brandsMain.scrollHeight}px`
    button.textContent = 'Скрыть'
    button.classList.toggle('read-more--arrow-up')
  } else if (button.textContent === 'Показать все') {
    techMain.style.height = `${techMain.scrollHeight}px`
    button.textContent = 'Скрыть'
    button.classList.toggle('read-more--arrow-up')
  } else if (button.textContent === 'Читать далее') {
    pageText.style.height = `${pageText.scrollHeight}px`
    button.textContent = 'Скрыть текст'
    button.classList.toggle('read-more--arrow-up')
  } else if (button.textContent === 'Скрыть') {
    button.textContent = 'Показать все'
    brandsMain.style.height = 160 + 'px'
    button.classList.toggle('read-more--arrow-up')
  } else if (button.textContent === 'Скрыть текст') {
    button.textContent = 'Читать далее'
    pageText.style.height = 90 + 'px'
    button.classList.toggle('read-more--arrow-up')
  } else if (button.textContent === 'Скрыть ') {
    button.textContent = 'Показать все '
    techMain.style.height = 160 + 'px'
    button.classList.toggle('read-more--arrow-up')
  }
}
