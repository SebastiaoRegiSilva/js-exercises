// Funções auxiliares.
function tax(enter){
    return enter =+ enter *10;
}

function bigFunction(price1, price2) {
    let total = price1 + price2;
    return tax(total);
}
//No código acima, tax() é a função auxiliar.
import { calculateTax } from 'grasshopper.helperFunctions';
function splitBill(total, people) {
    let local = calculateTax(total);
    total += local;
    return total / people;
};
console.log(splitBill(76, 4));
