function display(param){
    // got to the input/output box and add the parameter to it
    // without clearing the existing value in it by using += vs just =
    document.getElementById('output').value += param;
} 

function clearScreen() {
    // go to the input/output box set it to empty thus clearing it
    document.getElementById('output').value = '';
}

function solve (){
    // grab the expression/value in the input box and assign it variable x
    var x = document.getElementById('output').value;

    // solve the expression and assign it variable Y
    var y = eval(x); //eval() function should be avoided for security reasons in production

    // display Y in the input box
    document.getElementById('output').value = y;

}

//go to clear button, add a click event listener, to call the clearScreen function
document.getElementById('btnClear').addEventListener('click', clearScreen);

//go to solve button, add a click event listener, to call the solve function
document.getElementById('btnSolve').addEventListener('click', solve);

//go to btn1, add a click event listener, to call btnOne function
document.getElementById('btn1').addEventListener('click',
    function btnOne() {
        display('1');
    });

//go to btn2, add a click event listener, to call the display function with parameter '2'
document.getElementById('btn2').addEventListener('click',
    function () {
        display('2');
    });

//go to btn3, add a click event listener, to call the display function with parameter '3'
document.getElementById('btn3').addEventListener('click',
    () => {
        display('3');
    });

//go to btn4, add a click event listener, to call the display function with parameter '4'
document.getElementById('btn4').addEventListener('click',
    () => {
        display('4');
    });

//go to btn5, add a click event listener, to call the display function with parameter '5'
var btn5 = document.getElementById('btn5');btn5.addEventListener('click',
    () => {
        display('5');
    });

//go to btn6, add a click event listener, to call the display function with parameter '6'
var btn6 = document.getElementById('btn6');btn6.addEventListener('click',
    () => {
        display('6');
    });

//go to btn7, add a click event listener, to call the display function with parameter '7'
var btn7 = document.getElementById('btn7');btn7.addEventListener('click',
    () => {
        display('7');
    });

//go to btn8, add a click event listener, to call the display function with parameter '8'
var btn8 = document.getElementById('btn8');btn8.addEventListener('click',
    () => {
        display('8');
    });

//go to btn9, add a click event listener, to call the display function with parameter '9'
var btn9 = document.getElementById('btn9');btn9.addEventListener('click',
    () => {
        display('9');
    });

//go to btn0, add a click event listener, to call the display function with parameter '0'
var btn0 = document.getElementById('btn0');btn0.addEventListener('click',
    () => {
        display('0');
    });

//go to btnDot, add a click event listener, to call the display function with parameter '.'
var btnDot = document.getElementById('btnDot');btnDot.addEventListener('click',
    () => {
        display('.');
    });

//go to btnPlus, add a click event listener, to call the display function with parameter '+'
var btnPlus = document.getElementById('btnPlus');btnPlus.addEventListener('click',
    () => {
        display('+');
    });

//go to btnMinus, add a click event listener, to call the display function with parameter '-'
var btnMinus = document.getElementById('btnMinus');btnMinus.addEventListener('click',
    () => {
        display('-');
    });

//go to btnMultiply, add a click event listener, to call the display function with parameter '*'
var btnMultiply = document.getElementById('btnMultiply');btnMultiply.addEventListener('click',
    () => {
        display('*');
    });

//go to btnDivide, add a click event listener, to call the display function with parameter '/'
var btnDivide = document.getElementById('btnDivide');btnDivide.addEventListener('click',
    () => {
        display('/');
    });
    
// element.addEventListener(event, function);
// element.addEventListener('click', function);
// element.addEventListener('click', display(param)0;
// element.addEventListener('click', display('1'));
// element.addEventListener('click', solve ());