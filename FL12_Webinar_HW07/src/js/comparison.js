 const comparison = (playerChoice, compChoice) => {
    if(attempt<4){
        if(playerChoice === compChoice){
            elem.innerHTML = `Round ${attempt},  It is a tie!`;
            console.log(elem.innerHTML);
            options.parentNode.insertBefore(elem, options.nextSibling);
            elem.parentNode.insertBefore(picField, elem.nextSibling);
            picField.appendChild(picUser);
            picUser.src =`img/${playerChoice}.png`;
            picField.appendChild(picComputer);
            picComputer.src =`img/${compChoice}.png`;
            console.log(attempt);
            }
            else if(playerChoice === 'Paper'){
                if(compChoice === 'Rock'){
                    elem.innerHTML = `Round ${attempt},  ${playerChoice} vs. ${compChoice}, You’ve WON!`;
                    options.parentNode.insertBefore(elem, options.nextSibling);
                    elem.parentNode.insertBefore(picField, elem.nextSibling);
                    picField.appendChild(picUser);
                    picUser.src =`img/${playerChoice}.png`;
                    picField.appendChild(picComputer);
                    picComputer.src =`img/${compChoice}.png`;
                 }else{
                    elem.innerHTML = `Round ${attempt},  ${playerChoice} vs. ${compChoice}, You’ve LOST!`;
    options.parentNode.insertBefore(elem, options.nextSibling);  
    elem.parentNode.insertBefore(picField, elem.nextSibling);
            picField.appendChild(picUser);
            picUser.src =`img/${playerChoice}.png`;
            picField.appendChild(picComputer);
            picComputer.src =`img/${compChoice}.png`;              
                }
            }
            if(playerChoice === 'Scissors'){
                if(compChoice === 'Paper'){
                    elem.innerHTML = `Round ${attempt},  ${playerChoice} vs. ${compChoice}, You’ve WON!`;
    options.parentNode.insertBefore(elem, options.nextSibling);  
    elem.parentNode.insertBefore(picField, elem.nextSibling);
            picField.appendChild(picUser);
            picUser.src =`img/${playerChoice}.png`;
            picField.appendChild(picComputer);
            picComputer.src =`img/${compChoice}.png`;             
     playerScore++; 
                 }else{
                    elem.innerHTML = `Round ${attempt},  ${playerChoice} vs. ${compChoice}, You’ve LOST!`;
    options.parentNode.insertBefore(elem, options.nextSibling);   
    elem.parentNode.insertBefore(picField, elem.nextSibling);
            picField.appendChild(picUser);
            picUser.src =`img/${playerChoice}.png`;
            picField.appendChild(picComputer);
            picComputer.src =`img/${compChoice}.png`;             
     compScore++;  
                }
            }
            if(playerChoice === 'Rock'){
                if(compChoice === 'Scissors'){
                   elem.innerHTML = `Round ${attempt},  ${playerChoice} vs. ${compChoice}, You’ve WON!`;
    options.parentNode.insertBefore(elem, options.nextSibling);     
    elem.parentNode.insertBefore(picField, elem.nextSibling);
            picField.appendChild(picUser);
            picUser.src =`img/${playerChoice}.png`;
            picField.appendChild(picComputer);
            picComputer.src =`img/${compChoice}.png`;          
      playerScore++;
                 }else{
                   elem.innerHTML = `Round ${attempt},  ${playerChoice} vs. ${compChoice}, You’ve LOST!`;
    options.parentNode.insertBefore(elem, options.nextSibling);  
    elem.parentNode.insertBefore(picField, elem.nextSibling);
            picField.appendChild(picUser);
            picUser.src =`img/${playerChoice}.png`;
            picField.appendChild(picComputer);
            picComputer.src =`img/${compChoice}.png`;             
      compScore++;
      }
     }
        attempt++;
    }else
        winner(playerScore, compScore);
    }

    // export {comparison};