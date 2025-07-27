//varibles

let dateOfBirth=document.querySelector('input')
let calculateButton=document.querySelector('button')
let result=document.querySelector('h4')



//logics

function calculateAge(){
    dateList=dateOfBirth.value.split("-")
    dateYear=Number(dateList[0])
    console.log(result.innerHTML=`Your Age is : ${ 2025-dateYear} years old`)
}



//AddEventListener

calculateButton.addEventListener("click",calculateAge)
