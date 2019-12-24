    let a = prompt('Please insert first number');
    let b = prompt('Please insert second number');
    let c = prompt('Please insert third number');
    let two = 2;
    let four = 4;
    

    if (isNaN(a)|| isNaN(b)|| isNaN(c) || !a || !b|| !c) {
         alert('Invalid input data');
        }else { 
            let d = Math.pow(b,two) - four * a * c;
        console.log(Math.round(d));
    if (d === 0){
        let x1 = - b / two * a;
        console.log('Since D = 0, the only x = ' + x1);
    } else if(d < 0){
        console.log('No solution');
    }else if(d > 0){
           let x1 = (- b + Math.sqrt(d)) / (two * a);
           let x2 = (- b - Math.sqrt(d)) / (two * a); 
         console.log('Since D > 0, there are 2 solutions. x1 = ' +
         Math.round(x1), 'x2= ' + Math.round(x2));
    }
 }
     
