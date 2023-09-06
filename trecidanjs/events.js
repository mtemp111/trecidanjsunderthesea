let button1 = document.getElementById("button1");
function buttonClick(){
    alert("yo");}

function colorChanger(event){
    // document.getElementById("main-header").style.display = "none";
    document.getElementById("header-title").inner = "Naslov";
}

// button1.addEventListener("click",buttonClick);
button1.addEventListener("click",colorChanger);
button1.removeEventListener("click", colorChanger);
console.log(event);
console.log(event.target);
let select1 = document.getElementsByTagName("select")[0];
let items = document.querySelectorAll("li");

select1.addEventListener("change",function(event)){

console.log(event.target.value);
}
document.querySelector("input[type=submit").addEventListener("click",addItem);
function addItem9(event){
    event.preventDefault();
    let inputText= document.getElementById("itemName").value;
    document.getElementById("Items").innerHTML += "<li class = 'ilist-group-item'>"
}
document.querySelector("input"[])