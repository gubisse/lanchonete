/*
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
		exibirNaTabela(elemento.getAttribute('d'),'ano','2024')

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
*/
var caminho = window.location.pathname;
console.log("O do "+caminho);

function divsNoMain(id){
	document.querySelectorAll('main > div').forEach(elemento=>{
		elemento.style.display="none"
	})
	document.querySelector(`main > #${id}`).style.display="block";
	if(id==='login'){		
		document.querySelector('nav').style.display="none";
	}else{
		document.querySelector('nav').style.display="block";
	}
}

if(caminho.includes("index.html")){

}else if(caminho.includes("pv.html")){

}else if(caminho.includes("reserva.html")){

	if(localStorage.getItem('credencial')!=='null'){
		loginCliente(JSON.parse(localStorage.getItem('credencial')));
	}else{		
		divsNoMain('login');
	}

	//Conta de vezes para fazer a operacao devido o loop que ocore exige a manipulcao
	var conta = 1;

	//=============================================================
	//Escutamos todos os buttons que estao na reserva independentes
	//=============================================================
	document.querySelectorAll('button').forEach(elemento=>{
		conta = 1;
		elemento.addEventListener('click',event=>{
			if(elemento.name==='btn_cancelar_is'){
				divsPanelCredencial(elemento.name+'btnPanelCredencial')
			}else if(!(elemento.name.includes('btnPanelCredencial'))){
				divsPanelCredencial(elemento.name)
			}
		})
	})
	document.querySelector('#sair button').addEventListener('click',event=>{
		logoutCliente()
		// Recarrega a página atual do servidor, ignorando o cache do navegador
		//location.reload();

	})

	//=============================================================
	//Escutamos todos os a button que estao na reserva independentes
	//=============================================================

	document.querySelectorAll('a').forEach(elemento=>{
		elemento.addEventListener('click',event=>{			
			divsNoMain(elemento.getAttribute('d'))
		})
	})


	//=============================================================
	// Funcao pra encamsular as divs credencial
	//=============================================================
	function divsPanelCredencial(argument) {
		if(argument.includes('btnPanelCredencial')){
			document.querySelector('div[name="btns_panel_credencial"]').removeAttribute('hidden')
			document.querySelector('div[name="panel_credencial"]').setAttribute('hidden','')
		}else if(argument==='alterarTema'){
		}else{
			document.querySelector('div[name="panel_credencial"]').removeAttribute('hidden')
			document.querySelectorAll('div[name="panel_credencial"] > div').forEach(elemento=>{
				elemento.setAttribute('hidden','')
			})
			document.getElementById(argument).removeAttribute('hidden')
			document.querySelector('div[name="btns_panel_credencial"]').setAttribute('hidden','')
		}
	}


	//====================================================================
	// Inicializar as varias de acordo com os valores que obter dos inputs
	//====================================================================

	//Obter todos elementos necessarios para a criacao de Clientes (reserva)
	//------------------------------------------------------------------------

	var nomecc = document.querySelector('#panel_criar_conta input[name="nomecc"]');
	var apelidocc = document.querySelector('#panel_criar_conta input[name="apelidocc"]');
	var telefonecc = document.querySelector('#panel_criar_conta input[name="telefonecc"]');
	var moradacc = document.querySelector('#panel_criar_conta input[name="moradacc"]');

	var btnSubmitCC = document.querySelector('#panel_criar_conta input[type="submit"]');
	btnSubmitCC.addEventListener('click',event=>{
		

		var dadosCC = {
			nome: nomecc.value,
			apelido: apelidocc.value, 
			telefone: telefonecc.value, 
			morada: moradacc.value
		}
		validarFormulario('panel_criar_conta','addCliente',dadosCC)
		//addCliente(dados);

	})

	//Iniciar sessao como reserva
	//-----------------------------

	var nomeis = document.querySelector('#panel_login input[name="nomeis"]');
	var senhais = document.querySelector('#panel_login input[name="senhais"]');

	var btnSubmitIS = document.querySelector('#panel_login input[type="submit"]');
	btnSubmitIS.addEventListener('click',event=>{
		

		var dadosIS = {
			nome: nomeis.value,
			senha: senhais.value 
		}
		validarFormulario('panel_login','loginCliente',dadosIS)

	})

	function addCliente(dados){
		clientes.push(dados);
		console.log(clientes)
	}
	function loginCliente(dados){
		clientes.forEach(valor=>{
			if(valor.nome===dados.nome && valor.senha===dados.senha){
				divsNoMain('inicio');
				localStorage.setItem('credencial', JSON.stringify(dados));
				return;
			}
		});
	}
	function logoutCliente(){		
		localStorage.setItem('credencial','null');
		divsNoMain('login');
	}



	//===============================================================================
	// Funcao que valida e envia os dados para nas suas devidas funcoes dinamicamente
	//===============================================================================

	function validarFormulario(nomeFormulario,nomeFunction,dadosArray){
		// Seletor para todos os inputs que você deseja verificar
		var inputs = document.querySelectorAll(`#${nomeFormulario} input`);

		// Converter NodeList em um array para usar forEach
		var inputsArray = Array.from(inputs);

		// Verificar se todos os inputs estão preenchidos
		var todosPreenchidos = inputsArray.every(function(input) {
		    return input.value.trim() !== ''; // Verifica se o valor do input não está vazio
		});



		inputs.forEach(elemento=>{
			// Se todos os inputs estiverem preenchidos, faça alguma coisa
			if (todosPreenchidos) {
			    // Faça algo aqui, por exemplo:
			    console.log('Todos os inputs estão preenchidos!');
			    document.querySelector(`#${nomeFormulario} input[name="${elemento.name}"]`).classList.remove('border','border-danger')
			    //manda os dados para

			    
			    if(conta===1){
			    	// Chamada dinâmica da função com base no nome da variável
				    window[nomeFunction](dadosArray);
				    conta++;
				    return

				}
			} else {
			    console.log('Preencha todos os campos!');
				console.log(elemento.value)
				if(elemento.value===''){
					document.querySelector(`#${nomeFormulario} input[name="${elemento.name}"]`).classList.add('border','border-danger')
				}else{				
					document.querySelector(`#${nomeFormulario} input[name="${elemento.name}"]`).classList.remove('border','border-danger')				
				}
			}
		})
	}

}