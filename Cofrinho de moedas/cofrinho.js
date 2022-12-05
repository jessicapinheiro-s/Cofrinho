const realValor = 1;
const dolarValor = 4;
const euroValor = 6;

//contadores para cada vez que uma moeda for add ao cofre
let contadorReal = 0;
let contadorDolar = 0;
let contadorEuro = 0;

//var que armazena o cofrinho
let cofrinho = [];

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
            let cofrinhoreal = [];
            cofrinhoreal.push({valorReal: valorMoeda});                           
            let o = '';
            for (let i = 0; i < cofrinhoreal.length; i++) {
                o += cofrinhoreal[i].valorReal;
            }
            convertidaRealMoeda.innerHTML += `<p>Moeda adicionada = ${o} Reais </p>  `;

        } else if (tipoMoeda[1].checked) {
            contadorDolar++;
            tipo = 'Dolar';

            let cofrinhodolar = [];
            cofrinhodolar.push({valorDolar: valorMoeda});                           
            let oui = '';
            for (let i = 0; i < cofrinhodolar.length; i++) {
                oui += cofrinhodolar[i].valorDolar;
            }
            convertidaDolarMoeda.innerHTML += `<p>Moeda adicionada = ${oui} Dólares </p>  `;

        } else {
            contadorEuro++;
            tipo = 'Euro';
            
            let cofrinhoeuro = [];
            cofrinhoeuro.push({valorEuro: valorMoeda});                           
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
    }list.innerHTML = `<p>Cofrinho</p>${resp}`;
}
//função para estilo da página
function styleResposta() {
    let convertidaRealMoeda = document.getElementById('moedaRealConvertida');
    let convertidaDolarMoeda = document.getElementById('moedaDolarConvertida');
    let convertidaEuroMoeda = document.getElementById('moedaEuroConvertida');

    let todaMoedas = document.getElementById('total-todas-qtd-moedas-cofrinho');

    let resp = document.getElementById('resposta');
    let list = document.getElementById('list');


    //cor de fundo dos conteiners div
    convertidaRealMoeda.style.backgroundColor = "#FFA500";
    convertidaDolarMoeda.style.backgroundColor = "#008000";
    convertidaEuroMoeda.style.backgroundColor = "#FF7F50";

    //padding dos conteiners div
    convertidaRealMoeda.style.padding = "10px";
    convertidaDolarMoeda.style.padding = "10px";
    convertidaEuroMoeda.style.padding = "10px";

    convertidaRealMoeda.style.width = "30%";
    convertidaDolarMoeda.style.width = "30%";
    convertidaEuroMoeda.style.width = "30%";

    //resp
    resp.style.textAlign = 'center';
    resp.style.backgroundColor = '#054F77';
    resp.style.width = '200px';
    resp.style.color = '#fff';
    resp.style.margin = '10px auto 10px';
    resp.style.fontSize = '1.5rem';
    resp.style.borderRadius = '8px';

    todaMoedas.style.backgroundColor = `#35f`;

    list.style.width= '250px';
    list.style.backgroundColor = '#42e';
    list.style.margin = '20px auto 20px';
}

document.getElementById('btSomar').addEventListener('click', function calcularTotal() {
    let resp = document.querySelector('div.resposta');
    let list = document.querySelector('div.list');

    
  
})



