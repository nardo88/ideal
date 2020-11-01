const about = () => {
    const aboutSlider = document.querySelector('.about__slider')
    
    let about = new Swiper(aboutSlider, {
        loop: true,
        slideClass: 'about__content',
        wrapperClass: 'about__slider-wrapper',
        navigation: {
            nextEl: '.about__next',
            prevEl: '.about__prev',
        },
    })
    
}


export default about