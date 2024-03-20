//===================================================
//INICIALIZAR TODAS AS VARIAVEIS PARA O CONTROLE DE VENDA
//===================================================

//Pesquisar o que ee necessario
//-------------------------------,Os elemento do formulario de pesquisa

document.getElementById('panelListaProdutoPesquisado').style.display="block"
document.getElementById('formCaixaVenda').style.display="block"
document.getElementById('panel-produtos-para-vender').style.display="block"
document.getElementById('formPanelPagamento').style.display="none"
document.querySelector('button[name="btnVoltarParaPesquisarProduto"]').style.display="none"

document.querySelector('button[name="btnVoltarParaPesquisarProduto"]').addEventListener('click',event=>{
	document.getElementById('panelListaProdutoPesquisado').style.display="block"
	document.getElementById('formCaixaVenda').style.display="block"
	document.getElementById('panel-produtos-para-vender').style.display="block"
	document.getElementById('formPanelPagamento').style.display="none"

	document.querySelectorAll('#panel-produtos-para-vender button').forEach(valor=>{
		valor.style.display="block";
		if(valor.name==='btnVoltarParaPesquisarProduto'){
			document.querySelector('button[name="btnVoltarParaPesquisarProduto"]').style.display="none"
		}
	})
})


var panelProdutosPesquisadosParaVender = document.getElementById('panel-produtos-pesquisado-para-vender');
var panelProdutosParaVender = document.getElementById('panel-produtos-para-vender');

var campoPesquisaProduto = document.querySelector('input[name="produtoPVD"]');
var campoPrecoUnitario = document.querySelector('input[name="precoUnitarioPVD"]');
var campoQuantidade = document.querySelector('input[name="quantidadePVD"]');

var valorPesquisaProduto = "";
var valorPrecoUnitario = 0;
var valorQuantidade = 0;

var btnCampoPesquisarProduto = document.querySelector('span[name="btnCampoPesquisarProduto"]');

var listaProdutosPesquisados = [];
var listaProdutosRequisitados = [];
//----------------------------------------------------------------------
panelProdutosPesquisadosParaVender.style.display = "none";

campoPesquisaProduto.addEventListener('input',event=>{
	console.log(event.target.value);

	if(!(event.target.value==='')){

		estoque.forEach(valor=>{
			// Encontrar o produto correspondente no estoque
	        if(valor.produto.toLowerCase().includes(event.target.value.toLowerCase())){
	        	console.log(`Produto encontrado ${valor.produto}`)
	        	listaProdutosPesquisados.push(valor);
	        	if(!(valor.produto===event.target.value)){
	        		campoPrecoUnitario.value='';
	        	}else{
	        		campoPrecoUnitario.value=valor.precoVenda;
	        	}
				panelProdutosPesquisadosParaVender.style.display = "block";
	        } else {
	            //Produto ${venda.produto} não encontrado no estoque.
	        }
		})

		var tabela1 = document.getElementById('lista');
		while (tabela1.rows.length > 1) {
			tabela1.deleteRow(1);
		}

		// Itera sobre as vendas filtradas e as exibe na tabela
		listaProdutosPesquisados.forEach(function(valor) {
		    // Cria uma nova linha na tabela
		    var row = tabela1.insertRow();

		    // Insere as células para cada atributo da venda
		    row.insertCell(0).innerHTML = valor.produto;
		    row.insertCell(1).innerHTML = valor.precoVenda;
		    row.insertCell(2).innerHTML = valor.quantidade;	

			// Adiciona um ouvinte de evento de clique à linha
			row.addEventListener('click', function(event) {

				 // Obtém a célula 0 da linha clicada
			    var valorCelula = event.target.parentNode.cells[0].innerHTML;

			    // Aqui você pode usar o valorCelula conforme necessário
			    console.log('O valor da célula 0 é: ' + valorCelula); // Exemplo: imprime o valor da célula 0
			    campoPesquisaProduto.value=valorCelula;
			    estoque.forEach(v=>{
			    	if(campoPesquisaProduto.value===v.produto){
			    		campoPrecoUnitario.value = v.precoVenda;
			    		btnCampoPesquisarProduto.innerHTML = 'Liberar';
			    		campoPesquisaProduto.setAttribute('readonly','')
			    		campoPesquisaProduto.classList.add('bg-secondary','text-white')
			    	}
			    })
			   
			}); 
		    
		});

		listaProdutosPesquisados=[];

	}else{
		//Caso do campo estar vazio

	}


})

