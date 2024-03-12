

let funcionario = [
	{nome:'Manuel'},
	{nome:'Stiven'},
	{nome:'Lopes'}
	];

let usuario = [
	{nome:'x',senha:"1234", tipo:'pv'},
	{nome:'Bento',senha:'1234', tipo:''},
	{nome:'Ardile',senha:'1234', tipo:'' },
	{nome:'Ardile',senha:'1234', tipo:'pv' }
	];
//Globalizar

var permissao_logado = localStorage.getItem('permissao_logado');

var urlAtual = window.location.href;
login();

function login(){
	if(localStorage.getItem('nome_logado')!=='null'){
		document.querySelector('div[h="canvasMenu"]').removeAttribute('hidden');
		document.querySelector('span[name="msg-error-log"]').setAttribute('hidden','');
		if(localStorage.getItem('tipo_usuario_logado')==='pv' && urlAtual.includes('pv.html')){
			divsMain('venda');
		}else if(!(localStorage.getItem('tipo_usuario_logado')==='pv') && urlAtual.includes('index.html')){
			divsMain('inicio');
		}else{			
			document.querySelector('span[name="msg-error-log"]').removeAttribute('hidden');
			document.querySelector('div[h="canvasMenu"]').setAttribute('hidden','');
		}
	}else{
		document.querySelector('span[name="msg-error-log"]').removeAttribute('hidden');
		document.querySelector('div[h="canvasMenu"]').setAttribute('hidden','');
		divsMain('login');
	}
}

function divsMain(argument) {
	document.querySelectorAll('main > div').forEach(elemento=>{
		elemento.style.display="none";
	})
	document.getElementById(argument).style.display="block"
}

document.querySelectorAll('#menuBTN a').forEach(elemento=>{
	elemento.addEventListener('click',event=>{
		divsMain(elemento.getAttribute('d'));
		exibirNaTabela(elemento.getAttribute('d'))

	})
})

document.querySelector('input[name="subLog"]').addEventListener('click',sub=>{
	var nome = document.querySelector('input[name="nomeUsuario"]').value;
	var senha = document.querySelector('input[name="senhaUsuario"]').value;
	usuario.forEach(u=>{
		if(u.nome===nome & u.senha===senha){
			localStorage.setItem('nome_logado',u.nome)
			localStorage.setItem('tipo_usuario_logado',u.tipo)
			login();
		}else{
			document.querySelector('span[name="msg-error-log"]').removeAttribute('hidden');
		}
	})

})

document.querySelector('button[btn="sair"]').addEventListener('click',event=>{
	localStorage.setItem('nome_logado','null')
	localStorage.setItem('tipo_usuario_logado','')
	document.querySelector('span[name="msg-error-log"]').innerHTML="Sessao terminada"
	login();
})