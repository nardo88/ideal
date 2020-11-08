const departments = () => {
    const sliderTopItem = document.querySelectorAll('.slider-top__item')
    const tabsItem = document.querySelectorAll('.tabs__item')


    let departmentsSlider = new Swiper('.slider-top', {
        slideClass: 'slider-top__item',
        wrapperClass: 'slider-top__wrapper',
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.departments__next',
            prevEl: '.departments__prev',
        },
        pagination: {
            el: '.departments__pagination',
            clickable: true,
            type: 'bullets'
        },
        breakpoints: {
            
            993: {
                slidesPerView: 3,
                spaceBetween: 30,


            },
            640: {
                slidesPerView: 2,
            },
            320: {
                spaceBetween: 20,
                slidesPerView: 1,
            }

        }
    })

    sliderTopItem.forEach((item, i) => {
        item.addEventListener('click',() => {
            tabsItem.forEach(item => {
                item.classList.remove('active-tab')
            })
            sliderTopItem.forEach(slide => {
                slide.classList.remove('active-slide')
            })
            tabsItem[i].classList.add('active-tab')
            sliderTopItem[i].classList.add('active-slide')
        })
    })
}

export default departments