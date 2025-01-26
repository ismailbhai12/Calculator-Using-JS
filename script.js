// linking the inputbox and the buttons using js
let input = document.getElementById('result');
let all_buttons = document.querySelectorAll('button');

// linking the mode change button & body to change its color
let mode_change = document.querySelector('.mode-change')
let body = document.querySelector('body');

let string = "";  // this is used to store all the values that are assigned by the user for operation
 
let arr = Array.from(all_buttons);   // storing all the buttons in the array (arr)
arr.forEach(button => {
    button.addEventListener("click", (e) => {

        const value = e.target.innerHTML;   // getting the content of the html code for the button which is clicked (9 , - , * , +  ....)

        if(button.classList.contains('mode-change')){   // if the class name of the button contains 'mode-change' then ignore it and not append it in the string
            return;
        }

        if (value === '=') {
            string = eval(string);  // this is an inbuild function that mainly used for evalate the values inside it
            input.value = string;
        } 
        else if (value === 'C') {
            string = ""; // Clear the input box after clicking 'C'
            input.value = string;
        } 
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1); // Remove the last value of the string
            input.value = string; // showing it in the result box
        }
        else {
            string += value;  // simply add it in the string
            input.value = string;  // showing in the result box
        }
    });
});

// all code to change the mode 
let curr_mode = "light";
mode_change.addEventListener("click" , () =>{
    if(curr_mode === "light"){
        curr_mode = "dark";
        body.style.background = 'linear-gradient(to right , #dbd8e3 , #5c5470)';  
        mode_change.textContent = 'DARK'; // change the inside content of the button 
    }
    else{
        curr_mode = "light";
        body.style.background = 'linear-gradient(to right , #cbf078 , #f8f398)'
        mode_change.textContent = 'LIGHT';   // change the inside content of the button
    }
});