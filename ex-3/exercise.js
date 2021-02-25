// Example
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
if(num1 > num2){
    window.alert("The greater number of " +num1+", "+num2+" is "+num1);
}else if(num2 > num1){
    window.alert("The greater number of " +num1+", "+num2+" is "+num2);
}else{
    window.alert("The number are same");
}
