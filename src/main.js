import './styles.scss'

import filterCategories from './js/filterCategories.js'
import modalDemo from './js/modalDemo.js'
import modalGallery from './js/modalGallery.js'
import modalOrder from './js/modalOrder.js'
import selectSortOptions from './js/selectSortOptions.js'


import Swiper from 'swiper'
import 'swiper/css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'

document.addEventListener("DOMContentLoaded", () => {
  filterCategories()
  selectSortOptions()
  modalGallery()
  modalDemo()
  modalOrder()

  const swiperInterface = new Swiper('.interface__swiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.interface__btns--forw',
      prevEl: '.interface__btns--prev',
    },
  })



  const swiperBrands = new Swiper('.brands__swiper', {
    slidesPerView: 1,
    breakpoints: {
      '1000': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },

    },
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.brands__btns--forw',
      prevEl: '.brands__btns--prev',
    },
  })

  const swiperMore = new Swiper('.more__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      '1000': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },

    },
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.more__btns--forw',
      prevEl: '.more__btns--prev',
    },
  })


  const swiperGallery = new Swiper('.gallery__swiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.gallery__btns--forw',
      prevEl: '.gallery__btns--prev',
    },
  })
})

