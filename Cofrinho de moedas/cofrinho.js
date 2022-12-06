const realValor = 1;
const dolarValor = 4;
const euroValor = 6;

//contadores para cada vez que uma moeda for add ao cofre
let contadorReal = 0;
let contadorDolar = 0;
let contadorEuro = 0;

//var que armazena o cofrinho
let cofrinho = [];

let cofrinhoreal = [];
let cofrinhodolar = [];
let cofrinhoeuro = [];

document.getElementById('btAdicionar').addEventListener('click', function addMoedaCofrinho() {
    let tipoMoeda = document.getElementsByName('moeda');
    let invalorMoeda = document.getElementById('valorMoeda');

    let valorMoeda = Number(invalorMoeda.value);

    let resp = document.querySelector('div.resposta');
    let totalQtdMoedas = document.querySelector('div.total-todas-qtd-moedas-cofrinho');
    let tipo;

    let convertidaRealMoeda = document.querySelector('div.moedaRealConvertida');
    let convertidaDolarMoeda = document.querySelector('div.moedaDolarConvertida');
    let convertidaEuroMoeda = document.querySelector('div.moedaEuroConvertida');

    if (validacao(valorMoeda)) {
        resp.innerHTML = `Preencha o campo corretamente..`;
        invalorMoeda.focus();
        return;
    } else {
        if (tipoMoeda[0].checked) {
            contadorReal++;
            tipo = 'Real';

            cofrinhoreal.push({ valorReal: valorMoeda });
            let o = '';
            for (let i = 0; i < cofrinhoreal.length; i++) {
                o += cofrinhoreal[i].valorReal;
            }
            convertidaRealMoeda.innerHTML += `<p>Moeda adicionada = ${o} Reais </p>  `;

        } else if (tipoMoeda[1].checked) {
            contadorDolar++;
            tipo = 'Dolar';


            cofrinhodolar.push({ valorDolar: valorMoeda });
            let oui = '';
            for (let i = 0; i < cofrinhodolar.length; i++) {
                oui += cofrinhodolar[i].valorDolar;
            }
            convertidaDolarMoeda.innerHTML += `<p>Moeda adicionada = ${oui} Dólares </p>  `;

        } else {
            contadorEuro++;
            tipo = 'Euro';


            cofrinhoeuro.push({ valorEuro: valorMoeda });
            let oi = '';
            for (let i = 0; i < cofrinhoeuro.length; i++) {
                oi += cofrinhoeuro[i].valorEuro;
            }

            convertidaEuroMoeda.innerHTML += `<p>Moeda adicionada = ${oi} Euros </p>`;


        }
        cofrinho.push({ moedaValor: valorMoeda, tipodeMoeda: tipo });

        //chama a função que vai listar as moedas adicionadas
        listarMoedas(tipoMoeda);

        //função que ajusta o estilo da pagina via js
        styleResposta();

        //Total de moedas no cofrinho
        totalQtdMoedas.innerHTML = `<p>Total moedas</p> <p>${cofrinho.length}</p>`;
    }

})
//função para validar input 
function validacao(y) {
    if (y == '') {
        return true;
    }
}
//função que lista as moedas adicionadas
function listarMoedas(z) {
    let list = document.querySelector('div.list');
    let resp = document.querySelector('div.resposta');

    resp = '';
    for (let i = 0; i < cofrinho.length; i++) {
        if (z[0].checked) {
            resp += `<p>Moeda: ${cofrinho[i].tipodeMoeda} | Valor= R$ ${cofrinho[i].moedaValor}</p>`;
        } else if (z[1].checked) {
            resp += `<p>Moeda: ${cofrinho[i].tipodeMoeda} | Valor= $  ${cofrinho[i].moedaValor}</p>`;
        } else {
            resp += `<p>Moeda: ${cofrinho[i].tipodeMoeda} | Valor=    ${cofrinho[i].moedaValor}</p>`;

        }
    } list.innerHTML = `<p>Cofrinho</p>${resp}`;
}
//função para estilo da página
function styleResposta() {
    let convertidaRealMoeda = document.getElementById('moedaRealConvertida');
    let convertidaDolarMoeda = document.getElementById('moedaDolarConvertida');
    let convertidaEuroMoeda = document.getElementById('moedaEuroConvertida');
    let totalSomado = document.getElementById('valor-total-cofrinho');
    let todaMoedas = document.getElementById('total-todas-qtd-moedas-cofrinho');
    let resp = document.getElementById('resposta');
    let list = document.getElementById('list');

    //cor de fundo dos conteiners div
    convertidaRealMoeda.style.backgroundColor = "#FFA500";
    convertidaDolarMoeda.style.backgroundColor = "#008000";
    convertidaEuroMoeda.style.backgroundColor = "#FF7F50";

    //resp
    resp.style.backgroundColor = '#054F77';
  
    //total de moedas no cofre
    todaMoedas.style.backgroundColor = `#35f`;

    //lista das moedas adicionadas
    list.style.backgroundColor = '#42e';
   
    //soma de todas as moedas convertidas
    totalSomado.style.background = '#05f';
}

document.getElementById('btSomar').addEventListener('click', function calcularTotal() {
    let valorTotalTudo = document.querySelector('div.valor-total-cofrinho');
    
    let totalDolar = 0;
    for (let i = 0; i < cofrinhodolar.length; i++) {
        totalDolar += cofrinhodolar[i].valorDolar;
    }
    
   
    let totalReal = 0;
    for (let i = 0; i < cofrinhoreal.length; i++) {
        totalReal += cofrinhoreal[i].valorReal;
    }

    let totalEuro = 0;
    for (let i = 0; i < cofrinhoeuro.length; i++) {
        totalEuro += cofrinhoeuro[i].valorEuro;
    }
    let total = (totalDolar * dolarValor)+ (totalReal + realValor) + (totalEuro +  euroValor);
    valorTotalTudo.innerHTML = `<p>O valor total convertido para Real é:</p> R$ ${total} `


})



document.getElementById('btRemover').addEventListener('click', function calcularTotal() {


    let invalorMoeda = document.getElementById('valorMoeda');
    let valorMoeda = Number(invalorMoeda.value);

    alert("Digite o valor a ser removido e selecione a moeda");

    invalorMoeda.focus();
    if (z[0].checked) {
        resp += `<p>Moeda: ${cofrinho[i].tipodeMoeda} | Valor= R$ ${cofrinho[i].moedaValor}</p>`;
    } else if (z[1].checked) {
        resp += `<p>Moeda: ${cofrinho[i].tipodeMoeda} | Valor= $  ${cofrinho[i].moedaValor}</p>`;
    } else {
        resp += `<p>Moeda: ${cofrinho[i].tipodeMoeda} | Valor=    ${cofrinho[i].moedaValor}</p>`;

    }


})


