
// Задание 7.3
/* (Написать функцию, которая создает пустой объект, но без прототипа.)*/


  
    function getObj() {
        let objTest = Object.create(null); /* создает объект с заданным прототипом - null, т.е. без прототипа */ 
        return console.log(objTest);
      }
      getObj();

     