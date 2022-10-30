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