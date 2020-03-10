// import {comparison} from './comparison.js' 

let compScore = 0;
    let playerScore = 0;
    let attempt = 1;
    let elem = document.createElement('div');
    let picField = document.createElement('div');
    picField.classList = 'pictureDiv';
    let picUser = document.createElement('img');
    picUser.classList = 'picture';
    let picComputer = document.createElement('img');
    picComputer.classList = 'picture';
    const opt = document.querySelectorAll('button');
    const options = document.querySelector('.options');
    const compOptions = ['Rock', 'Paper', 'Scissors'];
    const reset = document.querySelector('.linkReset');
    reset.addEventListener('click', restart);
    opt.forEach(option => {
        option.addEventListener('click', () => {
            const compNum = Math.floor(Math.random() * 3);
            const compChoice = compOptions[compNum];
            const playerChoice = option.innerHTML;
            comparison(playerChoice, compChoice);
        })
    })

    const winner = (playerScore, compScore) => {
        if(playerScore>compScore){
            elem.innerHTML = `The player has won`;
            options.parentNode.insertBefore(elem, options.nextSibling);     
        }else if(compScore>playerScore){
            elem.innerHTML = `The computer has won. Maybe next time`;
            options.parentNode.insertBefore(elem, options.nextSibling);  
        }
    }
    
     
    function restart(){
        elem.innerHTML = '';
        playerScore, compScore, attempt = 0;
    }


// export { game };