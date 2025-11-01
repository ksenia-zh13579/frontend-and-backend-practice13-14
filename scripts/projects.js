function filter(btnId)
{
    btnId.setAttribute('aria-pressed', 'true');

    let projectsContainers = document.getElementsByName('projectContainer');

    for (let projCont of projectsContainers)
    {
        let tech = btnId.slice(3);
        
        if (tech === 'all' || projCont.dataset.tech.includes(tech))
        {
            projCont.classList.remove('d-none');
        }
        else
        {
            projCont.classList.add('d-none');
        }
    }
}