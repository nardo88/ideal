const specialists = () => {
    const specialistsTabsTitle = document.querySelectorAll('.specialists__tabs-title')
    const specialistsTabs = document.querySelectorAll('.specialists-tabs')
    const specialistsBtn = document.querySelector('.specialists__btn')
    const specialistsTop = document.querySelector('.specialists__top')
    const specialistsClose = document.querySelector('.specialists__close')

    const toogleActive = () => {
        if (window.innerWidth < 577){
            specialistsTop.classList.toggle('specialists__top--active')
        }
    }


    specialistsTabsTitle.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            toogleActive()
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
    
    if (specialistsBtn){
        specialistsBtn.addEventListener('click', toogleActive)
    }
    if (specialistsClose){
        specialistsClose.addEventListener('click', toogleActive)
    }

}

export default specialists