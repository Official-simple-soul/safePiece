



let btn = document.querySelectorAll('.calculator-frame button')
let input = document.querySelector('.calculator-frame input')
let clear = document.querySelectorAll('.calculator-frame .clear')
let del = document.querySelector('.calculator-frame .del')
let equal = document.querySelector('.calculator-frame .equal')


for (let button of btn) {
    button.addEventListener('click', function(e) {
        switch(e.target.textContent) {
            case 'C':
                input.value = '';
                break;

            case 'del':
                if(input.value){
                input.value = input.value.slice(0, -1);
                }
                break;
            
            case '=':
                try {
                input.value = eval(input.value);
                } catch {
                    input.value = 'error'
                }
                break;

            default:
                input.value += e.target.textContent;
        }
    })    
}

