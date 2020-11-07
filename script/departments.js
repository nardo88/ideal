const departments = () => {
    let departmentsSlider = new Swiper('.slider-top', {
        loop: true,
        slideClass: 'slider-top__item',
        wrapperClass: 'slider-top__wrapper',
        slidesPerView : 3,
        spaceBetween: 30,
        
        pagination: {
            el: '.departments__pagination',
            clickable: true,
            type: 'bullets'
            
        },
       
    })
}

export default departments