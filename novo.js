// Exercícios GrassHopper.
// Laço aninhado.

// Para cada.
for (var adj of [
    'Raging',
    'Happy',
    'Hungry'
]) {
    for (var noun of [
        'Pharmacists',
        'Squids',
        'Twins'
    ]) {
        print('The ' + adj + ' ' + noun);
    }
}

// Os laços aninhados farão todas as combinações das 2 arrays.

// Alterar propriedades dentro de um objeto JSON.
var name = {
    first: 'Martin ',
    middle: 'Luther ',
    last: 'Simpson'
};
// Estrutura chave : valor. 
print(name.first + name.middle + name.last);

print('I am going to climb a mountain!');

// Criando objetos JSON.
var myBackpack = {
    food: 'bananas',
    equipment: 'map',
    clothing: 'hat'
};
print(myBackPack.food);

// Manipulando objetos com array.
var myBackpack = {
    food: [
        'maçã',
        'manga'
    ],
    equipment: [
        'marreta',
        'pederneira'
    ],
    clothing: [
        'tennis',
        'blusa'
    ]
};
print(myBackpack.food);
print(myBackpack.equipment);
print(myBackpack.clothing);

// Exemplo de laço aninhado.
for (var element of otherBackpack.equipment) {
    if (element === 'rope') {
        print('A compass is not useful right now');
    } else {
        print('I found some rope!');
    }
};

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