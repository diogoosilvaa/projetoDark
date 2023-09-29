
const btnModoEscuro = document.getElementById('darkMode')

console.log(btnModoEscuro)

function modoEscuro (){
    document.body.classList.toggle('escuro')
}

btnModoEscuro.addEventListener('change', modoEscuro)