const button = document.querySelector('button#visualizar-personagens');
const nomeDoPersonagem = document.querySelector('#nome');
const Espécie = document.querySelector('espécie');
const Condição = document.querySelector('condição');


pegarPersonagem = () => {

    PegarPersonagem().then((data) => {

        document.querySelector('img#imagem-0').src = data[0].image;
        document.querySelector('img#imagem-1').src = data[1].image;
        document.querySelector('img#imagem-2').src = data[2].image;

        let mensagemAlt = "Imagem aleatória do personagem ";

        document.querySelector('img#imagem-0').alt = `${mensagemAlt} ${data[0].name}`;
        document.querySelector('img#imagem-1').alt =`${mensagemAlt} ${data[1].name}`;
        document.querySelector('img#imagem-2').alt = `${mensagemAlt} ${data[2].name}`;

        document.querySelector('p#nome-0').innerHTML = data[0].name;
        document.querySelector('p#nome-1').innerHTML = data[1].name;
        document.querySelector('p#nome-2').innerHTML = data[2].name;

        document.querySelector('p#especie-0').innerHTML = data[0].species;
        document.querySelector('p#especie-1').innerHTML = data[1].species;
        document.querySelector('p#especie-2').innerHTML = data[2].species;

        document.querySelector('p#condicao-0').innerHTML = data[0].status;
        document.querySelector('p#condicao-1').innerHTML = data[1].status;
        document.querySelector('p#condicao-2').innerHTML = data[2].status;
        // imagem.alt = data.name;
        // nomeDoPersonagem.innerHTML = data.name;
        // espécie.innerHTML = data.species;
        // condição.innerHTML = data.status;
        console.log(data);
    });
}

button.onclick = pegarPersonagem;