const setaEsquerda = document.querySelector('#seta-esquerda');
const setaDireita = document.querySelector('#seta-direita');
const banner = document.querySelector('#banner');


const imagens = [
    "/imagens/Desktop/cabecalho/Banner carousel 1 _ 1440 (1).png",
    "/imagens/Desktop/cabecalho/Banner carousel 2 _ 1440 (1).png",
    "/imagens/Desktop/cabecalho/Banner carousel 3 _ 1440 (1).png"
];
let index = 0;

function atualizarBanner() {
    banner.src = imagens[index];
}

setaEsquerda.addEventListener("click", () => {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarBanner();
});

setaDireita.addEventListener("click", () => {
    index = (index + 1) % imagens.length;
    atualizarBanner();
});