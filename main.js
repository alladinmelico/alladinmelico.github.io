import './style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
})
