// Acesssando métodos das classes.
// Encontrar a quantidade de caracteres de uma string. Acesso pelo método lenght da classe.
print(message);
if (message.length > 80) {
    print('The message is too long for a postcard.');
}
if (message.length < 80) {
    print('The message fits on a postcard');
};

// O método includes() determina se um array/objeto contém um determinado elemento ou não, retornando true ou false, respectivamente. 
// Em outras palavras, includes() retornará true se o elemento existir no array/objeto.
print(chat);
if (chat.includes('hello')) {
    print('Hi, can I help you pick a destination?');
}
if (chat.includes('bye')) {
    print('See you later, have a great trip!');
}

// O método .replace() procura um valor e, 
//   se o encontrar, substituirá o 1º valor por uma nova string.
var message = 'Today we are going shopping!';
message = message.replace('day', 'morrow');
print(message);

// Escopo de variável.
// A chave var geralmente cria variáveis globais. 
// A chave let permite que você crie variáveis locais.

// No código abaixo, a variável myLocalNumber é declarada usando a chave let. 
// Isso significa que ele só existe dentro do bloco da if statement. 
// O impossibleCalculation não funcionará porque a variável myLocalNumber 
// não existe fora da if statement.

var myGlobalNumber = 5;
if (myGlobalNumber > 3) {
    let myLocalNumber = 4;
}
var impossibleCalculation = myGlobalNumber + myLocalNumber;

// Exemplo de uso de variáveis locais.
var color = 'yellow';
drawBox(color);
for (let color of [
    'blue',
    'green',
]) {
    drawBox(color);
}
drawBox(color);

// Operador ternário.
var timeOffWork = 7;
var daysNeeded = 5;
timeOffWork > daysNeeded ? print('Go on vacation') : print('Go to work');
var train = 3;
var car = 2;
car < train ? print('Drive a car - TRUE') : print('Buy train tickets - FALSE');

// Operador de atribuição adição e atribuição subtração.
let ant = 40;
let gift = 10;
let grasshopper = 0;
ant -= gift;
grasshopper += gift;
print('The Ant has ' + ant + ' seeds, and the Grasshopper has ' + grasshopper + ' seeds');

// Console.log()
// Isso é útil para depurar, testar o resultado ou visualizar avisos e mensagens de erro sobre o código.
print('In Grasshopper, the print() function logs strings and numbers to the console window');
console.log('console.log can also log to the console window');
console.log('Esse console é exibido nas ferramentas de desenvolvedor do navegador (pressionando f12 no Firefox/Chrome). Normalmente, não é visível por usuários comuns, apenas desenvolvedores;');

// Exemplo de console.log() num eventual câmbio.
// Declarando uma função em JS.

function inYen(dollars) {
    let amount = dollars * 113;
    return amount;
};

console.log('20 US dollars is:');
console.log(inYen(20) + ' Japanese yen');
console.log('100 US dollars is:');
console.log(inYen(100) + ' Japanese yen');

// Criando funções.
let wallet = 50;
function inYen(dollars) {
    let yen = dollars * 113;
    return yen;
};
function inBaht(dollars) {
    let baht = dollars * 33;
    return baht;
};
console.log(wallet + ' US dollars is:');
console.log(inYen(wallet) + ' Japanese yen');
console.log(inBaht(wallet) + ' Thai baht');

// Entender melhor essas duas funções!
function larger(a, b) {
    return a > b ? a : b;
};
function maximum(array) {
    let max = 0;
    for (let num of array) {
        max = larger(max, num);
    }
    return max;
};
console.log(list);
console.log(maximum(list));

// Uma função recursiva que é rodada novamente até que todos os erros de digitação de um documento sejam corrigidos.
function updateAllNames(string, oldPart, newPart) {
    if (string.includes(oldPart) === false) {
        return string;
    }
    string = string.replace(oldPart, newPart);
    return updateAllNames(string, oldPart, newPart);
};
console.log(travelDocument);
console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'));

// Utilizando uma função como parâmetro para outra.
function myAssistant(time, callbackFunction) {
    console.log('I am your personal assistant, and I am happy to help with your request');
    callbackFunction(time);
};
myAssistant('6pm', recordShow);
myAssistant(time, setAlarm);
myAssistant('8am', turnOnLights);

// import para importar uma função para usar como um retorno de chamada. 
// Um comando de importação é uma maneira de usar o código armazenado em um local diferente.
import { recordShow, setAlarm, turnOffFan, turnOnFan, turnOffLight, turnOnLight } from 'assistantFunctions';
function myAssistant(time, callbackFunction, ___) {
    console.log('Scheduling:');
    callbackFunction(time, ___);
    console.log('Complete.');
};
myAssistant('8am', turnOnFan);
myAssistant('10am', turnOffFan);

// Mais um exemplo de import.
import { listOfDestinations } from 'grasshopper.travel';
let numberOfDestinations = listOfDestinations.length;
console.log('There are ' + numberOfDestinations + ' to choose from.');

// Uso da função .slice();
// O método .slice() cria uma nova array copiando uma subseção de outra array. 
// São necessários 2 argumentos: um índice de array onde começar a copiar e um índice onde terminar (fim não incluído).
import { transportation } from 'grasshopper.travel';
let cities = [
    'London',
    'London',
    'London',
    'Lagos',
    'Lisbon',
    'Louisville',
    ___
];
console.log(cities.slice(2, 6));
console.log(transportation.slice(2, 6));


