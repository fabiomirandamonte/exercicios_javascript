/*Questão 12: Você recebeu uma task de criar um cadastro clientes, Crie uma função 
que receba como parâmetro o nome, email e cpf do cliente.*/

/* =============================================================================================
    a) Caso o argumento passado como nome não seja informado, a mensagem “O nome 
    do cliente deve ser informado”
 =============================================================================================*/

const listaDeClientes = []

function cadrastroCliente(nome, email, cpf) {

    if (!nome || nome.trim() === "") { //parametro trim() remove os espaços em branco do início e/ou fim do texto.
        return "O nome do cliente deve ser informado"
    } else {
        var cliente = {
            nome: nome,
            email: email,
            cpf: cpf
        }
        listaDeClientes.push(cliente)
    }

}

// var resultado = cadrastroCliente("Fabio", "fabiomirandamonte@gmail.com", "059.958.752-32");
// console.log(listaDeClientes); // Neste caso irá retornar a lista dos clientes adicionados

// resultado = cadrastroCliente("", "fabiomirandamonte@gmail.com", "059.958.752-32");
// console.log(resultado);

/* =============================================================================================
    b) Sua função deve utilizar outra função de validação de email (procure na internet função 
    pronta de validação de email e utilize-a) e caso o parâmetro de email não seja válido,
    a mensagem “E-mail inválido” deve ser exibida;
 =============================================================================================*/


function validarEmail(email) {
    var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (emailRegex.test(email)) {
        return 'E-mail válido';
    }
    else {
        return 'E-mail inválido';
    }
}
// var resultado = validarEmail("fabiomirandamonte@gmail.com")
// console.log(resultado)


/* =============================================================================================
    c) Além da validação do e-mail, o parâmetro do CPF deve ser validado (procure na internet
    uma função pronta para validar CPF e utilize-a) também, caso o argumento passado como CPF
    não seja válido, a mensagem “CPF inválido deve ser exibida”;
 =============================================================================================*/

function isCPF(cpf) {
    // console.log(cpf); Obs.: Esse log é só para testar se a função está funcionando corretamente.
    cpf = cpf.replace(/\.|-/g, "");

    let soma = 0;
    soma += cpf[0] * 10;
    soma += cpf[1] * 9;
    soma += cpf[2] * 8;
    soma += cpf[3] * 7;
    soma += cpf[4] * 6;
    soma += cpf[5] * 5;
    soma += cpf[6] * 4;
    soma += cpf[7] * 3;
    soma += cpf[8] * 2;
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11)
        soma = 0;
    // console.log("Primeiro d: " + soma) Obs.: Esse log é só para testar se a função está funcionando corretamente.

    if (soma != cpf[9])
        return false;

    soma = 0;
    soma += cpf[0] * 11;
    soma += cpf[1] * 10;
    soma += cpf[2] * 9;
    soma += cpf[3] * 8;
    soma += cpf[4] * 7;
    soma += cpf[5] * 6;
    soma += cpf[6] * 5;
    soma += cpf[7] * 4;
    soma += cpf[8] * 3;
    soma += cpf[9] * 2;
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11)
        soma = 0;

    if (soma != cpf[10])
        return 'CPF inválido';

    // console.log(("segundo D: " + soma)); Obs.: Esse log é só para testar se a função está funcionando corretamente.
    return 'CPF válido';
}

var resultado = isCPF("052.973.184-32");
console.log(resultado)


/* =============================================================================================
    d) - Não deve ser permitido o cadastro em duplicidade de email e cpf, logo, verifique se 
    o email e cpf já não estão cadastrados.
 =============================================================================================*/
