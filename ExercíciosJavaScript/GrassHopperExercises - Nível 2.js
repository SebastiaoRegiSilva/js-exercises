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
function myAssistant(time, callbackFunction, ) {
    console.log('Scheduling:');
    callbackFunction(time, );
    console.log('Complete.');
};
myAssistant('8am', turnOnFan);
myAssistant('10am', turnOffFan);

// Mais um exemplo de import.
import { listOfDestinations } from 'grasshopper.travel';
let numberOfDestinations = listOfDestinations.length;
console.log('There are ' + numberOfDestinations + ' to choose from.');

// Uso da função .slice().
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
];
console.log(cities.slice(2, 6));
console.log(transportation.slice(2, 6));

// Uso da função .push().
// O método .push() para adicionar um novo elemento ao final de uma array.
import { travelToCities } from 'grasshopper.travel';
let last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
let boatAtlanta = {
    destination: 'Atlanta',
    transportMode: 'boat',
    cost: 200,
    countryedit: 'Hoptopia'
};
travelToCities.push(boatAtlanta);
last = travelToCities[travelToCities.length - 1];
console.log(last.destination);

// Uso do método .pop().
// O método .pop() removerá o último item em uma array.
import { travelToCities } from 'grasshopper.travel';
let atlantaTravel = travelToCities.pop();
atlantaTravel.transportMode = 'hovercraft';
travelToCities.push(atlantaTravel);
let last1 = travelToCities[travelToCities.length - 1];
console.log(last.destination);
console.log(last.transportMode);

// Operador de propagação...
// Copiar todos os elementos de uma array em outra array.
import { flights, trains, buses } from 'grasshopper.travel';
let departures = [
    ...flights,
    ...trains,
    ...buses
];
for (let time of departures) {
    console.log(time);
}
console.log(departures.length + ' total times');

// Método .filter()
// .filter() para selecionar itens de uma array que passam em um determinado teste.
// Cada item na array é usado como um argumento em uma função retorno de chamada 
// e se retornar true, o item passa pelo filtro. Caso contrário, o item é filtrado.
import { departures } from 'grasshopper.travel';
function morning(time, ) {
    return time.includes('am');
};
function evening(time, ) {
    return time.includes('pm');
};
let amTimes = departures.filter(morning);
let pmTimes = departures.filter(evening);
console.log('Day times: ' + amTimes);
console.log('Night times: ' + pmTimes);

// Uso do foreach.
import { flightPrices } from 'grasshopper.travel';
let max = flightPrices[0];
let min = flightPrices[0];
function compareToMaximum(value) {
    max = value > max ? value : max;
};
function compareToMinimum(value) {
    min = value < min ? value : min;
};
console.log(flightPrices);
flightPrices.forEach(compareToMaximum);
flightPrices.forEach(compareToMinimum);
console.log('Maximum: ' + max);
console.log('Minimum: ' + min);

// Uso da função .getData() para uso de API grasshopper.reviews.
import { getData, findHotels } from 'grasshopper.reviews';
function printHotel(hotel) {
    console.log('HOTEL_INFO');
    console.log('type: ' + hotel.type);
    console.log('city: ' + hotel.city);
    console.log('price: ' + hotel.price);
    console.log('rating: ' + hotel.rating);
};
let grasslandHotels = getData('Grassland', findHotels);
grasslandHotels.forEach(printHotel);

// For em API.
import { getData, findHotels } from 'grasshopper.reviews';
let grasslandHotels1 = getData('Grassland', findHotels);
for (var element of grasslandHotels) {
    console.log(element.rating);
}

// Busca de classificação de hotéis dentro de uma função.
import { getData, findHotels } from 'grasshopper.reviews';
function getRatings(hotelList) {
    let ratings = [];
    for (var element of hotelList) {
        ratings.push(element.rating);
    }
    return ratings;
};
let grasslandHotels2 = getData('Grassland', findHotels);
console.log('Ratings Array:');
console.log(getRatings(grasslandHotels));
