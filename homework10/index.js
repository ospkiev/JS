'use strict'

const getBtn = document.querySelector('.js-get');
const getById = document.querySelector('.getById');
const inputAddUser = document.querySelector('.addUser');
const inputById = document.querySelector('.inputById');
const addBtn = document.querySelector('#addBtn');
const form = document.querySelector('.form');
const ul = document.querySelector('.list');
const inputRemove = document.querySelector('.remove');
const removeBtn = document.querySelector('#removeBtn');
const container= document.querySelector('.container');
const removeForm = document.querySelector('.removeForm');
const inputUpdate =document.querySelector('.inputUpdate');
const updateForm = document.querySelector('.updateForm');
const addUserForm = document.querySelector('.addUserForm');


function getAllUsers() {
    event.preventDefault();
    fetch('https://test-users-api.herokuapp.com/users/')
    .then(res => res.json())
    .then(data => createListOfUsers(data))
    .catch(error => console.log(error))
};

function getUserById(){
    event.preventDefault();
    let q = inputById.value;
    fetch(`https://test-users-api.herokuapp.com/users/${q}`)
    .then(res => res.json())
    .then(data => createNewLi(Object.entries(data.data)))
    .catch(error => console.log(error))
};

function addUser(){
    event.preventDefault();
    let val = inputAddUser.value.split(' ') ;
    if(val !== ''){
    fetch('https://test-users-api.herokuapp.com/users', {
    method: 'post',
    body: JSON.stringify({ name: val[0] , age: val[1]}), 
    headers: { Accept: 'application/json','Content-Type': 'application/json',}
    })
    .then(res => res.json())
    .then(data => createNewLi(data))
    } 
    addUser.reset();
};

function removeUser(){
    event.preventDefault();
    let id = inputRemove.value;
    fetch(`https://test-users-api.herokuapp.com/users/${id}`,{
        method: 'delete',
    })
    removeForm.reset();
};

function updateUser(){
    event.preventDefault();
    let x = inputUpdate.value.split(' ');
    fetch(`https://test-users-api.herokuapp.com/users/${x[0]}`,{
        method:'put',
        body: JSON.stringify({name: x[1] , age : x[2]}),
        headers: {'Content-Type': 'application/json'} 
    })
    updateForm.reset();
}
    
function createNewLi(obj){
    let li = document.createElement('li');
    li.textContent = obj;
    li.setAttribute('data-id',obj.id);
    ul.append(li);
}


function createListOfUsers(obj){
    let table = document.createElement('table');
    let trList = document.createElement('tr');
    let thID = document.createElement('th');
    let thName = document.createElement('th');
    let thAge = document.createElement('th');
    thID.textContent = 'ID';
    thID.style.color = 'red';
    thName.textContent= 'NAME';
    thName.style.color = 'red';
    thAge.textContent = 'AGE';
    thAge.style.color = 'red';
    trList.append(thID,thName,thAge);
    table.append(trList);

for (let el of obj.data){
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    th1.textContent = el.id;
    th2.textContent = el.name;
    th3.textContent = el.age;
    tr.append(th1,th2,th3);
    table.append(tr);
    ul.append(table);
    }
};

getById.addEventListener('click',getUserById);
getBtn.addEventListener('click', getAllUsers);
addUserForm.addEventListener('submit',addUser);
removeForm.addEventListener('submit',removeUser);
updateForm.addEventListener('submit',updateUser);


