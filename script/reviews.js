const reviews = () => {

    const mainSlider = document.querySelector('.main-slider')
    const secondSlider = document.querySelector('.second-slider')

    let reviewsMainSlider = new Swiper(mainSlider, {
        breakpoints: {
            577:{
                slidesPerView: 2,
                allowTouchMove: true
            },
            320: {
                slidesPerView: 1,
                allowTouchMove: false
            }
        },
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
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
        breakpoints: {
            577:{
                allowTouchMove: true
            },
            320: {
                slidesPerView: 1,
                allowTouchMove: false
            }
        },
    })


}

export default reviews