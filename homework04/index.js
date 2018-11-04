'use strict'

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };

// let value = prompt('ВВедите число больше 0');

function Cashier( name, productDatabase){
      this.name = name;
      this.productDatabase = productDatabase;
      this.customerMoney = 0 ;

      this.getCustomerMoney = function (value){
        if (typeof value === 'number' && value > 0){
          this.customerMoney = value ;}
          // return this.customerMoney ;
      };

      this.countTotalPrice = function (order){
        let newArr = [];

        for (let key in order){
          let result = order[key]*products[key];
          newArr.push(result);
          }

      let total = newArr.reduce((acc,el)=>acc +el,0);
      return total;     
      }

      this.countChange = function (){
        if ( totalPrice  > this.customerMoney){
          return null;
        } else {
        return this.customerMoney - totalPrice };
      };

      this.onSuccess = function (change){
        return console.log('Спасибо за покупку, ваша сдача 190');
      };

      this.onError = function (){
        return console.log('Очень жаль, вам не хватает денег на покупки');
      };

      this.reset = function (){
        return this.customerMoney = 0 ;
      };
};
    
const mango = new Cashier('Mango', products);

  // Проверяем исходные значения полей
// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney);// 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
  //  При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0