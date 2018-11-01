'use strict'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) { 
    if (login.length >= 4 && login.length <= 16 ){
        return true;
    } else {
        return false;
    } 
}; 

const isLoginUnique = function (logins, login){
    if (logins.includes(login)){
        return false;
    } else {
        return true;
    }
};

const addLogin = function(login) {
    if (!isLoginValid(login)){
         console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        //  return logins;    
        } else if (!isLoginUnique(logins,login)){
         console.log('Такой логин уже используется!');
        //  return logins;
        } else {
          logins.push(login);
          console.log('Логин успешно добавлен');
        //   return logins;  
        }
};

console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'