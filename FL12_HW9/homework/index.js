// Your code goes here

//1
 let arr = [];
 let two = 2;
function convert(...args){
     for(let i=0; i < args.length; i++){
     if(typeof args[i] !== 'number'){
        args[i] = Number(args[i]);
        } else {
            args[i] = String(args[i]);
        }

    }
console.log(args);
return args;

}

convert('1',2, 3,'4');

//2
 function executeforEach(arr, callback){
     for(let i=0;i<arr.length;i++){
         callback(arr[i]);
         
     }
     return arr;
 }

 executeforEach([1,2,3], function(el) { 
     console.log(el * 2)
    });

//3
    function mapArray(arr, callback){
        let arr3 = [];
            executeforEach(arr, function(el) {
                arr3.push(callback(parseInt(el)));
            });
            return arr3;
        }

    mapArray([2,'5', 8], function(el){
        return el+3;
    })

//4

//filterArray([2, 5, 8], function(el) { return el % 2 === 0 })
// returns [2, 8]

function filterArray(arr, callback){
        let arr4 = [];
        executeforEach(arr, function(el){
            if (callback(el)){
                arr4.push(el);
            }
        });
        return console.log(arr4);
}

filterArray([2, 5, 8], function(el){
    return el % 2 === 0;
})

//5

function flipOver(str){
   str = str.split('').reverse().join('');

return console.log(str);
}

flipOver('Hey world');

//6

function makeListFromRange(arr){
    let arr6 = [];
    for(let i=arr[0];i<=arr[1];i++){
        arr6.push(i);
    }
    return console.log(arr6);
}

makeListFromRange([2,7]);

//7

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];

function getArrayOfKeys(obj, name){
    let arr7 = [];
    executeforEach(arr,function(el){
        arr7.push(el[name]);
    });
    return console.log(arr7);
}

getArrayOfKeys(actors, 'name');

//8

function substitute(arr){
     let arr8 = [];
     mapArray(arr,function(el){
        if(el < 30){
            el = '*';
            
        }
        arr8.push(el);
        return el;
     });
     return console.log(arr8);
 
}

substitute([58, 14, 48, 2, 31, 29]);