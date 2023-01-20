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
            document.getElementById('real-conteiner').style.display= 'block'

        } else if (tipoMoeda[1].checked) {
            contadorDolar++;
            tipo = 'Dolar';


            cofrinhodolar.push({ valorDolar: valorMoeda });
            let oui = '';
            for (let i = 0; i < cofrinhodolar.length; i++) {
                oui += cofrinhodolar[i].valorDolar;
            }
            convertidaDolarMoeda.innerHTML += `<p>Moeda adicionada = ${oui} Dólares </p>  `;
            document.getElementById('dolar-conteiner').style.display= 'block'
        } else {
            contadorEuro++;
            tipo = 'Euro';


            cofrinhoeuro.push({ valorEuro: valorMoeda });
            let oi = '';
            for (let i = 0; i < cofrinhoeuro.length; i++) {
                oi += cofrinhoeuro[i].valorEuro;
            }

            convertidaEuroMoeda.innerHTML += `<p>Moeda adicionada = ${oi} Euros </p>`;
            document.getElementById('euro-conteiner').style.display= 'block'


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

    let totalMoedas = document.querySelector('div.total-todas-qtd-moedas-cofrinho');
    totalMoedas.innerHTML= `${cofrinho.length}`;
}
//função para estilo da página
function styleResposta() {
    let convertidaRealMoeda = document.getElementById('moedaRealConvertida');
    let convertidaDolarMoeda = document.getElementById('moedaDolarConvertida');
    let convertidaEuroMoeda = document.getElementById('moedaEuroConvertida');
    let totalMoedas = document.getElementById('total-todas-qtd-moedas-cofrinho');
   
    //cor de fundo dos conteiners div
    convertidaRealMoeda.style.backgroundColor = "#FFA500";
    convertidaDolarMoeda.style.backgroundColor = "#008000";
    convertidaEuroMoeda.style.backgroundColor = "#FF7F50";

    totalMoedas.style.backgroundColor = '#7ac72e';
}
//função para calcular e converter moedas
document.getElementById('btSomar').addEventListener('click', function calcularTotal() {
    let valorTotalTudo = document.querySelector('div.valor-total-cofrinho');
    document.getElementById('list-total').style.display='block';
    document.getElementById('convertido').style.display='block';
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
    let total = (totalDolar * dolarValor)+ (totalReal) + (totalEuro *  euroValor);
    valorTotalTudo.innerHTML = `<p>O valor total convertido para Real é:</p> R$ ${total} `


})






