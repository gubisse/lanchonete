//=====================================================
//INICIALIZACAO DE VARIAVEIS
//=====================================================

var estoque = [
	{produto:'Vinagre', quantidade:100, precoCompra: 25, precoVenda:30, dataAt:'2024-01-20'},
	{produto:'Purficador', quantidade:120, precoCompra:200, precoVenda:210, dataAt:'2024-01-10'}
	];


var vendedor = [
	{nome:'Manuel',Telefone:'845103692'},
	{nome:'Manuel',Telefone:'845103692'}
	];

var caixas = [
	{caixa:'001'},
	{caixa:'002'},
	{caixa:'003'},
	{caixa:'004'}
	];

var vendas = [
	{caixa:'001', vendedor:'Manuel', dataVenda:'2024-03-10', vendidas:12, mzn:7845},
	{caixa:'001', vendedor:'Manuel', dataVenda:'2024-01-10', vendidas:12, mzn:7845},
	{caixa:'001', vendedor:'Manuel', dataVenda:'2024-01-20', vendidas:12, mzn:7845},
	{caixa:'003', vendedor:'Manuel', dataVenda:'2024-03-10', vendidas:12, mzn:2000},
	{caixa:'002', vendedor:'Manuel', dataVenda:'2024-03-20', vendidas:12, mzn:2052},
	{caixa:'002', vendedor:'Manuel', dataVenda:'2024-03-18', vendidas:12, mzn:3215},
	{caixa:'002', vendedor:'Manuel', dataVenda:'2024-03-05', vendidas:12, mzn:9000}

	];



//=====================================================
//ESTOQUE
//=====================================================

document.querySelectorAll('table button').forEach(elemento=>{
	elemento.addEventListener('click',event=>{
		if(elemento.name==='submitEstoque'){
			validarFormulario();
		}
	})
})




// Example starter JavaScript for disabling form submissions if there are invalid fields
function validarFormulario(){
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
				alert(form.id+" Nao esta prechido conforme")

			}else{
				event.preventDefault();
				console.log(form.id)
				if(form.id=="add-estoque-form"){
					var estoque = {
						produto: document.querySelector('input[name="nome-produto-estoque"]').value,
						quantidade: document.querySelector('input[name="qtdd-estoque"]').value,
						precoCompra: document.querySelector('input[name="preco-compra-estoque"]').value,
						precoVenda: document.querySelector('input[name="preco-venda-estoque"]').value,
						dataAt: document.querySelector('input[name="date-in-estoque"]').value
					}
					addEstoque(estoque);
				}
			}
		});
	});
}


document.getElementById('selectMes').addEventListener('input',event=>{
	exibirNaTabela('venda');
})

function exibirNaTabela(argument){
	console.log(argument)


	var tabela = document.getElementById('tabela-estoque');
	if(argument==='venda'){

		var totalVendas=0;

		let tabela = document.getElementById('tabela-venda');
		while (tabela.rows.length > 2) {
			tabela.deleteRow(2);
		}

		var selectMes = document.getElementById('selectMes');		
        var mesSelecionado = selectMes.value;

		// Filtra as vendas que correspondem à data desejada
		var vendasFiltradas = vendas.filter(function(venda) {
		    return venda.dataVenda.startsWith('2024-' + mesSelecionado);
		});

		// Variável para armazenar o total de vendas
		var totalVendas = 0;
		var quantidadeVendas = vendasFiltradas.length;

		// Itera sobre as vendas filtradas e as exibe na tabela
		vendasFiltradas.forEach(function(valor) {
		    // Cria uma nova linha na tabela
		    var row = tabela.insertRow();

		    // Insere as células para cada atributo da venda
		    row.insertCell(0).innerHTML = valor.vendedor;
		    row.insertCell(1).innerHTML = valor.caixa;
		    row.insertCell(2).innerHTML = valor.dataVenda;
		    row.insertCell(3).innerHTML = valor.vendidas;
		    row.insertCell(4).innerHTML = valor.mzn;

		    totalVendas += valor.mzn;
		});

		// Exibe o total de vendas na tabela
		var rowTotal = tabela.insertRow();
		rowTotal.insertCell(0).innerHTML = 'Total';
		rowTotal.insertCell(1).innerHTML = '';
		rowTotal.insertCell(2).innerHTML = '';
		rowTotal.insertCell(3).innerHTML = '';
		rowTotal.insertCell(4).innerHTML = totalVendas + " MZN";

		document.querySelector('span[name="total-todas-vendas"]').innerHTML=totalVendas;
		document.querySelector('span[name="quantidade-venda"]').innerHTML=quantidadeVendas;
		document.querySelector('span[name="quantidade-caixa"]').innerHTML=caixas.length;


	}else if(argument=='estoque'){
		document.querySelector('span[name="quatidade-estoque"]').innerHTML=estoque.length;
		// Obtém a referência da tabela

		// Remove todas as linhas existentes da tabela
		while (tabela.rows.length > 3) {
			tabela.deleteRow(3);
		}




		// Itera sobre a lista de valors
		estoque.forEach(function(valor) {
			// Cria uma nova linha na tabela
			var row = tabela.insertRow();
			

			// Insere as células para cada atributo da valor
			row.insertCell(0).innerHTML = valor.produto;
			row.insertCell(1).innerHTML = valor.quantidade;
			row.insertCell(2).innerHTML = valor.precoCompra;
			row.insertCell(3).innerHTML = valor.precoVenda;
			row.insertCell(4).innerHTML = valor.dataAt;

			var button = document.createElement('button');
			button.setAttribute('class','btn btn-secondary w-100')
			button.id=valor.produto;
			button.textContent="Mais";

			button.addEventListener('click',event=>{
				alert('clicou em: '+button.id)
			})
			row.insertCell(5).appendChild(button);



		});

		// Referenciamos o elemento select
		let listPVDview = document.querySelector('#list-estoque-view');
		// Remover todos os elementos, exceto o primeiro
		while (listPVDview.options.length > 1) {
			listPVDview.remove(1); // remove o segundo elemento em diante
		}
		// Iteramos sobre a lista de valores
		estoque.forEach(function(valor) {
			// Criamos um novo elemento option para adicionar ao primeiro select
			var optionAddEstoque = document.createElement("option");
			optionAddEstoque.text = valor.produto;

			// Adicionamos as opções aos selects correspondentes
			listPVDview.add(optionAddEstoque);
		});




	}
}


function addEstoque(argument) {
	estoque.push(argument)
	exibirNaTabela('estoque')
}

//=====================================================
//VENDA
//=====================================================