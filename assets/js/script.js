
//script searchpesquisa
const divsearch = document.querySelector('.search-content');
const search = document.querySelector('.search');
const imgsearch = document.querySelector('.logo-pesquisa');
document.addEventListener("click", function (event) {
    // Verifica se o elemento clicado não é a div em questão ou um de seus filhos
    if (event.target != divsearch && !divsearch.contains(event.target)) {
        divsearch.style.width = "135px";
        divsearch.style.background = "#84848476";
        imgsearch.style.filter = "invert(100%)";
    }
});
function clicarsearch() {
    if (divsearch.style.width === "" || divsearch.style.width === "135px") {
        divsearch.style.width = "220px";
        divsearch.style.background = "#fff";
        search.style.cssText = "color: black";
        imgsearch.style.filter = "invert(50%)";
    }

}

//script menu lateral
const minhaDiv = document.querySelector('.nav-menu');
const abrirBotao = document.querySelector('.button-menu');
const background = document.querySelector('#background');

abrirBotao.addEventListener("click", function () {
    if (minhaDiv.style.transform === "" || minhaDiv.style.transform === "translate(-272px)") {
        minhaDiv.style.transform = "translate(0)";
        background.style.display = "block";
        document.body.style.userSelect = 'none'; // impede a seleção de elementos
        document.body.style.mozUserSelect = 'none'; // para navegadores Firefox
        document.body.style.msUserSelect = 'none'; // para navegadores Microsoft Edge
        document.body.style.overflowY = 'hidden';
    } else {
        minhaDiv.style.transform = "translate(-272px)";

    }

});
//script para fechar o menu
function fecharmenu() {
    minhaDiv.style.transform = "translate(-272px)";
    background.style.display = "none";
    document.body.style.userSelect = ''; // impede a seleção de elementos
    document.body.style.mozUserSelect = ''; // para navegadores Firefox
    document.body.style.msUserSelect = ''; // para navegadores Microsoft Edge
    document.body.style.overflowY = '';
}


//script para o video

function sumirtexto(id){
    const containerTexto = document.querySelector('.container-textvideo' + id);
    containerTexto.style.display = 'none';
    
}
function aparecertexto(id){
    const containerTexto = document.querySelector('.container-textvideo' + id);
    containerTexto.style.display = 'block';
}