const tagContainer = document.querySelector('.tag-container');

function createTag(label){
    const div = document.createElement('div');
    div.setAttribute('class','tag');
    const span = document.createElement('span');
    span.innerHTML=label;
    const closeBtn = document.createElement('span');
    closeBtn.setAttribute('class','material-symbols-outlined');
    closeBtn.innerHTML = 'close';

    div.appendChild(span);
    div.appendChild(closeBtn);

    return div;
}
tagContainer.prepend(createTag('javascript'));