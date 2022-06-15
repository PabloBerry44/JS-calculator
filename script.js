const btn = document.querySelectorAll('.btn')
const display = document.querySelector('.display')

let numberOne = ''
let numberTwo = ''
let operator = ''

let numberOneCreated = false
let operatorCreated = false

let cleared = false

function getNumbers(){
    
    btn.forEach(btn => {

        btn.addEventListener('click', ()=>{
            
            //check if clicked button is a number
            if(btn.classList.contains('number')){

                if(numberOneCreated && !cleared){
                    display.innerHTML = ''
                    cleared = true
                }

                display.innerHTML = display.textContent + btn.textContent

                //if first number is not created
                if(!numberOneCreated){
                    numberOne = numberOne + btn.textContent
                }
                //else if first number is created but second is not
                else if(numberOneCreated){
                    numberTwo = numberTwo + btn.textContent
                }

            }
            //check if clicked button is an operator
            if(btn.classList.contains('operator')){

                if(!numberOneCreated || !operatorCreated){
                    numberOneCreated = true
                    operator = btn.textContent
                    operatorCreated = true
                }
                else if(numberOneCreated && operatorCreated){

                    numberOne = equation(parseFloat(numberOne), parseFloat(numberTwo), operator)
                    numberTwo = ''
                    
                    display.innerHTML = numberOne

                    operatorCreated = false
                    operator = ''
                }
                //if none of the numbers is created do nothing
            }
        })
    });
}

function equation(numOne, numTwo, oper){

    if(oper == '+'){
        numOne = numOne + numTwo
    }
    if(oper == '-'){
        numOne = numOne - numTwo
    }
    if(oper == 'X'){
        numOne = numOne * numTwo
    }
    if(oper == '÷'){
        numOne = numOne / numTwo
    }
    return(numOne.toString())

}

getNumbers()