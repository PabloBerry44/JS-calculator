const button = document.querySelectorAll('.btn')
const display = document.querySelector('.display')

num1 = ''
num2= ''
num1saved = false
num2saved = false
NaNappeared = false

function getNumbers()
{
    button.forEach(button => {
            button.addEventListener('click', ()=>{
                if(num1saved && num2saved){
                    console.log(num1, num2, 'done!')
                }
                else{
                    displayContent = display.textContent
                    if(!isNaN(button.textContent)){
                        if(!num1saved){
                            num1 = num1+button.textContent
                        }
                        if(num1saved && !num2saved){
                            num2 = num2+button.textContent
                        }
                    }
                    if(isNaN(button.textContent)){
                        if(!num1saved){
                            num1saved=true
                            num1=parseFloat(num1)
                        }
                        if(num1saved && !num2saved){
                            if(isNaN(button.textContent) && !NaNappeared){
    
                            }
                            else if(isNaN(button.textContent)){
                                num2saved=true
                                num2=parseFloat(num2)
                            }
                        }
                        NaNappeared = true
                    }
                }
                display.innerHTML = displayContent+button.textContent
                console.log('num1=',num1+' ' + 'num2=',num2)
            })
    });
}


getNumbers()













// function getNumbers()
// {
//     button.forEach(button => {
//         button.addEventListener('click', ()=>{
//             displayContent = display.textContent
        
//             if(!isNaN(button.textContent) && num1saved==false){
//                 num1=num1+button.textContent
//             }
//             else if(isNaN(button.textContent)){
//                 num1 = parseFloat(num1)
//                 num1saved = true
//             }
//             if(!isNaN(button.textContent) && num2saved==false && num1saved==true){
//                 num2=num2+button.textContent
//             }
//             else if(isNaN(button.textContent)){
//                 num2 = parseFloat(num2)
//                 num2saved = true
//             }
//             display.innerHTML = displayContent+button.textContent
//             console.log('num1=',num1+' ' + 'num2=',num2)
//         })
//     });
// }

