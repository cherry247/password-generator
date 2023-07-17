var password = document.getElementById("password");
function wordGenPass(){
    const words = new Array("shaili","shrey","aastha","sagar","jainam","savan","ayush","deep");
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
    document.getElementById("password").value =password;
}
function randomWord(words){
    const randomWord = words[Math.floor(Math.random()*words.length)];
    return randomWord;
}
function genPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz@#$ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password="";
    var passwordLength=15;
    for(var i=0;i<=passwordLength;i++){
        var randomNumber = Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);   
    }
    document.getElementById("password").value =password;
}
function copyPassword(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand('copy');
}