//Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Gera números aleatórios inclusive o itens informados no parâmetro
GerarValorAleatorioDeFormaInclusiva = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

GerarTresValorAleatoriosConcatenados = () => {
    return [GerarValorAleatorioDeFormaInclusiva(1, 826), GerarValorAleatorioDeFormaInclusiva(1, 826), GerarValorAleatorioDeFormaInclusiva(1, 826)].join(",");
}

PegarPersonagem = () => {

    let consulta = GerarTresValorAleatoriosConcatenados();

    return fetch(`https://rickandmortyapi.com/api/character/[${consulta}]`, {
        method: 'GET',
        Headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json());
}