let calcApp = document.querySelector('body');
const colorTheme = localStorage.getItem('colorTheme');

savedTheme();

function savedTheme(){
    if(colorTheme){
        changeTheme(colorTheme);
        console.log('Welcome Back, your last color theme is: ',colorTheme);
    }
    else{
        console.log("Welcome, I'll remember if you change the color theme and I'll show it to you the next time you come.");
    }
}

function selectTheme(){
    var selectedTheme = document.querySelector('input[name="themeSwitch"]:checked').value;
    console.log("The color theme selected is : ",selectedTheme);
    changeTheme(selectedTheme);
}

function changeTheme(val){
    var string = '';
    if(val == '2' || val == '3'){
        string = 'theme-'+val;
    }
    calcApp.className = string;
    localStorage.setItem('colorTheme',val);
    checkRadio(val);
}

function checkRadio(val){
    document.getElementById('themeSelect'+val).checked=true;
}
