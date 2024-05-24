document.addEventListener("keypress", getKey);
document.addEventListener("keyup", delkey);

function delkey(e){// Backspace
    var key = ` ${e.keyCode}`; 
    //console.log(key);
    if(key == 8){
        activeKey('buttonDelete','1');
        buttonDelete()
    }
}

function getKey(e) {
    var key = ` ${e.keyCode}`;
    var char = '';
    console.log(key);
    if (key >= 48 && key <= 57){// 0-9
        char = key-48;
        activeKey('button'+char,'3');
        TheNumber(char);
    }
    else if(key == 46){// .
        activeKey('buttonDot','3');
        TheNumber('.');
    }
    else if (key == 13 || key == 61){// Intro or Equal
        activeKey('buttonExecute','2');
        buttonExecute();
    }
    else if (key == 42 || key == 120){// *
        activeKey('buttonMultiplied','3');
        TheOperator('x');
    }
    else if(key == 43){// +
        activeKey('buttonPlus','3');
        TheOperator('+');
    }
    else if(key == 45){// -
        activeKey('buttonMinus','3');
        TheOperator('-');
    }
    else if(key == 47){// /
        activeKey('buttonDivided','3');
        TheOperator('/');
    }
    else if(key == 114){// Reset
        activeKey('buttonReset','1');
        buttonReset();
    }
}

function activeKey(ID,color){
    var key = document.getElementById(ID);
    key.style.backgroundColor = 'var(--activeColor'+color+')';
    setTimeout(()=>{
        key.style.backgroundColor = 'var(--keyB'+color+')';
    }, '200');
}