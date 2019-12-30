// Your code goes here

let max_try_num = 3;
let num = 0;
let try_num = [];
let prize_arr = [];
prize_arr = [100, 50, 25];
let min = 0;
let max = 8;
let win_new_answer;
let max_magic = 2;
let bigger_range = 4;
let check = false;
let sum = 0;
let total_sum = 0;
let attempts;
let first = 0;
let answer = confirm('Do you want to play a game?');
if( answer === false){
    alert('You did not become a billionaire, but can');
}else{
        while(answer === true){
        attempts = max_try_num;
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(num);
        for(let i=0;i<max_try_num;i++){
            try_num.push(prompt('Choose a roulette pocket number from ' + min + ' to ' + max + '\n' +
                             ' Attemps left: ' + attempts + '\n' +
                             ' Total prize: ' + total_sum + '$' + '\n' +
                             ' Possible prize on current attempt: ' + prize_arr[i] + '$\n'));           
            attempts--;          
            if( isNaN(try_num[i]) === true || try_num[i] === ''){
                alert('Please try again inserting valid numbers');               
            }
            if(num === parseInt(try_num[i])){
                sum = prize_arr[i];
                break;
    }
        console.log(try_num);


}
if(sum === 0) {
        alert('Thank you for your participation. Your prize is: 0$');
        answer = confirm('Would you like to play again?');
        if(answer === false){
            alert('You did not become a billionaire, but can');
            break;
        }
    }
if(sum>0){
    win_new_answer = confirm('Congratulation, you won! Your prize is: '+ sum + 
    '$.Would you like to continue?');
           while(win_new_answer === true){
            max = max + bigger_range;
            num = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(num);
            try_num.length = 0;
            attempts = max_try_num;
            total_sum = sum;
            for(let i=0;i<max_try_num;i++){
                prize_arr[i] = prize_arr[i] * max_magic;
                 try_num.push( prompt('Choose a roulette pocket number from ' + min + ' to ' + max + '\n' +
                                     ' Attemps left: ' + attempts + '\n' +
                                     ' Total prize: ' + total_sum + '$' + '\n' +
                                     ' Possible prize on current attempt: ' + prize_arr[i] + '$\n'));
                                     attempts--;
            
            console.log(try_num);
            if( isNaN(try_num[i]) === true || try_num[i] === ''){
                alert('Please try again inserting valid numbers');
                         }
                if(num === parseInt(try_num[i])){
                sum = sum + prize_arr[i];
                win_new_answer = confirm('Congratulation, you won! Your prize is: '+ sum + 
                '$.Would you like to continue?');
                break;
             }else{
                 win_new_answer = false;
             }
         }  
     }       
}
    if(win_new_answer === false){
        alert('Thank you for your participation. Your prize is: ' +
        sum + '$');
        answer = confirm('Would you like to play again?');
        if(answer === false){
            alert('You did not become a billionaire, but can');
            break;
            }
        }
    }  
}
