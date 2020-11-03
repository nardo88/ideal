const reviews = () => {

    const mainSlider = document.querySelector('.main-slider')
    const secondSlider = document.querySelector('.second-slider')

    let reviewsMainSlider = new Swiper(mainSlider, {
        loop: true,
        slideClass: 'main-slider__item',
        wrapperClass: 'main-slider__wrapper',
        watchSlidesVisibility: true,
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 20
    })

    let reviewsSecondSlider = new Swiper(secondSlider, {
        loop: true,
        slideClass: 'second-slider__item',
        wrapperClass: 'second-slider__wrapper',

        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 100,
        thumbs: {
            swiper: reviewsMainSlider
        },
        autoHeight: true,
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
        },
    })


}

export default reviews