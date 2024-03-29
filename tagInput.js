
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
    if(e.key === 'Enter' || e.key === " "){
        tags.push(input.value);
        addTags();
        input.value='';  

    }
}) 
var password = document.getElementById("password");

function wordGenPass(){
    const words = tags;
    var numbers = "0214365879";
    var symbols = "@#$";
    var passwordLength = 15;
    var password = "";
    for(var i=0;i<passwordLength;i++){
        let randomWord1 = randomWord(words).toUpperCase();
        let numberIdx = Math.floor(Math.random()*numbers.length);
        let number = numbers.substring(numberIdx,numberIdx+1);
        let randomWord2 = randomWord(words);
        let symbolIdx = Math.floor(Math.random()*symbols.length);
        let symbol =symbols.substring(symbolIdx,symbolIdx+1);
        password = randomWord1.concat(number,randomWord2,symbol);
    }
    password = password.replace(/\s/g, "");
    document.getElementById("password").value = password;
}
function randomWord(words){
    const randomWord = words[Math.floor(Math.random()*words.length)];
    return randomWord;
}

function copyPassword(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand('copy');
}