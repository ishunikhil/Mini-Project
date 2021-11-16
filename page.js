var input=document.getElementById("Userinput");
var button=document.getElementById("press");
var ul =document.querySelector("ul");
console.log(input);
console.log(button);
console.log(ul);

button.addEventListener("click",function(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild("li");
});