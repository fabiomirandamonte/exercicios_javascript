/*Questão 15: Você é hacker! Isso mesmo, você possui o nome de usuário da conta do instagram que você 
deseja acessar, mas não tem a senha, porém, você conhece algumas características que obteve através 
de engenharia social, e acredita que a senha seja uma dessas palavras “chocolateQuente viajar 
amoviajar 123456 alterarsenha”.

a) Desenvolva uma função que receba como parâmetro esse texto inteiro e verifique se a senha 
do usuário que é amoviajar está contida nessas palavras; Caso sim, a mensagem “Você acessou a conta!”;
*/

function acessoUsuario () {
    var possiveisSenhas = "chocolateQuente viajar amoviajar 123456 alterarsenha"

    const senhaDeAcesso = "amoviajar"

    if (possiveisSenhas.indexOf(senhaDeAcesso) != -1) {
        return 'Você acessou a conta!'
    } else {
        return 'Tente novamente!'
    }
}

var resultado = acessoUsuario()
console.log(resultado)
