const imagem = document.querySelector('img');
const button = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const Espécie = document.querySelector('espécie');
const Condição = document.querySelector('condição');

pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`,  {
        method:'GET' ,
        Headers: {
           Accept: 'application/json',
           "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML = data.name;
        espécie.innerHTML = data.species;
        condição.innerHTML = data.status;
    });
}

button.onclick = pegarPersonagem;