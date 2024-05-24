/*When a Number button is pressed*/
function TheNumber(key){
    if(error || (executed && operator == '')){
        buttonReset();
    }
    addChar(key);
    justExecuted = false;
    screen += key;
    printScreen();
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
            screen = 'error';
        }
        else{
            answer = num.toString();
            screen = answer;
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
            screen = screen.slice(0, -1);  
        }
        else if (answer != '' && operator != '' && number == ''){
            operator = '';
            screen = screen.slice(0, -1);
        }
        else if (answer != '' && operator != '' && number != ''){
            number = number.slice(0, -1);
            screen = screen.slice(0, -1);
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