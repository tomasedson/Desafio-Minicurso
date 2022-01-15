const button = document.querySelector('button#visualizar-personagens');
const nomeDoPersonagem = document.querySelector('#nome');
const Espécie = document.querySelector('espécie');
const Condição = document.querySelector('condição');


pegarPersonagem = () => {

    PegarPersonagem().then((data) => {

        let mensagemAlt = "Imagem aleatória do personagem ";

        for (let index = 0; index < data.length; index++) {
            
            document.querySelector('img#imagem-' + index).src = data[index].image;
            document.querySelector('img#imagem-' + index).alt = `${mensagemAlt} ${data[index].name}`;
            document.querySelector('p#nome-' + index).innerHTML = data[index].name;
            document.querySelector('p#especie-' + index).innerHTML = data[index].species;
            document.querySelector('p#condicao-'+index).innerHTML = data[index].status;
            
        }
    });
}

button.onclick = pegarPersonagem;