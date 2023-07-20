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
    closeBtn.setAttribute('data-item',label);
    closeBtn.innerHTML = 'close';
    closeBtn.addEventListener('click', function(e) {
        const value = e.target.getAttribute('data-item');
        const index = tags.indexOf(value);
        console.log("before",tags);
        tags = [...tags.slice(0, index), ...tags.slice(index+1)];
        console.log("after",tags);
        addTags();
    });

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
    tags.slice().reverse().forEach(function(tag){
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
