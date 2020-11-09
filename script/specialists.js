const specialists = () => {
    const specialistsTabsTitle = document.querySelectorAll('.specialists__tabs-title')
    const specialistsTabs = document.querySelectorAll('.specialists-tabs')


    specialistsTabsTitle.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            specialistsTabsTitle.forEach(title => {
                title.classList.remove('specialists__tabs-title--active')
            })
            item.classList.add('specialists__tabs-title--active')
            specialistsTabs.forEach(tab => {
                tab.classList.remove('specialists-tabs--active')
            })
            specialistsTabs[i].classList.add('specialists-tabs--active')
        })
    })

}

export default specialists