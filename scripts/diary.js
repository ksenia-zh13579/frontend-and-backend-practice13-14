let form = document.getElementsByTagName('form')[0];
let skill = document.getElementById('inputSkill');
let date = document.getElementById('inputDate');
let stat = document.getElementById('selectStatus');

let btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click', () => {
    form.reset();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity())
    {
        event.preventDefault();

        dateValue = date.value.slice(8) + '.' + date.value.slice(5, 7) + '.' +date.value.slice(0, 4);
        result = dateValue + ' - ' + skill.value + ' - ' + stat.value;
        let list = document.getElementById('progressList');
        let newSkillElem = document.createElement('li');
        newSkillElem.innerHTML = result;
        newSkillElem.classList.add('list-group-item');
        list.prepend(newSkillElem); 

        form.reset();
        let modal = bootstrap.Modal.getInstance(document.getElementById('modalAddProgress'));
        modal.hide();
    }
    else
    {
        event.stopPropagation();
    }

    form.classList.add('was-validated');
});