// const button = document.querySelectorAll('.btn')
// const display = document.querySelector('.display')

// let num1='', num2='', operator='', num1saved=false, num2saved=false
// let operators = ['+', '-', '×', '÷']

// function equation(num1, num2, operator){
//     if(operator=='+'){
//         result=num1+num2
//     }
//     if(operator=='-'){
//         result=num1-num2
//     }
//     if(operator=='×'){
//         result=num1*num2
//     }
//     if(operator=='÷'){
//         result=num1/num2
//     }
//     display.innerHTML = result.toString()
//     getNumbers()
// }

// function getNumbers(i){
//     button.forEach(button => {
//         button.addEventListener('click', ()=>{
//             display.innerHTML = display.textContent+button.textContent
//             // save to both numbers
//             if(!isNaN(button.textContent) || button.textContent=='.'){ //if character IS number
//                 if(!num1saved){ //if 1st number IS NOT saved:: add characters to it
//                     num1 = num1+button.textContent
//                 }
//                 if(num1saved && !num2saved){ //if 1st number IS saved but 2nd IS NOT :: add characters to 2nd number
//                     num2 = num2+button.textContent
//                 }
//             }
//             if(operators.includes(button.textContent) || button.textContent=='='){ //if button is operator:save it as operator variable
        
//                 if(operators.includes(button.textContent)){
//                     operator = button.textContent  
//                 }
//                 if(!num1saved){ //if 1st number isn't saved :: save the 1st number
//                     num1saved=true
//                     num1=parseFloat(num1)
//                 }
//                 if(num1saved){ //if 1st number IS saved :: save the 2nd number
//                     if(button.textContent=='='){
//                         num2saved=true
//                         num2=parseFloat(num2)
//                         equation(num1, num2, operator) //pass parameters to the equation function
//                     }
//                 }
//             }
//         })
//     });
// }
// getNumbers()

const btn = document.querySelectorAll('.btn')
const display = document.querySelector('.display')

let num1='', num2='', operator=''
let num1saved=false
let operators = ['+', '-', 'X', '÷']

btn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        display.innerHTML=display.textContent+btn.textContent
        //if number or dot save to num1 or num2
        if(!isNaN(btn.textContent) || btn.textContent=='.'){ 
            if(num1saved==false){
                num1=num1+btn.textContent
            }
            if(num1saved){
                num2=num2+btn.textContent
            }
        }
        //if operator set num1 or num2 to saved and pass as parameters
        else if(operators.includes(btn.textContent) || btn.textContent=='='){
            if(btn.textContent=='='){
                if(!num1saved){
                    display.innerHTML=num1
                }
                if(num1saved){
                    if(num2==''){
                        display.innerHTML=num1
                    }
                    if(!num2==''){
                        equation(num1, num2, operator)
                    }
                }
            }
            else{
                operator = btn.textContent
                if(!num1saved){
                    num1saved=true
                }
                else if(num1saved){
                    console.log(num1, num2, operator)
                    equation(num1, num2, operator)
                }
            }
        }
    })
});

function equation(num1, num2, operator){
    num1=parseFloat(num1)
    num2=parseFloat(num2)

    if(operator=='+'){
        num1=num1+num2
    }
    else if(operator=='-'){
        num1=num1-num2
    }
    else if(operator=='X'){
        num1=num1*num2
    }
    else if(operator=='÷'){
        num1=num1/num2
    }
    display.innerHTML = num1
}