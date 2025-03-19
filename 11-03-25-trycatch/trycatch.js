// const nome = "Larissa"; // declarando a variável "nome"

// try { // é uma tentativa, mudar o "nome"
//     nome = "Sarah"; 
// } catch (err) { // é uma captura, ele captura o erro
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro:"+ err); // A letra "err" é uma variável que vai mandar uma mensagem de erro no "console", ela recebe as informações da capitura do erro
// } // encerra o bloco de códigos do "catch"

// console.log("Teste");

// nome = "Larissa"; // quando tenta executar um código ilegal, ele interrompe na hora, ele não deixa continuar a execução do script

// console.log("Teste2");

function fazerLogin() { // declara função "fazer Login" e abre o bloco de códigos da função
    let usuario = document.getElementById("txtLogin"); // declara a variável "usuario"
    let Senha = document.getElementById("txtSenha"); // declara a variável "senha"
    try { // inicia a tentativa de execução que tudo que tiver dentro do bloco do "try"
        if (usuario.value != "usuario123") { // verifica o valor do elemnto "Usuario", quando tem uma exclamação "!" no operador que comparação significa que é diferente e não igual
            usuario.focus();
            throw new Error("Erro: Usuário inválido"); // lança um novo erro 
        } // encerra o bloco de códigos do "if" do "usuario"
        if (Senha.value != "senha123") { // verifica o valor do elemtno "Senha", quando tem uma exclamação "!" no operador que comparação significa que é diferente e não igual
            Senha.focus();
            throw new Error("Erro: Senha incorreta"); // lança um novo erro 
        } // encerra o bloco de códigos do "if" da "senha"
        console.log("Login realizado com sucesso"); // exibe uma mensagem no log "Login realizado com sucesso"
    } catch (erro) { // captura o erro e vai enviar para essa variável o erro
        console.error(erro.message); // envia uma mensagem de erro, a proria mensagem de erro
  } // encerra o bloco de códigos de "catch"
} // encerra o bloco de códigos da função "Login"