btnCampoPesquisarProduto.addEventListener('click',event=>{
	event.target.innerHTML="Auto"
	campoPesquisaProduto.removeAttribute('readonly');
	campoPesquisaProduto.classList.remove('bg-secondary','text-white')
})

document.querySelector('#formCaixaVenda button[type="submit"]').addEventListener('click',event=>{

	if(!(campoPesquisaProduto.value==='' || campoQuantidade.value==='' || campoQuantidade.value===0 || campoPrecoUnitario.value==='')){
		panelProdutosPesquisadosParaVender.style.display = "none";
		var inputs = document.querySelector('#formCaixaVenda').getElementsByTagName('input');

		var precoT = campoPrecoUnitario.value*campoQuantidade.value;
		let produtoNecessitado = {
			produto: campoPesquisaProduto.value,
			precoUnitario: campoPrecoUnitario.value,
			quantidade: campoQuantidade.value,
			precoTotal: precoT
		};
		listaProdutosRequisitados.push(produtoNecessitado);

		// Percorre todos os inputs e define seus valores como vazios
		for (var i = 0; i < inputs.length; i++) {
		    inputs[i].value = '';
		}
		
		btnCampoPesquisarProduto.innerHTML="Auto"
		campoPesquisaProduto.removeAttribute('readonly');
		campoPesquisaProduto.classList.remove('bg-secondary','text-white')



		exibirNaTabela('produto-requisitados','','')


	}else{
		alert('Error')
	}



})


document.querySelector('#formPanelPagamento button[type="submit"]').addEventListener('click',event=>{

	// Criar um mapa onde as chaves são os nomes dos produtos no estoque
	const mapaEstoque = new Map();
	estoque.forEach(produto => {
	    mapaEstoque.set(produto.produto, produto);
	});

	// Iterar sobre os produtos requisitados e modificar o estoque
	listaProdutosRequisitados.forEach(produtoRequisitado => {
	    const produtoEstoque = mapaEstoque.get(produtoRequisitado.produto);
	    if (produtoEstoque) {
	        produtoEstoque.quantidade -= produtoRequisitado.quantidade;
	        if (produtoEstoque.quantidade < 0) {
	            console.log('A quantidade em estoque ficou negativa para o produto:', produtoEstoque.produto);
	            // Lógica para lidar com quantidade negativa, se necessário
	        }
	    }
	});

	// Converter o mapa de volta para um array
	estoque = Array.from(mapaEstoque.values());

	document.querySelectorAll('#formPanelPagamento input').forEach(valor=>{
		valor.value='';
	})


	//adicionar na tabela venda

	//esvaziar a lista produtosrequeridos
	listaProdutosRequisitados = [];

	document.getElementById('panelListaProdutoPesquisado').style.display="block"
	document.getElementById('formCaixaVenda').style.display="block"
	document.getElementById('panel-produtos-para-vender').style.display="block"
	document.getElementById('formPanelPagamento').style.display="none"
	document.querySelector('button[name="btnVoltarParaPesquisarProduto"]').style.display="none"
	
	exibirNaTabela('produto-requisitados','','')

	
})

//Controlar a quantidade a ser introduzida
campoQuantidade.addEventListener('input',event=>{
	estoque.forEach(valor=>{
		if(valor.produto===campoPesquisaProduto.value){
			if(event.target.value>valor.quantidade || event.target.value==='' || event.target.value==="0"){
				document.querySelector('#formCaixaVenda button[type="submit"]').style.display="none"				
				document.querySelector('#formCaixaVenda span[name="quantidadeNula"]').style.display="block"
			}else{
				document.querySelector('#formCaixaVenda button[type="submit"]').style.display="block"				
				document.querySelector('#formCaixaVenda span[name="quantidadeNula"]').style.display="none"				
			}
		}	
		
	})
})

	