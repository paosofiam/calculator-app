document.addEventListener("keypress", getKey);
document.addEventListener("keyup", delkey);

function delkey(e){// Backspace
    var key = ` ${e.keyCode}`; 
    /* console.log('del1'+key); */
    if(key == 8){
        /* console.log('del2'); */
        buttonDelete()
    }
}

function getKey(e) {
    var key = ` ${e.keyCode}`;
    var char = '';
    console.log(key);
    if (key >= 48 && key <= 57){// 0-9
        char = key-48;
        TheNumber(char);
    }
    else if (key == 13 || key == 61){// Intro or Equal
        buttonExecute();
    }
    else if (key == 42 || key == 120){// *
        TheOperator('*');
    }
    else if(key == 43){// +
        TheOperator('+');
    }
    else if(key == 45){// -
        TheOperator('-');
    }
    else if(key == 47){// /
        TheOperator('/');
    }
}