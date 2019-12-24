let a = prompt('Please insert the length of first triange side');
let b = prompt('Please insert second number');
let c = prompt('Please insert third number')

if( isNaN(a)|| isNaN(b)|| isNaN(c)){
alert('Input Values should be ONLY numbers');
console.log('Triangle doesn’t exist');
} else if (a <= 0 || b <= 0 || c <= 0){
   alert('A triangle must have 3 sides with a positive definite length');
   console.log('Triangle doesn’t exist');
} else if (a+b <= c || b+c <= a || c+a <= b){
            alert('Triangle doesn’t exist');
             console.log('Triangle doesn’t exist');
} else if(a===b && b===c) { 
    console.log('Equilateral triangle');
 } else if(a===b || a===c || b===c){
        console.log('Isosceles triangle');
        } else { 
            console.log('Scalene triangle'); 
        }
         
