// Your code goes here
let short_email_len = 5;
let short_pass_len = 6;
let password;
let new_pass;


let email = prompt('Please insert your email address');
if( email === '' || !email){
    alert('Cancelled');
}else if ( email.length < short_email_len ){
    alert('I don’t know any emails having name length less than 5 symbols');
}else if (email === 'user@gmail.com'){
    password = prompt('Please insert your password');
    if( password === '' || !password){
        alert('Cancelled');
    }else if( password === 'UserPass'){
            console.log('Password is correct');
            let pass_change = confirm('Do you want to change your password?');
            if( pass_change === false){
            alert('You have failed the change');
            }else if( pass_change === true){
            password = prompt('Please provide the old password firstly');
            if( password === 'UserPass' ){
                new_pass = prompt('Please insert new password');
                if( new_pass !== '' || new_pass !== null || new_pass.length > short_pass_len){
                    let new_new_pass = prompt('Please enter the new password again');
                 if( new_new_pass !== new_pass ){
                     alert('You wrote the wrong password.')
                 }else{ 
                     alert('You have successfully changed your password.');
                 }
                }
            }else if( password === '' || password === null){
                alert('Cancelled');
            }else if(password.length < short_pass_len){
                alert('It’s too short password. Sorry');
            }
        }
            
    }else{
        alert('Wrong password');
    }
}else if (email === 'admin@gmail.com'){
        password = prompt('Please insert your password');
    if( password === '' || !password){
        alert('Cancelled');
    }else if( password === 'AdminPass'){
            console.log('Password is correct');
            let pass_change = confirm('Do you want to change your password?');
            if( pass_change === false){
            alert('You have failed the change');
            }else if( pass_change === true){
            password = prompt('Please provide the old password firstly');
            }
            if( password === 'AdminPass' ){
                new_pass = prompt('Please insert new password');
                if( new_pass !== '' || new_pass !== null || new_pass.length > short_pass_len){
                    let new_new_pass = prompt('Please enter the new password again');
                 if( new_new_pass !== new_pass ){
                     alert('You wrote the wrong password.')
                 }else{ 
                     alert('You have successfully changed your password.');
                 }
                }
            }else if( password === '' || password === null){
                alert('Cancelled');
            }else if(password.length < short_pass_len){
                alert('It’s too short password. Sorry');
            }
    }else{
        alert('Wrong password');
    }
 }else{
     alert('I don’t know you');
}
 