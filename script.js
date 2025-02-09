let display= document.querySelector('.display'); //Accessing the input display by class name

let buttons = document.querySelectorAll('button'); // Accessing all buttons in form of objects
let arr = Array.from(buttons); // extracting buttons array from buttons object

let string=""; //string will remain empty in starting

arr.forEach(btn => {
    btn.addEventListener('click',(e)=>{            // adding eventlistener to all the buttons
        let value = e.target.innerHTML; 
        if(value=='='){
            string= eval(string);    // eval() autaomaticly evaluate the expression
        }
        else if(value=='AC'){
            string="";
        }
        else if(value == 'DEL'){
            string = string.substring(0,string.length-1);
        }
        else {
            string+=value;
        }
        display.value=string;          // This line will update the display with every click
    })
})