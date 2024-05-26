var screen = '';
var operator = '';
var answer = '';
var number = '';
var error = false;
var executed = false;
var justExecuted = false;

function addChar(char){
    if (operator == ''){
        answer += char;
    }
    else{
        number += char;
    }
}

function ifDot(){
    var Dot = false;
    if(operator == ''){
        Dot = answer.includes('.');
    }
    else{
        Dot = number.includes('.');
    }
    return Dot;
}

function addKey(key){
    screen += key;
    operator = key;
    printScreen();
}

function printScreen(){
    if(screen.length > 22){
        screen = screen.slice(1);
    }
    document.getElementById('screen').innerHTML = screen;
}

function reset(){
    screen = '';
    operator = '';
    answer = '';
    number = '';
    executed = false;
    justExecuted = false;
}