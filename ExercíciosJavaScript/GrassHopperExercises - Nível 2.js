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