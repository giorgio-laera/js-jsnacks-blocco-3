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