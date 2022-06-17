function getNumbers(){
    
    btn.forEach(btn => {

        btn.addEventListener('click', ()=>{

            //button +/-
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
            //button AC
            if(btn.textContent == 'AC'){
                numberOne = ''
                numberTwo = ''
                operator = ''
                numberOneCreated = false
                operatorCreated = false
        
                display.innerHTML = ''
            }
            //check if clicked button is a number
            if(btn.classList.contains('number') || btn.textContent == '.'){
                    //if first number is not created
                    if(!numberOneCreated && numberOne.length<11){
                        display.innerHTML = display.textContent + btn.textContent
                        numberOne = numberOne + btn.textContent
                        display.innerHTML = numberOne
                    }
                    //else if first number is created but second is not
                    else if(numberOneCreated && numberTwo.length<11){
                        display.innerHTML = display.textContent + btn.textContent
                        numberTwo = numberTwo + btn.textContent
                        display.innerHTML = numberTwo
                    }
            }
            //check if clicked button is an operator
            if(btn.classList.contains('operator') && btn.textContent!=operator && display.textContent.length>0){
                if(btn.textContent!='='){
                    operator=btn.textContent
                    operatorCreated=false
                }
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

const btn = document.querySelectorAll('.btn')
const display = document.querySelector('.display')

let numberOne = ''
let numberTwo = ''
let operator = ''

let numberOneCreated = false
let operatorCreated = false

getNumbers()