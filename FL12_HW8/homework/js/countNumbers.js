let arr = [];
function makeNumber(str){
    str.split('');


    for(let i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            arr.push(str[i]);
            
    }
}
return arr;
}

function countNumbers(str){
    let res = {};
   let num = makeNumber(str);
    for(let i of num){
        if(res[i] === undefined){
            res[i] = 1;
        }else{
            res[i]++;
        }
    }
    
     return res;


}
countNumbers('dbkwedgquye7346te734rt6743tr63437');