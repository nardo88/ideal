const modal = () => {
    const topButton = document.querySelector('.top__button');
    const modalCallback = document.querySelector('.modal-callback')
    const closeModal = document.querySelector('.modal-callback__close')
    const overlay = document.querySelector('.overlay')
    const inputPhone = document.querySelector('.modal-callback__input--phone')
    const form = document.querySelector('.modal-callback__form')


    let maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    let mask = IMask(inputPhone, maskOptions);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form)
        // создаем объект с помощью конструктора FormData
        // в качестве аргумента передаем элемент нашей формы
        let formData = new FormData(form)
        
        // если переменная error равна 0 то выполняем отправку
        if (error === 0) {
            // далее мы используем fetch запрос у которого два аргумента
            // первый - это куда отправляем данные
            // второй - это метод запроса (POST) и передаваемые данные
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            })
            console.log(formData);
            // response - это ответ, если его параметр ok == true, тогда
            if (response.ok) {
                // в переменную result помещаем ответ преобразив его в формат 
                // JSON
                let result = await response.json()
                // Выводим alert c результатом ответа
                alert(result.message)
                
                // перезагружаем форму что бы очистить поля
                form.reset()
                
                // если же что то пошло не так
            } else {
                // мы выдаем alert c результатом
                alert('Ошибка!')
            }
            // если валидация вернула не 0, то выдаем алерт с сообщением
            // о необходимости заполнения полей
        } else {

        };
    }

     // Валидация формы
     function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll('._req')
        
        formReq.forEach(item => {
            formRemoveError(item)
            if (item.getAttribute("type") === "checkbox"){
                formRemoveError(item.nextElementSibling)
            }
            if (item.getAttribute("type") === "checkbox" && item.checked === false){
                formAddError(item.nextElementSibling)
                error++
                // здесь просто проверяем что значение value не пустая строка
            } else {
                if (item.value === ''){
                    formAddError(item)
                    error++
                }
            }
        })
        return error
    }

    // Добавление эффектов если форма не прошла валидацию
    function formAddError(input) {
        input.classList.add('_error')
    }
    // Удаление эффектов если форма не прошла валидацию
    function formRemoveError(input) {
        input.classList.remove('_error')
    }

    
    // появление модального окна
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
    // отправка формы
    form.addEventListener('submit', formSend);
}



export default modal