
// Задание 7.4
/* (Реализовать следующее консольное приложение подобно примеру, 
    который разбирался в видео. Реализуйте его на прототипах.
    Определить иерархию электроприборов. Включить некоторые в розетку. 
    Посчитать потребляемую мощность. 
    Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
    Выбрав прибор, подумайте, какими свойствами он обладает.
    Реализовать через классы)*/


   let pvr = 0;
   class Edevice {
    constructor(voltage, on) {
        this.voltage = "220 v";
        this.getOn = function (on) {
            if (on == "on") {
                console.log(`Электроприбор - ${this.name} подключен к сети, 
               напражение - ${this.voltage},
               потребляемая мощность - ${this.power} вт.`);
                pvr = pvr + this.power;
            } else {
                console.log(`Электроприбор - ${this.name} выключен.`);
            }
        }
    }
}
  
    class InstrumentLamp extends Edevice { /*Прототип родительского класса*/ 
    constructor(on, name, power) {
        super (on); /*в super, внесены свойства родителя, чтобы получить доступ к методу или свойству родителя*/
        this.name = name;
        this.power = power;
    }
}
    class InstrumentPc extends Edevice { /*Прототип родительского класса*/
    constructor(on, name, power) {
        super (on);
        this.name = name;
        this.power = power;
    }
}

    const lamp = new InstrumentLamp("on", 'Лампа', 95);
    const pc = new InstrumentPc("on", 'ПК', 650);

    lamp.getOn ("on")
    pc.getOn("on");
    console.log ("-----------------------------------")
    console.log (`Общая мощность подключенных приборов - ${pvr} вт.`)
