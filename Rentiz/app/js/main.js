const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__icon');
const body = document.body;
if (menu && menuBtn){
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    });
}
const filter = document.querySelector('.filter');
if (filter){
    const items = document.querySelectorAll('.block-filter')
    items.forEach(item => {
        item.addEventListener('click', event =>{
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')){
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}
const swiperPopular = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // If we need pagination
    navigation: {
        nextEl: '.popular__slider-button-next',
        prevEl: '.popular__slider-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        660: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
        },
    }
  });
  const swiperReview = new Swiper('.review-slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
  });