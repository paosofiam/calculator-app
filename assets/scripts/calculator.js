var theScreen = '';
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
    var maxChar = 21;
    if(screen.width < 720){
        maxChar = 16;
    }
    var excess = theScreen.length - maxChar
    if(excess > 0){
        theScreen = theScreen.slice(excess);
    }
    document.getElementById('screen').innerHTML = theScreen;
}

function reset(){
    theScreen = '';
    operator = '';
    answer = '';
    number = '';
    executed = false;
    justExecuted = false;
}

function roundPrecision(string, precision){
    if (!string.includes('e')){//is the number is exponential we skip this step
        if (string.includes('.')){//this function only works with float numbers
            var number = string.split(".");//Split the string to work with it
            if(number[1].length > precision){//If the number has more decimals than the precision we'll only keep as many decimals as the precision.
                number[1] = number[1].slice(0,precision+1);
                number[2] = number[1].slice(precision);
                number[1] = number[1].slice(0,precision);
                if(number[2] >= 5){//Decides to seal or floor round the number
                    number[1] = parseInt(number[1])+1;//If condition is true we seal round the number
                    number[1] = number[1].toString();
                }
            }
            for(var i = 5; i > 0; i--){//Delete al zeros at the end of the number
                if(number[1].slice(i-1) == '0'){
                    number[1] = number[1].slice(0,i-1);
                }
                else{
                    break
                }
            }
            string = number[0]
            if(number[1] != ''){
                string = string+'.'+number[1];
            }
        }
    }
    return string;
}