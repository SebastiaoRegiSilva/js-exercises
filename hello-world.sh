echo "Criar um script shell partindo da linha de comando."
# touch nomedoarquivo.sh

echo "Alterando a permissão do script."
# chmod +x nomedoaquivo.sh (Pesquisar melhor sobre as permissões!)

echo "Quando executar usar os bash ou sh no início da instrução."
# bash devemos apontar o caminho do arquivo shell
# sh quando estiver na pasta. (Pesquisar para validar essa informação!)
# ./nomedoarquivo.sh - também executa o script.

# Teste de impressão com variáveis.
# Não deve ter espaço entre o operador de atribuição e o nome da variável.
whom_variable="Nome da Variável!"
# Use printf to safely output the data
printf "Seja Bem-Vindo: %s\n" "$whom_variable"

echo "Isso é um exercício para aprimoramento de técnicas de  programação."
