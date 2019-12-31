let arr = [];
function makeNumber(str){
    str.split('');


    for(let i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            arr.push(str[i]);    
    }
}
    arr.join('');
    return arr;
}

makeNumber('fhewkufhwuiehry349yr478yt4iyh54uh');