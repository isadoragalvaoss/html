function funcao1()
{
alert("Eu sou um alert!");
}

function funcao2()
{
alert("Adicionado ao carrinho!");
}

const $menu = document.querySelector('.menu')
const $botaoMenuOpen = document.querySelector('.botaoMenu_open')
const $botaoMenuClose = document.querySelector('.botaoMenu_close')

$botaoMenuOpen.addEventListener('click',function(){
	$menu.classList.add('menu_open')
})

$botaoMenuClose.addEventListener('click',function(){
	$menu.classList.remove('menu_open')
})