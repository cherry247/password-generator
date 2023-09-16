
const tagContainer = document.querySelector('.tag-container');

const input = document.querySelector('.tag-container input');

const tagLimitMessage = document.querySelector('p');

const tagLimit = 5;

const tagLimitDisplay = document.getElementById('tag-limit-reached');


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
        input.disabled = false;
        tagLimitMessage.style.display = "none";
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

input.addEventListener('keypress',function(e){
    if(e.key === 'Enter' || e.key === " "){
        if(input.value.trim() !== "") {
            console.log("input value"+input.value.trim()+"....");
            tags.push(input.value.trim());
            addTags();
            input.value='';
        }
    }

    if(tags.length === tagLimit) {
        input.disabled = true;
        tagLimitMessage.style.display = "block";
        tagLimitDisplay.textContent = 'More than ' + tagLimit +  ' tags not allowed!';
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