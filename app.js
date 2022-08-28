



let btn = document.querySelectorAll('.calculator-frame button')
let input = document.querySelector('.calculator-frame input')
let del = document.querySelector('.calculator-frame .del')
let equal = document.querySelector('.calculator-frame .equal')
let nav = document.querySelector('.nav-links')
let toggler = document.querySelector('.fa-solid')


for (let button of btn) {
    button.addEventListener('click', function(e) {
        switch(e.target.textContent) {
            case 'C':
                input.value = '';
                break;

            case 'Stop':
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

toggler.addEventListener('click', function() {
    nav.classList.toggle('show')
    toggler.classList.toggle('fa-xmark')
})

