function valuebtn(e){
    calculator.display.value += e.value ;
}

function calculate(){
     calculator.display.value = eval(calculator.display.value) ;
}

function Clear(){
    calculator.display.value = null;
}