const button = document.querySelectorAll('.btn')
const display = document.querySelector('.display')

num1 = ''
num2= ''
num1saved = false
num2saved = false
let result = 0
let operators = ['+', '-', '×', '÷']
let operator = ''

function equation(num1, num2, operator){
    if(operator=='+'){
        result=num1+num2
    }
    if(operator=='-'){
        result=num1-num2
    }
    if(operator=='×'){
        result=num1*num2
    }
    if(operator=='÷'){
        result=num1/num2
    }
    display.innerHTML = result.toString()
    num1 = result
    num2 = ''
    operator=''
    num2saved = false
    getNumbers(num1, num2, num2saved, operator)
}

function getNumbers(num1, num2, num2saved, operator)
{
    button.forEach(button => {
        button.addEventListener('click', ()=>{
            display.innerHTML = display.textContent+button.textContent
            if(button.textContent=='AC'){
                num1 = ''
                num2= ''
                num1saved = false
                num2saved = false
                display.innerHTML = ''
                getNumbers('','',false,'')
            }
            // save to both numbers
            if(!isNaN(button.textContent)){ //if character IS number
                if(!num1saved){ //if 1st number IS NOT saved:: add characters to it
                    num1 = num1+button.textContent
                }
                if(num1saved && !num2saved){ //if 1st number IS saved but 2nd IS NOT :: add characters to 2nd number
                    num2 = num2+button.textContent
                }
            }



            if(operators.includes(button.textContent) || button.textContent=='='){ //if button is an operator :: save it as operator variable
                
                if(operators.includes(button.textContent)){
                    operator = button.textContent  
                }

                if(!num1saved){ //if 1st number isn't saved :: save the 1st number
                    num1saved=true
                    num1=parseFloat(num1)
                }

                if(num1saved){ //if 1st number IS saved :: save the 2nd number
                    if(button.textContent=='='){
                        num2saved=true
                        num2=parseFloat(num2)
                        equation(num1, num2, operator) //pass parameters to the equation function
                    }
                }
            }
        })
    });
}
getNumbers(num1, num2, num2saved, operator)