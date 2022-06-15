function getNumbers(){
    
    btn.forEach(btn => {

        btn.addEventListener('click', ()=>{

            if(btn.textContent == '±'){
                if(!numberOneCreated || numberTwo.length==0){
                    numberOne = numberOne * (-1)
                    display.innerHTML = numberOne
                    console.log('1')
                }
                else if(numberOneCreated){
                    console.log(numberTwo)
                    numberTwo = numberTwo * (-1)
                    console.log(numberTwo)
                    display.innerHTML = numberTwo
                    // console.log('2')
                }
            }

            //check if clicked button is a number
            if(btn.classList.contains('number')){

                display.innerHTML = display.textContent + btn.textContent

                //if first number is not created
                if(!numberOneCreated){
                    numberOne = numberOne + btn.textContent
                    display.innerHTML = numberOne
                }
                //else if first number is created but second is not
                else if(numberOneCreated){
                    numberTwo = numberTwo + btn.textContent
                    display.innerHTML = numberTwo
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

            if(btn.textContent == 'AC'){
                numberOne = ''
                numberTwo = ''
                operator = ''
                numberOneCreated = false
                operatorCreated = false
        
                display.innerHTML = ''
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

const btn = document.querySelectorAll('.btn')
const display = document.querySelector('.display')

let numberOne = ''
let numberTwo = ''
let operator = ''

let numberOneCreated = false
let operatorCreated = false

getNumbers()