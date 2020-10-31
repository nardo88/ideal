const nav = () => {

    const navigationItemSub = document.querySelectorAll('.navigation__item--sub')
    const navigationSublist = document.querySelectorAll('.navigation__sublist')
    const burger = document.querySelector('.burger')
    const navigationList = document.querySelector('.navigation__list')
    const navigationListClose = document.querySelector('.navigation__list-close')
    const navigationItemWrapper = document.querySelectorAll('.navigation__item--wrapper')
    

        burger.addEventListener('click', () => {
            
            navigationList.classList.add('open-menu')
        })
        navigationListClose.addEventListener('click', () => {
            navigationList.classList.remove('open-menu')
        })

        navigationItemSub.forEach((item, i) => {
            item.addEventListener('click', () => {
                navigationSublist[i].classList.toggle('open-list')
            })
        })


    navigationItemSub.forEach((item) => {
        item.addEventListener('click', (e) => {
            const target = e.target.closest('.navigation__item--sub').childNodes[3]
            const child = target.childNodes[1]
            if (target.classList.contains('active')) {
                navigationItemWrapper.forEach(item => {
                    item.style.height = '0px'
                    item.classList.remove('active')
                })
            } else {
                navigationItemWrapper.forEach(item => {
                    item.style.height = '0px'
                    item.classList.remove('active')
                })
                target.classList.add('active')
                target.style.height = child.offsetHeight + 'px'
            }


        })
    })

    document.body.addEventListener('click', event => {
        const target = event.target.closest('.navigation__item--sub')
        if (!target){
            navigationItemWrapper.forEach(item => {
                item.style.height = '0px'
                item.classList.remove('active')
            })
        }
        
    })

    
}

export default nav