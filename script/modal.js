const modal = () => {
    const topButton = document.querySelector('.top__button');
    const modalCallback = document.querySelector('.modal-callback')
    const closeModal = document.querySelector('.modal-callback__close')
    const overlay = document.querySelector('.overlay')

    const toggleOverlay = () => {
        overlay.classList.toggle('active')
    }

    topButton.addEventListener('click', () => {
        modalCallback.classList.add('open-modal')
        toggleOverlay()
    })
    closeModal.addEventListener('click', () => {
        modalCallback.classList.remove('open-modal')
        toggleOverlay()
    })
    overlay.addEventListener('click', () => {
        modalCallback.classList.remove('open-modal')
        toggleOverlay()
    })
}



export default modal