function contador() {  // declara a função "contador" os parênteses vazios significa que não tem parâmetro para ser enviado ou "coletado" 
    const tempo = new Date (); // declaração da variável "tempo" somente leitura, a qual receberá o objeto "Date" do javascript    
    let hora = tempo.getHours(); // declaração da variável "hora" temporária, a qual recebrá o retorno do método "getHours"
    let minuto = tempo.getMinutes(); // declaração da variável "minutos" temporária, a qual recebrá o retorno do método "getMinutes"
    let segundos = tempo.getSeconds(); // declaração da variável "segundos" temporária, a qual recebrá o retorno do método "getSeconds"
    if (document.getElementById("cbxMarcarTempo").checked == true) { // se o "cbx" estiver marcado ele vai executar o que estiver dentro do bloco de código, o "if" ele valida se o "cbx" esta marcado
        document.getElementById("div_hora").innerText = hora; // ele vai pegar o "div_hora" e vai colocar o texto que vem a hora
        document.getElementById("div_minuto").innerText = minuto; // ele vai pegar o "div_minuto" e vai colocar o texto que vem o minuto
        document.getElementById("div_segundos").innerText = segundos; // ele vai pegar o "div_segundos" e vai colocar o texto que vem o segundo
}  // encerra o bloco de códigos do "if" verdadeiro     
setInterval(contador, 1000); // essa linha apenas conta 1 segundo
    if (document.getElementById("cbxMarcarTempo").checked == false) { // o "if" ele vai validar se o "cbx" marcar tempo não estiver verificado
        document.getElementById("div_hora").innerText == ""; // vau zerar o "div_hora"
        document.getElementById("div_minuto").innerText == ""; // vai zerar o "div_minuto"
        document.getElementById("div_segundos").innerText == ""; // vai zerar o "div_segundos"
        clearInterval // vai zerar todos os comandos que esta conectado ao "setInterval"
   } // encerra o bloco de códigos do "if" falso
} // encerra o bloco de códigos da função "computador"

document.getElementById("cbxMarcarTempo").addEventListener('click', () => {  // essa linha esta adicionando na lista de ventos no JavaScript, o evento "click" dp objeto "MarcarTempo"
    contador(); // função contador
});   // bloco de códigos do metodo e da função inominada