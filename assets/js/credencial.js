

let funcionario = [
	{nome:'Manuel'},
	{nome:'Stiven'},
	{nome:'Lopes'}
	];

let usuario = [
	{nome:'x',senha:"1234"},
	{nome:'Bento',senha:'1234' },
	{nome:'Ardile',senha:'1234' }
	];

divsMain('login');

function divsMain(argument) {
	document.querySelectorAll('main > div').forEach(elemento=>{
		elemento.style.display="none";
	})
	document.getElementById(argument).style.display="block"
}

document.querySelectorAll('#menuBTN a').forEach(li=>{
	li.style.display="block";
	console.log(li)
})

document.querySelector('input[name="subLog"]').addEventListener('click',sub=>{
	var nome = document.querySelector('input[name="nomeUsuario"]').value;
	var senha = document.querySelector('input[name="senhaUsuario"]').value;
	usuario.forEach(u=>{
		if(u.nome===nome & u.senha===senha){
			document.querySelector('div[h="canvasMenu"]').removeAttribute('hidden');
			document.querySelector('span[name="msg-error-log"]').setAttribute('hidden','');
			divsMain('inicio')
		}else{
			document.querySelector('span[name="msg-error-log"]').removeAttribute('hidden');
		}
	})

})