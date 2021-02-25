// Example
var str = prompt("Enter your first String");
var leng1 = str.length;
//window.alert(leng1);
//comparing two strings
var str2 = prompt("Enter your second string");
var leng2 = str2.length;

if(leng1 > leng2){
    window.alert(str +" phrase was the longest with "+ leng1 +" number "+ " of characters" )
}else{
    window.alert(str2 +" phrase was the longest with "+ leng2 +" number "+ " of characters")
}
