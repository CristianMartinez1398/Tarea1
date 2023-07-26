const colors = require("colors");
const prompt = require("prompt-sync")();


var nota_final ;

nota_final = parseInt(prompt("Ingrese su nota final: "));

/* al inicio en el terminal tiene que poner npm start y después le va decir que ingrese su nota final, 
   en el problema que usted hizo para resolver esta malo cuando usted ponga la nota final 80 no se pinta de 2 colores solo uno entonces
   siempre va caer de color amarillo y no verde pero si usted pone 81 alli si cae el color verde */

if (nota_final <= 65) {
    console.log((nota_final +" = Baja nota").red);
}else if ((nota_final >= 66 && nota_final <= 80) && (nota_final >= 81 || nota_final <= 100)) {
    console.log((nota_final + " = Buena nota").yellow);
}else{
    console.log((nota_final + " = Sobresaliente").green);
}
    
