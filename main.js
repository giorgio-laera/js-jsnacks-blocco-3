
/***************************************** snack auto *****************************************/

console.log("SNACK AUTO");

const cars =[
    {marca:"pegueotte", modello:"207", alimentazione:"gpl" },
    {marca:"lamborghini", modello:"Huracàn", alimentazione:"benzina" },
    {marca:"ferrari", modello:"F80", alimentazione:"elettrica" },
    {marca:"pegueotte", modello:"2008", alimentazione:"disel" },
    {marca:"MG", modello:"HS Hibrid", alimentazione:"elettrica" },
    {marca:"mclaren", modello:"750s", alimentazione:"benzina" },
    {marca:"opel", modello:"corsa", alimentazione:"disel" },
    {marca:"lancia", modello:"delta", alimentazione:"disel" },
    {marca:"ford", modello:"ecosport", alimentazione:"disel" },
    {marca:"fiat", modello:"600", alimentazione:"benzina" },
];
const benzina =[];
const disel =[];
const altro =[];
cars.forEach( car => {
    if (car.alimentazione=="disel") {
        disel.push(car);
    } else if (car.alimentazione=="benzina") {
         benzina.push(car);
    } else {
       altro.push(car);
    }{
        
    }
});
console.log(benzina);
console.log(disel);
console.log(altro);
/******************************************* snack stringhe***************************/

console.log("SNACK STRINGHE");

const nomi = ["pippo", "PLUTO", "Paperino"];
const nameMaiuscle=[];
nomi.forEach(element => {
   const initial= element.substring(0,1).toUpperCase();
   const bodyName=element.substring(1).toLowerCase();

//    const word = initial+bodyName
   nameMaiuscle.push(initial+bodyName);
});
console.log(nameMaiuscle);
/**************************************** animali *********************************** */

console.log("SNACK MAMMIFERI");

const animali=[
  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
  { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
];
const mammiferi=[];
animali.forEach(element => {
    
    if(element.classe=="mammiferi"){
mammiferi.push(element);
    }
});
console.log(mammiferi);