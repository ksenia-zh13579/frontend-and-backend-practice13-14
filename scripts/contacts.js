let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
    if (!form.checkValidity())
    {
        event.preventDefault();
        event.stopPropagation();
    }
    else
    {
        alert('Спасибо, ваше обращение отправлено!');
    }

    form.classList.add('was-validated');
});