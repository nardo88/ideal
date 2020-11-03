const certificates = () => {
    let className = 'certificates__pagination-item'

    let certificatesSlider = new Swiper('.certificates__slider', {
        loop: true,
        slideClass: 'certificates__item',
        wrapperClass: 'certificates__container',
        
        centeredSlides: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.certificates__pagination',
            clickable: true,
            type: 'bullets'
            
        },
        breakpoints: {
            1200: {
                spaceBetween: 60,
                slidesPerView: 3,
            },
            993: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            843: {
                slidesPerView: 3,
                spaceBetween: 30,


            },
            770: {
                slidesPerView: 3,

            },
            480: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            320: {
                spaceBetween: 20,
                slidesPerView: 1,
            }

        }
       
    })
}

export default certificates