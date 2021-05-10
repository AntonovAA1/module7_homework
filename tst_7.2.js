
// Задание 7.2
/* (Написать функцию, которая принимает в качестве аргументов строку и объект,
     а затем проверяет есть ли у переданного объекта свойство с данным именем. 
     Функция должна возвращать true или false.)*/

    const objTest = {
        a: 11,
        b: NaN,
        c: "str",
        d: {}
      };

    function getObj(obj, str) {
        let result = false;
        for (let key in obj) {
          if (key == str) { 
            result = true;
          } 
        }
        return console.log(result);
      }
      
      getObj(objTest, "b");