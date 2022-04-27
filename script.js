const range = document.querySelector("input[type='range']");
const span = document.querySelector(".value");
const checkBoxes = document.querySelectorAll("input[type='checkbox']");
const generate = document.querySelector("button");
const screen = document.querySelector("input[type='text']");
const alphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const char = "!@#&*_-";
const space = " ";
const password = [];
const validation = true;
let popover = document.querySelector(".popup");

range.oninput = (()=>{
    span.textContent = range.value;
});

for(check of checkBoxes){
    check.addEventListener("click",e=>{
        if(e.target.checked){
            switch (e.target.id) {
                case "txt":
                    password[0]=alphabets
                    console.log(password);
                    break;
                case "num":
                    password[1]=numbers
                    console.log(password);
                    break;
                case "char":
                    password[2]=char;
                    console.log(password);
                    break;
                case "spaces":
                    password[3]=space;
                    console.log(password);
                    break;
                default:
                    break;
            }
        }
        else{
            let removed;
            switch (e.target.id) {
                case "txt":
                    removed = password.splice(0,1);
                    console.log(removed);
                    break;
                case "num":
                    removed = password.splice(1,1);
                    console.log(removed);
                    break;
                case "char":
                    removed = password.splice(2,1);
                    console.log(removed);
                    break;
                case "spaces":
                    removed = password.splice(3,1);
                    console.log(removed);
                    break;
                default:
                    break;
            }
        }
    })
}

screen.addEventListener("mouseenter",e=>{       
    popover.style.backgroundColor = "grey";
    popover.textContent = "Click to Copy"
})
screen.addEventListener("mouseleave",e=>{
    popover.textContent = "";
})
screen.addEventListener("click",()=>{ 
    navigator.clipboard.writeText(screen.value);
    popover.textContent = "Text Copied !!";
})

generate.addEventListener("click",(e)=>{
    screen.value = "";
    const checkBoxArray = Array.from(checkBoxes);
    let validation = checkBoxArray.every((element)=>{
        return element.checked===false;
    })
    if(!validation){
        let passwordString = "";
        let constructedPassword ="";
        for(element of password){
            passwordString += element;
        }
        let passwordLength = range.value;
        
        for(var i =0 ;i<passwordLength;i++){
            constructedPassword+= passwordString[Math.floor(Math.random()*passwordString.length)]
        }
        screen.value = constructedPassword;
    }
    else{
        setTimeout(() => {
            alert("at least choose one parameter")
        }, 100);
    }
    
});

