const specialists = () => {
    const specialistsTabsTitle = document.querySelectorAll('.specialists__tabs-title')
    const specialistsTabs = document.querySelectorAll('.specialists-tabs')
    const specialistsBtn = document.querySelector('.specialists__btn')
    const specialistsTop = document.querySelector('.specialists__top')
    const specialistsClose = document.querySelector('.specialists__close')

    const toogleActive = () => {
        specialistsTop.classList.toggle('specialists__top--active')
    }


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

    window.addEventListener('resize', () => {
        if (window.innerWidth < 577){
            specialistsTabsTitle.forEach(item => {
                item.addEventListener('click', toogleActive)
            })
        }
    })

    

    specialistsBtn.addEventListener('click', toogleActive)
    specialistsClose.addEventListener('click', toogleActive)

}

export default specialists