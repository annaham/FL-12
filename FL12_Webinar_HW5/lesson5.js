document.addEventListener('DOMContentLoaded', getUsers);
    const root = document.querySelector('#root');
    let usersArr;

function getUsers() {
    showSpinner('#root')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            usersArr = users;
            users.forEach(user => displayUser(user));
            showSpinner('#root')
        });
}

function displayUser(user) {
    location.hash = '#root';

    const userList = document.createElement('div');
    userList.setAttribute('id', `user${user.id}`);

    const name = document.createElement('h2');
    name.textContent = `${user.name}`;
    name.addEventListener('click', showPosts);
    userList.appendChild(name);

    const username = document.createElement('div');
    username.innerHTML = `Username - ${user.username}`;
    userList.appendChild(username);

    const email = document.createElement('div');
    email.textContent = `Email - ${user.email}`;
    userList.appendChild(email);

    const phone = document.createElement('div');
    phone.textContent = `Phone - ${user.phone}`;
    userList.appendChild(phone);

    const website = document.createElement('div');
    website.textContent = `Website - ${user.website}`;
    userList.appendChild(website);

    const address = document.createElement('h3');
    address.textContent = `Address`;
    userList.appendChild(address);

    const street = document.createElement('div');
    street.textContent = `Street - ${user.address.street}`;
    userList.appendChild(street);

    const suite = document.createElement('div');
    suite.textContent = `Suite - ${user.address.suite}`;
    userList.appendChild(suite);

    const city = document.createElement('div');
    city.textContent = `City - ${user.address.city}`;
    userList.appendChild(city);

    const zipcode = document.createElement('div');
    zipcode.textContent = `Zipcode - ${user.address.zipcode}`;
    userList.appendChild(zipcode);

    const companyName = document.createElement('div');
    companyName.textContent = `Company Name - ${user.company.name}`;
    userList.appendChild(companyName);

    const editButton = document.createElement('button');
    editButton.setAttribute('type', 'button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', editUser);
    userList.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteUser);
    userList.appendChild(deleteButton);

    root.appendChild(userList);

}

function editUser(event) {
    location.hash = '#edit';
    root.innerHTML = '';
    const userId = Number(event.target.parentNode.dataset.id);
    const user = usersArr.find(user => user.id === userId);
    const userList = document.createElement('form');
    userList.setAttribute('id', `user${user.id}`);
    userList.setAttribute('data-id', user.id);
    userList.setAttribute('title', "Person's details");
    userList.addEventListener('submit', saveChanges)

    const header = document.createElement('h2');
    header.textContent = `Edit details`;
    userList.appendChild(header);

    const name = document.createElement('div');
    name.innerHTML = `
    <label for="name">Name</label> <br>
    <input type="text" id="name" name="name" value="${user.name}">
  `;
    userList.appendChild(name);

    const username = document.createElement('div');
    username.innerHTML = `
    <label for="name">Username</label> <br>
    <input type="text" id="username" name="username" value="${user.username}">
  `;
    userList.appendChild(username);

    const email = document.createElement('div');
    email.innerHTML = `
    <label for="name">Email</label> <br>
    <input type="text" id="email" name="email" value="${user.email}">
  `;
    userList.appendChild(email);

    const phone = document.createElement('div');
    phone.innerHTML = `
  <label for="phone">Phone</label> <br>
  <input type="text" id="phone" name="phone" value="${user.phone}">
  `;
    userList.appendChild(phone);

    const website = document.createElement('div');
    website.innerHTML = `
  <label for="name">Website</label> <br>
  <input type="text" id="website" name="website" value="${user.website}">
  `;
    userList.appendChild(website);

    const address = document.createElement('div');
    address.innerHTML = `
  <label for="address">Address</label> <br>
  <input type="text" id="address" name="address" value="Address" disabled>
  `;
    userList.appendChild(address);

    const street = document.createElement('div');
    street.innerHTML = `
  <label for="street">Street</label> <br>
  <input type="text" id="street" name="street" value="${user.address.street}">
  `;
    userList.appendChild(street);

    const suite = document.createElement('div');
    suite.innerHTML = `
  <label for="suite">suite</label> <br>
  <input type="text" id="suite" name="suite" value="${user.address.suite}">
  `;
    userList.appendChild(suite);

    const city = document.createElement('div');
    city.innerHTML = `
  <label for="city">Street</label> <br>
  <input type="text" id="city" name="city" value="${user.address.city}">
  `;
    userList.appendChild(city);

    const zipcode = document.createElement('div');
    zipcode.innerHTML = `
  <label for="zipcode">Street</label> <br>
  <input type="text" id="zipcode" name="zipcode" value="${user.address.zipcode}">
  `;
    userList.appendChild(zipcode);


    const companyName = document.createElement('div');
    companyName.innerHTML = `
  <label for="companyName">Company name</label> <br>
  <input type="text" id="companyName" name="companyName" value="${user.company.name}">
  `;
    userList.appendChild(companyName);

    const saveUser = document.createElement('input');
    saveUser.setAttribute('type', 'submit');
    saveUser.setAttribute('value', 'Save changes');
    userList.appendChild(saveUser);

    root.appendChild(userList);
}

function deleteUser(event) {
    event.preventDefault();
    showSpinner(`#${event.target.parentNode.id}`);
    const userList = document.querySelector(`#${event.target.parentNode.id}`);
    const id = event.target.parentNode.dataset.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 200) {
                userList.remove();
                console.log('User has been deleted');
            } else {
                console.log(`Error: ${response.status}`);
            }
        })
}

function saveChanges(event) {
    event.preventDefault();
    const userID = event.target.dataset.id;
    const inputs = event.target.elements;
    const updatedUser = {};
    updatedUser.id = userID;
    showSpinner(`#${event.target.id}`);

    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {

            showSpinner(`#${event.target.id}`);
        })
}

function showPosts(event) {
    showSpinner('#root')
    document.querySelector('#root').innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${event.target.parentNode.dataset.id}`)
        .then(response => response.json())
        .then(posts => userPosts(posts))
}

function userPosts(posts) {
    let container = document.createElement('div');
    container.setAttribute('id', `user${posts[0].userId}_posts`);
    document.body.appendChild(container);
    location.hash = `#user${posts[0].userId}_posts`;

    posts.forEach(post => {
        const article = document.createElement('article');
        article.setAttribute('id', `post${post.id}`);
        article.innerHTML = `<h3>Post ${post.id}: </h3>`;

        const header = document.createElement('h4');
        header.textContent = post.header;

        const paragraph = document.createElement('p');
        paragraph.textContent = post.body;

        article.appendChild(header);
        article.appendChild(paragraph);
        userComments(article);
        container.appendChild(article);
    });
}

function showSpinner(id) {
    if (!document.querySelector('.spinner')) {
        const container = document.querySelector(id);
        const spinner = document.createElement('img');
        spinner.setAttribute('src', 'img/spinner.gif');
        container.appendChild(spinner);
    } else {
        document.querySelector('.spinner').remove();
    }
}    