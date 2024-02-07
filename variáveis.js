//definindo as variáveis que representarão as notas do aluno
var nota1 = 7;
var nota2 = 5;

//somando as notas e fazendo uma média aritmética entre elas
var soma = nota1 + nota2;
var media = soma / 2;

//definindo a condição para a aprovação
//média mínima adotada = 6
if(media >= 7){
    console.log("Parabéns! Você foi aprovado!");
}
else if(media <= 4){
    console.log("Que pena... Você foi reprovado.");
}
else{
    console.log("Você ficou de recuperação. Não desista!")
}
//é aprovado caso obtenha média acima de 7
//o aluno reprova caso obtenha média abaixo de 4
//fica de recuperação caso obtenha média entre os dois valores (único caso restante)