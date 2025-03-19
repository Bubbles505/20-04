function colorirFundo() { // função colorir
    document.body.bgColor = "#ffffff"
    document.body.style.color = "#000000";
    let txtCorFundo = document.getElementById("txtCorFundo");
    let corFundo = txtCorFundo.value.toLowerCase(); // A variável cor esta recebendo em letras minusculas o valor do "txtCor"

    switch (corFundo) { // o algoritmo "switch" vai procurar a cor e vai executar a troca dela
        case "azul": // interruptor, ele faz a cor funcionar
            document.body.bgColor = "#0000ff";
            break;
        case "violeta":
            document.body.bgColor = "#EE82EE";
            break;
        case "laranja":
            document.body.bgColor = "#FFA500";
            break;
        case "roxo":
            document.body.bgColor = "#8A2BE2";
            break;
        case "roxa":
            document.body.bgColor = "#8A2BE2";
            break;
        case "amarelo":
            document.body.bgColor = "#FFFF00";
            break;
        case "amarela":
            document.body.bgColor = "#FFFF00";
            break;
        case "cinza":
            document.body.bgColor = "#848484";
            break;
        case "preto":
            document.body.bgColor = "#000000";
            document.body.style.color ="#ffffff"
            break;
        case "preta":
            document.body.bgColor = "#000000";
            document.body.style.color ="#ffffff"
            break;
        case "ciano":
            document.body.bgColor = "#00FFFF";
            break;
        case "verde":
            document.body.bgColor = "#00FF00";
            break;
        case "verde escuro":
            document.body.bgColor = "#006400";
            document.body.style.color ="#ffffff"
            break;
        case "rosa":
            document.body.bgColor = "#FF1493";
            break;
        case "trigo":
            document.body.bgColor = "#F5DEB3";
            break;
        case "castanho":
            document.body.bgColor = "#F4A460";
            break;  
            default:
            document.body.bgColor = "#ffffff";
            break;
    }
}

    function colorirTexto() { // função colorir
            document.body.style.color = "#000000";
            let txtCorTexto = document.getElementById("txtCorTexto");
            let corTexto = txtCorTexto.value.toLowerCase();

        switch (corTexto) {
        case "azul":
        document.body.style.color ="#0000ff"
        break;
        case "violeta":
        document.body.style.color ="#EE82EE"
        break;  
        case "laranja":
        document.body.style.color ="#FFA500"
        break;
        case "roxo":
        document.body.style.color ="#8A2BE2"
        break;
        case "roxa":
        document.body.style.color ="#8A2BE2"
        break;
        case "amarelo":
        document.body.style.color ="#FFFF00"
        break;
        case "amarela":
        document.body.style.color ="#FFFF00"
        break;
        case "cinza":
        document.body.style.color ="#848484"
        break;
        case "preto":
        document.body.style.color ="#000000"
        break;
        case "preta":
        document.body.style.color ="#000000"
        break;
        case "ciano":
        document.body.style.color ="#00FFFF"
        break;
        case "verde":
        document.body.style.color ="#00FF00"
        break;
        case "verde escuro":
        document.body.style.color ="#006400"
        break;
        case "rosa":
        document.body.style.color ="#FF1493"
        break;
        case "trigo":
        document.body.style.color ="#F5DEB3"
        break;
        case "castanho":
        document.body.style.color ="#F4A460"
        break;
    }
}

document.getElementById("txtCorFundo").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
    colorirFundo();
    }
});

document.getElementById("txtCorTexto").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
    colorirTexto();
    }
});