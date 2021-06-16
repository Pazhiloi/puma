$(function () {
  $('.product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow:'<img class="arrow-left" src="images/icons/arrow-right.svg" alt="arrow">',
  nextArrow:'<img class="arrow-right" src="images/icons/arrow-right.svg" alt="arrow">',
});

  $('.gallary__items').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:'<img class="prev-arrow" src="images/icons/prev-arrow.svg" alt="arrow">',
  nextArrow:'<img class="next-arrow" src="images/icons/next-arrow.svg" alt="arrow">',
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  $('.gallary__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<img class="arrow-prev" src="images/icons/prev-arrow.svg" alt="arrow">',
  nextArrow:'<img class="arrow-next" src="images/icons/next-arrow.svg" alt="arrow">',
  infinite: false,
});
var mixer = mixitup('.gallary__items', {
   });
  $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
});
  $(".menu__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  window.onscroll = function showHeader() {
    var header = document.querySelector('.header__inner');
    if(window.pageYOffset > 200) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   };
});