
//Inputs
var num1txt =document.getElementById('number1')
var num2txt =document.getElementById('number2')
var resdiv = document.getElementById('resdiv')
var sum = 0

//Functions
var Add = ()=>{
    var num1 = num1txt.value 
    var num2 = num2txt.value 
    if(num1!="" && num2!=""){
        sum  = parseFloat(num1) + parseFloat(num2)
    }
    resdiv.innerText = sum
    resdiv.style.display  = "block"
}

var Subtract = ()=>{
    var num1 = num1txt.value 
    var num2 = num2txt.value 
    if(num1!="" && num2!=""){
        sum  = parseFloat(num1) - parseFloat(num2)
    }
    resdiv.innerText   = sum
    resdiv.style.display  = "block"
}

var Clear = ()=>{
    num1txt.value = ""
    num2txt.value = ""
    resdiv.style.display  = "none"
    sum = 0
}