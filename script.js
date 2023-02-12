var pTag = document.querySelector("#percentage")
var button = document.querySelector(".calculate")

var person1Name = document.querySelector("#person1");
var person2Name = document.querySelector("#person2");

var percentage = 100;
button.onclick = () =>{
    if(person1Name.value.length >0 && person2Name.value.length>0){
        pTag.innerText = "";
        count = 1;
        percentage = (Math.random()*100)+1;
        setInterval(()=>{
            if(count<=percentage){
                pTag.innerText = `${count++}%`;
            }
        },100)
    }
    else{
        pTag.innerText = "Please provide names"
    }
}


