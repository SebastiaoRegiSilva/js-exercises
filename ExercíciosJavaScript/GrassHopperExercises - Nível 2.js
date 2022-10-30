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
    ___
]) {
    drawBox(color);
    ___
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