const pricesContentItem = document.querySelectorAll('.prices__content-item');
const serviceListItem = document.querySelectorAll('.service-list__item');

// табы
serviceListItem.forEach((item, i) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        pricesContentItem.forEach(item => {
            item.classList.remove('prices__content-item--active');
        })
        pricesContentItem[i].classList.add('prices__content-item--active');

        // скрол
        let scrollHeight = document.getElementById('table').offsetTop;
        
        window.scrollTo({top: scrollHeight, behavior: 'smooth'});
    })
})

