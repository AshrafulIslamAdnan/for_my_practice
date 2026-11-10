


let string = '';
let buttons = document.querySelectorAll(".buttons");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(event)=>{
        if(event.target.innerHTML == 'calculate'){

            string = eval(string);
             
        document.querySelector('.intputt').value = string;
        }
        else{
             string+=event.target.innerHTML;
        document.querySelector('.intputt').value = string;
        }
       
    })
})
