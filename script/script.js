function cauculoImc(){
    //Coleta dos dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    

    //Processamento
    let resultado = peso / (altura * altura);
    let imc = resultado.toFixed(1)
 

    //Verifica se os campos PESO e ALTURA não estão vazios ou com o valor = 0
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("condição").textContent = "Por favor insira os valores validos"; 
        return;
    }

    //Condicionais para Verificação sobre o peso
    if (imc < 18.5) {
        classificacao = "BAIXO PESO"

    } else if (imc >= 18.5 && imc <= 24.9){
        classificacao = "PESO NORMAL"

    } else if (imc >= 24.9 && imc <= 29.9){
        classificacao = "SOBREPESO"

    } else if (imc >= 30.0 && imc<= 34.9){
        classificacao = "OBESIDADE GRAU I"

    } else if (imc >= 35.0 && imc <= 39.9){
        classificacao = "OBESIDADE GRAU II"
    } else {
        classificacao = "OBESIDADE GRAU III OU MÓRBIDA"
    }

    //Saida
    document.getElementById("condição").textContent = `Seu IMC é ${imc} e a classificação é: '${classificacao}'`
    
}

function btnLimpar(){
    //Limpa os campos do INPUT
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

    //Limpa os campos do Condição
    document.getElementById("condição").textContent = "";

}