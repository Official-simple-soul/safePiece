

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let btn = document.querySelectorAll('.calculator-frame button')
let input = document.querySelector('.calculator-frame input')
let del = document.querySelector('.calculator-frame .del')
let equal = document.querySelector('.calculator-frame .equal')
let nav = document.querySelector('.nav-links')
let toggler = document.querySelector('.fa-solid')
let cardOne = document.querySelector('.card-one')
let cardTwo = document.querySelector('.card-two')
let random = document.querySelector('.count-random')
let playerCountOne = document.querySelector('.player-one-count')
let playerCountTwo = document.querySelector('.player-two-count')


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
playerCountOne.innerHTML = ''

random.addEventListener('click', function() {

    let randomNumber = Math.floor(Math.random() * num.length)
    cardOne.innerHTML = randomNumber

        if(cardOne.innerHTML <= 4) {
            cardOne.style.backgroundColor = 'red'
        }

        else if(cardOne.innerHTML <= 7) {
            cardOne.style.backgroundColor = 'purple'
        }

        else {
            cardOne.style.backgroundColor = 'black'
        }

        let firstCount = 0
        firstCount = firstCount + randomNumber;
    playerCountOne.innerText = firstCount;
    playerCountTwo.innerText = firstCount;
})

