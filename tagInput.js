const tagContainer = document.querySelector('.tag-container');

const input = document.querySelector('.tag-container input');

var tags = [];

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
function reset(){
    document.querySelectorAll('.tag').forEach(function(tag){
        tag.parentElement.removeChild(tag);
    })
}
function addTags(){
    reset();
    tags.forEach(function(tag){
        const input = createTag(tag);
        tagContainer.prepend(input);
    })
   
}
input.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        tags.push(input.value);
        addTags();
        input.value='';
    
    }
}) 