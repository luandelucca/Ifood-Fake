function toggleMenu() {
    tratarMenu();
    tratarLinhas();
    removerScrollBody();
}

function tratarMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function tratarLinhas() {
    const linhas = document.getElementsByClassName('linha');
    for (let index = 0; index < linhas.length; index++) {
        linhas[index].classList.toggle('active');
    }
}

function removerScrollBody() {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('remover-scroll');
}