
// Задание 7.4
/* (Реализовать следующее консольное приложение подобно примеру, 
    который разбирался в видео. Реализуйте его на прототипах.
    Определить иерархию электроприборов. Включить некоторые в розетку. 
    Посчитать потребляемую мощность. 
    Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
    Выбрав прибор, подумайте, какими свойствами он обладает.)*/


   let pvr = 0;
   function Edevice (voltage, on) {
        this.voltage = "220 v";
        this.getOn = function (on) {
            if (on == "on") {
               console.log (`Электроприбор - ${this.name} подключен к сети, 
               напражение - ${this.voltage},
               потребляемая мощность - ${this.power} ват.`);
               pvr = pvr + this.power;
            } else {
               console.log (`Электроприбор - ${this.name} выключен.`)
            }
        }
      }
  
    function InstrumentLamp (name, power) {
        this.name = name;
        this.power = power
    }
    function InstrumentPc (name, power) {
        this.name = name;
        this.power = power
    }
    InstrumentLamp.prototype = new Edevice()
    InstrumentPc.prototype = new Edevice()

    const lamp = new InstrumentLamp('Лампа', 95);
    const pc = new InstrumentPc('ПК', 650);
    lamp.getOn("off");
    pc.getOn("on");
    console.log ("-----------------------------------")
    console.log (`Общая мощность подключенных приборов - ${pvr} ват.`)
   