import { conectaApi } from "./conectaApi";

const formulario = document.querySelector("data-formulario");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("data-imagem").value;
    const data = document.querySelector("data-data").value;
    const titulo = document.querySelector("data-titulo").value;
    const descricao = Math.floor(Math.random()*10).toString();

    await conectaApi.criarVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener("submit", evento => criarVideo(evento));
