const button = document.querySelector('button#visualizar-personagens');
const nomeDoPersonagem = document.querySelector('#nome');
const Espécie = document.querySelector('espécie');
const Condição = document.querySelector('condição');
const mensagemAlt = "Imagem aleatória do personagem ";

popularPersonagem = (index, data) => {
    document.querySelector('img#imagem-' + index).src = data.image;
    document.querySelector('img#imagem-' + index).alt = `${mensagemAlt} ${data.name}`;
    document.querySelector('p#nome-' + index).innerHTML = data.name;
    document.querySelector('p#especie-' + index).innerHTML = data.species;
    document.querySelector('p#condicao-'+index).innerHTML = data.status;
}

pegarPersonagem = () => {

    PegarPersonagem().then((data) => {

        for (let index = 0; index < data.length; index++) {
            popularPersonagem(index, data[index]);
        }
        
    });
}

button.onclick = pegarPersonagem;