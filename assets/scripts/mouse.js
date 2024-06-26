/*When a Number button is pressed*/
function TheNumber(key){
    var dot = false;
    if(error || (executed && operator == '')){
        buttonReset();
    }
    if(key == '.'){
        dot = ifDot();
    }
    if(!dot){
        addChar(key);
        justExecuted = false;
        theScreen += key;
        printScreen();
    }
}
/*When an Operator button is pressed*/
function TheOperator(key){
    if(answer != ''){
        if(operator != '' && number != ''){
            buttonExecute();
            addKey(key);
        }
        else if(operator != '' && number == ''){
            justExecuted = false;
            buttonDelete();
            addKey(key);
        }
        else{
            addKey(key);
        } 
    } 
}
/*Prints Result*/
function buttonExecute(){
    var num;
    console.log(answer+' '+operator+' '+number);
    if(number != ''){
        switch(operator){
            case '+':
            num=parseFloat(answer)+parseFloat(number);
            break;
            case '-':
            num=parseFloat(answer)-parseFloat(number);
            break;
            case 'x':
            num=parseFloat(answer)*parseFloat(number);
            break;
            case '/':
                if(parseFloat(number)==0){
                    error = true;
                }
                else{
                    num=parseFloat(answer)/parseFloat(number);
                }
            break;
            default:
                error = true;
        } 
        if(error){
            answer = '';
            theScreen = 'error';
        }
        else{
            answer = num.toString();
            theScreen = answer;
            theScreen = roundPrecision(theScreen, 5);
            number = '';
        }
        operator = '';
        executed = true;
        justExecuted = true;
        printScreen();
    }
}
/*Deletes one character*/
function buttonDelete(){
    if(justExecuted){
        buttonReset();
    }
    else{
        if (answer != '' && operator == '' && number == '' && !executed){
            answer = answer.slice(0, -1);
            theScreen = theScreen.slice(0, -1);  
        }
        else if (answer != '' && operator != '' && number == ''){
            operator = '';
            theScreen = theScreen.slice(0, -1);
        }
        else if (answer != '' && operator != '' && number != ''){
            number = number.slice(0, -1);
            theScreen = theScreen.slice(0, -1);
        }
        printScreen();
    }
}
/*Resets the whole system w/o reloading the page*/
function buttonReset(){
    reset();
    error = false;
    printScreen();
}