import Swiper from 'swiper';

import './js/content.js';
import './js/menu.js';
import './js/modalBose.js';
import './js/modalOrder.js';

const swiper = new Swiper('.slider-reviews', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
    },
  },
});
