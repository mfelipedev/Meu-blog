
// Janela

document.getElementById('abrirJanela').addEventListener('click', function() {
document.getElementById('janelaModal').style.display = 'block';
});

function fecharJanela() {
    document.getElementById('janelaModal').style.display = 'none';
}

// Menu 

function menuShow() {
    let menuMobile = document.querySelector('.nav-list');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        console.log("Fechando menu");
        document.querySelector('.btnmenu').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        console.log("Abrindo menu");
        document.querySelector('.btnmenu').src = "img/close_white_36dp.svg";
    }
}