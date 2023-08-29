var burgerElement = document.querySelector('.burger');

if(burgerElement) {
  burgerElement.addEventListener('click', function() {
    this.classList.toggle("active");
    document.querySelector(".header__container").classList.toggle("active");
    document.body.classList.toggle("lock");
  })
}

var swiper = new Swiper(".trending__swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  watchOverflow: true,
  breakpoints: {
    360: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 30,
    },
    1140: {
      spaceBetween: 40,
    }
  }
});

var swiper = new Swiper(".genres__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  grid: {
    rows: 2,
  },
  watchOverflow: true,
  autoHeight: false,

  360: {
    spaceBetween: 20,
  },
  768: {
    spaceBetween: 30,
  },
  1140: {
    spaceBetween: 40,
  }
});

var swiper = new Swiper(".popular__swiper", {
  slidesPerView: "auto",
  spaceBetween: 58,
  watchOverflow: true,

  breakpoints: {
    360: {
      spaceBetween: 40,
    },
    768: {
      spaceBetween: 58,
    },
    1140: {
      spaceBetween: 58,
    }
  }
});
