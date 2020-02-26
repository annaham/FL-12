//1

let arr = [1,2,33,-5,87,123,543,65];
let maxEl = (arr) => console.log(Math.max(...arr));
maxEl(arr);

//2
const array = [1,2,3];


const copyArray = (array) => {
    let arr2 = [...array];
    return arr2;
}

const copiedArray = copyArray(array);
console.log(array, copiedArray);

// 3 

const addUniqueId = (obj) => {
  const obj1 = {
      ...obj,
    id: Symbol()
    }
    return obj1;
}

console.log(addUniqueId({name:123}));
    
//  4

const oldObj = {
    name: 'Someone',
     details:{ 
         id:1, 
         age:11, 
         university:"UNI"
        }
    }


const regroupObj = (oldObj) => { 
 
    let {
        name,
        details: {
            id,
            age,
            university
        }
    } = oldObj;

    const newObj = {
       university: university, 
        user: {
            age : age, 
            firstName : name, 
            id : id
        } 
     } 
    return newObj;
 } 



 console.log(regroupObj(oldObj));

 //5

 const array5 = [1,1,5,66,45,44,66,89,43,66];

 const findUniqueElement = (array) => {
     const newArr = new Set(array);
     const backToArray = [...newArr];
     return backToArray;
 }

 console.log(findUniqueElement(array5));

 //6

 const phoneNumber = '0123456789';
  const hideNumber = (phoneNumber) => {
      let securedNumber = phoneNumber.substring(phoneNumber.length - 4).padStart(10, '******');;
        
      return securedNumber;
  }

 console.log( hideNumber(phoneNumber));
 
//7
let sum;
const add = (a, b) => {
  
        sum = a + b;
         if(a === undefined || b === undefined){
        throw new Error('Missing property');
         }
         return sum;  
        }

console.log(add(1,3));

//8

function alphaPromise(url) {
    return fetch(url)
      .then(request => request.text())
      .then(text => {
        const names = [];
        for (let key in JSON.parse(text)) {
            names.push(JSON.parse(text)[key]['name'])
        }
        return names.sort();
    })
    .catch(error => console.log(`ERROR: ${error.stack}`));
}
  
  alphaPromise('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));

  //9

  async function alphaAsync(url) {
    try {
      const request = await fetch(url);
      const text = await request.text();
      const names = [];
        for (let key in JSON.parse(text)) {
            names.push(JSON.parse(text)[key]['name'])
        }
        return names.sort();
    }
    catch (error) {
      console.log(`ERROR: ${error.stack}`);
    }
  }
  alphaAsync('https://jsonplaceholder.typicode.com/users').then(res => console.log(res))