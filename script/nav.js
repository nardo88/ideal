const nav = () => {

    const burger = document.querySelector('.burger')
    const navigationListClose = document.querySelector('.navigation__list-close')
    const navigationWrapper = document.querySelector('.navigation__wrapper')

    burger.addEventListener('click', () => {

        navigationWrapper.classList.add('open-menu')
    })
    navigationListClose.addEventListener('click', () => {
        navigationWrapper.classList.remove('open-menu')
    })
}

export default nav