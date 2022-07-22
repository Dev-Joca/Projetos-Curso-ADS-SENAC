let gasolina = 0;
let alcool = 0;
// Função que aplica a mascará para o campo da gasolina, além de realizar a validação do valor do combustível //
function maskGasolina(){
    let preco = document.getElementById ('Gasolina');
    let precoR = preco.value.replace(/\D/, "");
    preco.value = precoR;
    gasolina = precoR;
    if (preco.value.length === 3){
        let p0= preco.value[0];
        let p1= preco.value[1];
        let p2= preco.value[2];
        preco.value = (p0+","+p1+p2)
        gasolina = (p0+"."+p1+p2);
    }
    if (gasolina === 0 || gasolina > 0 && gasolina.length <= 2) {
        document.getElementById('pGasolina').innerHTML = ("Por favor insira um valor de três dígitos para o campo da gasolina, exemplo 350, para R$: 3,50");
    }else {
        document.getElementById ('pGasolina').innerHTML =("");
    }
}
// Função que aplica a mascará para o campo do álcool, além de  realizar a validação do valor do combustível //
function maskAlcool(){
    let preco = document.getElementById ('Alcool');
    let precoR = preco.value.replace(/\D/, "");
    preco.value = precoR;
    alcool = precoR;
    if (preco.value.length === 3){
	 let p0= preco.value[0];
	 let p1= preco.value[1];
	 let p2= preco.value[2];
	 preco.value = (p0+","+p1+p2)
     alcool = (p0+"."+p1+p2);
    }
    if (alcool === 0 || alcool > 0 && alcool.length <= 2) {
        document.getElementById('pAlcool').innerHTML = ("Por favor insira um valor de três dígitos para o campo do álcool, exemplo 180, para R$: 1,80");
    } else {
        document.getElementById('pAlcool').innerHTML = ("");
    }
}
function calcular(){
    // Etapa de processamento das informações //
        resultado = (alcool/gasolina);
        if (gasolina === 0 || alcool === 0 || gasolina.length < 3 || alcool.length < 3){
            document.getElementById('pAlerta').innerHTML = ("Verifique os valores!");
            document.getElementById('pResultado').innerHTML = ("");
            return false;
        }
        if (resultado > 0.7){
          document.getElementById('pResultado').innerHTML = ("O combustível mais vantajoso é a gásolina.");
          document.getElementById('pAlerta').innerHTML = ("");
        } else if (resultado < 0.7){
          document.getElementById('pResultado').innerHTML = ("O Combustível mais vantajoso é o álcool.");
          document.getElementById('pAlerta').innerHTML = ("");
        } else{
          document.getElementById('pResultado').innerHTML = ("");
      }
}