// Example
var myName = prompt("Enter your name");
var yourDay = prompt("how was your day");
switch(yourDay){
    case "Good":
        //console.log("I'm happy for you " +myName);
        window.alert("I'm happy for you " +myName);
        break;
    case "Bad":
       // console.log("It is too bad,tomorow will be fine");
       window.alert("It is too bad,tomorow will be fine");
       break;
    default:
        window.alert("I can't say anything sorry!");     
        break;   
}
