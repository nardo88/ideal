const pricesContentItem = document.querySelectorAll('.prices__content-item');
const servicePriceItem = document.querySelectorAll('.service-price__item');
const servicePriceButton = document.querySelector('.service-price__button');
const servicePriceInner = document.querySelector('.service-price__inner');
const servicePriceClose = document.querySelector('.service-price__close');

pricesContentItem[0].classList.add('prices__content-item--active');
servicePriceItem[0].classList.add('service-price__item--active');


// табы
servicePriceItem.forEach((item, i) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        pricesContentItem.forEach(item => {
            item.classList.remove('prices__content-item--active');
        })
        pricesContentItem[i].classList.add('prices__content-item--active');

        // скрол
        let scrollHeight = document.getElementById('table').offsetTop;
        window.scrollTo({top: scrollHeight, behavior: 'smooth'});


        servicePriceInner.classList.remove('service-price__inner--active');

        servicePriceItem.forEach(key => {
            key.classList.remove('service-price__item--active')
        })
        servicePriceItem[i].classList.add('service-price__item--active')
    })
})


servicePriceButton.addEventListener('click', () => {
    servicePriceInner.classList.add('service-price__inner--active')
})

servicePriceClose.addEventListener('click', () => {
    servicePriceInner.classList.remove('service-price__inner--active')

})
