const realValor = 1;
const dolarValor = 4;
const euroValor = 6;
//contadores para cada vez que uma moeda for add ao cofre
let contadorReal = 0;
let contadorDolar = 0;
let contadorEuro = 0;

const cofrinho = [];

document.getElementById('btAdicionar').addEventListener('click', function addMoedaCofrinho() {
    let tipoMoeda = document.getElementsByName('moeda');
    let invalorMoeda = document.getElementById('valorMoeda');

    let valorMoeda = Number(invalorMoeda.value);

    let resp = document.querySelector('div.resposta');
    let totalQtdMoedas = document.querySelector('div.total-todas-qtd-moedas-cofrinho');
    

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
            
            
            let o = 0;
            for (let i = 0; i < cofrinho.length; i++) {
                o += cofrinho[i].moedaValor;
            }
            convertidaRealMoeda.innerHTML = `<p>Moeda adicionada = ${o} Reais </p>  `;
            
        } else if (tipoMoeda[1].checked) {
            contadorDolar++;
            
            
            let oui = 0;
            for (let i = 0; i < cofrinho.length; i++) {
                oui += cofrinho[i];
            }
            convertidaDolarMoeda.innerHTML = `<p>Moeda adicionada = ${oui} Dólares </p>  `;

        } else {
            contadorEuro++;
  
            let oi = 0;
            for (let i = 0; i < cofrinho.length; i++) {
                oi += cofrinho[i];
            }
            convertidaEuroMoeda.innerHTML = `<p>Moeda adicionada = ${oi} Euros </p>`;


        }
        cofrinho.push({ moedaValor: valorMoeda });
    
        //listarMoedas(euro, real, dolar);
        
        //função que ajusta o estilo da pagina via js
        styleResposta();
        
        //Total de moedas no cofrinho
        totalQtdMoedas.innerHTML = `${cofrinho.length}`;
    }

})
//função para validar input 
function validacao(y) {
    if (y == '') {
        return true;
    }
}
//função para estilo da página
function styleResposta() {
    let convertidaRealMoeda = document.getElementById('moedaRealConvertida');
    let convertidaDolarMoeda = document.getElementById('moedaDolarConvertida');
    let convertidaEuroMoeda = document.getElementById('moedaEuroConvertida');
    let resp = document.getElementById('resposta');


    //cor de fundo dos conteiners div
    convertidaRealMoeda.style.backgroundColor = "#FFA500";
    convertidaDolarMoeda.style.backgroundColor = "#008000";
    convertidaEuroMoeda.style.backgroundColor = "#FF7F50";

    //padding dos conteiners div
    convertidaRealMoeda.style.padding = "10px";
    convertidaDolarMoeda.style.padding = "10px";
    convertidaEuroMoeda.style.padding = "10px";

    //resp
    resp.style.textAlign = 'center';
    resp.style.backgroundColor = '#054F77';
    resp.style.width = '200px';
    resp.style.color = '#fff';
    resp.style.margin = '10px auto 10px';
    resp.style.fontSize = '1.5rem';
    resp.style.borderRadius = '8px';

}

document.getElementById('btSomar').addEventListener('click', function calcularTotal() {
    let resp = document.querySelector('div.resposta');
    let list = document.querySelector('div.list');

    if (cofrinho.length == 0) {
        return resp.innerHTML = `Não há moedas no cofrinho`;
    } else {
        let listEuroMoeda = 0;
        for (let i = 0; i < euro.length; i++) {
            listEuroMoeda += cofrinho[i].euro * euroValor;
        }

        let listDolarMoeda = 0;
        for (let i = 0; i < dolar.length; i++) {
            listDolarMoeda += cofrinho[i].dolar * dolarValor;
        }

        let listRealMoeda = 0;
        for (let i = 0; i < real.length; i++) {
            listRealMoeda += cofrinho[i].euro;
        }

        list.innerHTML = `${listEuroMoeda + listDolarMoeda + listRealMoeda}`;
    }

})

function listarMoedas(y, x, u) {
    let resp = document.querySelector('div.resposta');
    let list = document.querySelector('div.list');

    if (cofrinho.length == 0) {
        return resp.innerHTML = `Não há moedas no cofrinho`;
    } else {
        let listEuroMoeda = 0;
        for (let i = 0; i < cofrinho.length; i++) {
            listEuroMoeda += cofrinho[i].y;
        }

        let listDolarMoeda = 0;
        for (let i = 0; i < cofrinho.length; i++) {
            listDolarMoeda += cofrinho[i].x;
        }

        let listRealMoeda = 0;
        for (let i = 0; i < cofrinho.length; i++) {
            listRealMoeda += cofrinho[i].u;
        }

        list.innerHTML = `${listEuroMoeda} ${listDolarMoeda} ${listRealMoeda}`;
    }

}


