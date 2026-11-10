document.querySelector('.calc').addEventListener("click",() =>{
   fahrenheit();
});
document.querySelector('.fahrenheit').addEventListener("keydown",(event) =>{
   if (event.key=== "Enter") {
     fahrenheit();
   };
});




document.querySelector('.calc2').addEventListener("click",() =>{
   celsius();
});
document.querySelector('.celsius').addEventListener("keydown",(event) =>{
   if (event.key=== "Enter") {
      celsius();
   };
});



function fahrenheit(){
    const a = document.querySelector('.fahrenheit').value;
    document.querySelector(".valuee").innerText = (Number(a)*9/5)+32;
}

function celsius(){
    const b = document.querySelector('.celcius').value;
    document.querySelector(".valuee2").innerText = ((Number(b)-32)*5/9);
}