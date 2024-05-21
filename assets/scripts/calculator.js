var screen = '';
var operator = '';
var answer = '';
var number = '';
var error = false;
var executed = false;

function addChar(char){
    if (operator == ''){
        answer += char;
    }
    else{
        number += char;
    }
}

function addKey(key){
    screen += key;
    operator = key;
    printScreen();
}

function printScreen(){
    document.getElementById('screen').innerHTML = screen;
}

function reset(){
    screen = '';
    operator = '';
    answer = '';
    number = '';
    executed = false;
}