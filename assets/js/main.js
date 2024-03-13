//=====================================================
//INICIALIZACAO DE VARIAVEIS
//=====================================================

var estoque = [
	{produto:'Vinagre', quantidade:50, precoCompra: 25, precoVenda:30, dataAt:'2024-01-20'},
	{produto:'Banana', quantidade:90, precoCompra:2, precoVenda:4, dataAt:'2024-01-10'},
	{produto:'Ananas', quantidade:100, precoCompra: 30, precoVenda:35, dataAt:'2024-01-20'},
	{produto:'Goiaba', quantidade:120, precoCompra:5, precoVenda:10, dataAt:'2024-01-10'},
	{produto:'Tomate', quantidade:800, precoCompra: 4, precoVenda:8, dataAt:'2024-01-20'},
	{produto:'Laranja', quantidade:150, precoCompra:20, precoVenda:30, dataAt:'2024-01-10'},
	{produto:'Abacaxi', quantidade:78, precoCompra: 50, precoVenda:60, dataAt:'2024-01-20'},
	{produto:'Purficador', quantidade:900, precoCompra:200, precoVenda:210, dataAt:'2024-01-10'}
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
	{caixa:'001', vendedor:'Lorgat', produto:'Ananas', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2022-02-22'},
	{caixa:'001', vendedor:'Fungai', produto:'Abacaxi', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2022-03-10'},
	{caixa:'001', vendedor:'Manuel', produto:'Banana', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2023-01-11'},
	{caixa:'003', vendedor:'Venancio', produto:'Goiaba', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2024-04-10'},
	{caixa:'002', vendedor:'Albertinho', produto:'Tomate', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2020-07-10'},
	{caixa:'004', vendedor:'Bernardo', produto:'Banana', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2021-02-10'},
	{caixa:'002', vendedor:'Chanaka', produto:'Laranja', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2022-06-15'},
	{caixa:'002', vendedor:'John', produto:'Laranja', vendidas:3, mznPagar:0, manPago:0, dataVenda:'2023-04-10'},
	{caixa:'002', vendedor:'Joana', produto:'Laranja', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2023-03-19'},
	{caixa:'002', vendedor:'Joao', produto:'Laranja', vendidas:5, mznPagar:0, manPago:0, dataVenda:'2023-03-19'}

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

function controlVendas(){
    // Controlar a venda de modo que os cálculos sejam bem feitos
    vendas.forEach(venda => {
        // Encontrar o produto correspondente no estoque
        const produtoEstoque = estoque.find(produto => produto.produto === venda.produto);
        if (produtoEstoque) {
            // Calcular o valor total a pagar
            const valorTotal = produtoEstoque.precoVenda * venda.vendidas;
            // Atualizar o valor de mznPagar na venda
            venda.mznPagar = valorTotal;
        } else {
            console.log(`Produto ${venda.produto} não encontrado no estoque.`);
        }
    });
}
function getMonthName(month) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return months[month - 1];
}


function exibirNaTabela(argument){
	console.log(argument)


	var tabela = document.getElementById('tabela-estoque');
	if(argument==='venda'){

	controlVendas();

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
		    var vendidasCell = row.insertCell(3);
		    vendidasCell.innerHTML = valor.vendidas;
		    vendidasCell.setAttribute('class','btn btn-secondary w-100')
		    vendidasCell.addEventListener('click', function() {
		        alert('Cliquei na célula de vendidas para ' + valor.vendedor);
		        // Aqui você pode adicionar a lógica que deseja executar ao clicar na célula
		    });
		    row.insertCell(4).innerHTML = valor.mznPagar;

		    totalVendas += valor.mznPagar;
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

		// Extrair anos únicos das datas de venda
		var anos = [];
		vendas.forEach(function(venda) {
		    var ano = new Date(venda.dataVenda).getFullYear();
		    if (!anos.includes(ano)) {
		        anos.push(ano);
		    }
		});

		// Ordenar os anos em ordem decrescente
		anos.sort((a, b) => b - a);

		// Selecionar o elemento select
		var selectAno = document.getElementById('list-ano-view-celular');

		// Preencher o menu suspenso com os anos
		anos.forEach(function(ano) {
		    var option = document.createElement('option');
		    option.text = ano;
		    option.value = ano;
		    selectAno.add(option);
		});

		// Adicionar evento de input ao seletor de ano
		selectAno.addEventListener('input', function(event) {
		    var anoSelecionado = parseInt(event.target.value);
		    
		    // Extrair meses únicos das datas de venda para o ano selecionado
		    var meses = [];
		    vendas.forEach(function(venda) {
		        var dataVenda = new Date(venda.dataVenda);
		        if (dataVenda.getFullYear() === anoSelecionado) {
		            var mes = dataVenda.getMonth() + 1;
		            if (!meses.includes(mes)) {
		                meses.push(mes);
		            }
		        }
		    });

		    // Ordenar os meses
		    meses.sort((a, b) => a - b);

		    // Selecionar o elemento select dos meses
		    var selectMes = document.getElementById('list-mes-view-celular');
			while (selectMes.options.length > 1) {
				selectMes.remove(1); // remove o segundo elemento em diante
			}
		    // Preencher o menu suspenso com os meses
		    meses.forEach(function(mes) {
		        var option = document.createElement('option');
		        option.text = getMonthName(mes);
		        option.value = mes;
		        selectMes.add(option);
		    });

		    atualizarSelectProduto('ano',this.value,'','')
		});
		// Adicionar evento de input ao seletor de ano
		document.getElementById('list-mes-view-celular').addEventListener('input', function(event) {


		    var anoSelecionado = parseInt(selectAno.value); // Converter para número inteiro
		    // Extrair datas únicas das vendas para o ano e mês selecionados
		    var datas = [];
		    vendas.forEach(venda=>{
		        var dataVenda = new Date(venda.dataVenda);
		        if (dataVenda.getFullYear() === anoSelecionado && dataVenda.getMonth() + 1 === parseInt(this.value)) { // Converter para número inteiro
		            var dataFormatada = dataVenda.toISOString().split('T')[0]; // Formatar a data para 'YYYY-MM-DD'
		            if (!datas.includes(dataFormatada)) {
		                datas.push(dataFormatada);
		            }
		        }
		        
		    });

		    // Ordenar as datas
		    datas.sort();

		    // Selecionar o elemento select da data
		    var selectData = document.getElementById('list-data-view-celular');

			while (selectData.options.length > 1) {
				selectData.remove(1); // remove o segundo elemento em diante
			}
			// Preencher o menu suspenso com as datas
			datas.forEach(function(data) {
			    var dataForm = new Date(data);
			    var option = document.createElement('option');
			    option.text = dataForm.getDate(); // ou option.text = dataForm.toISOString().split('T')[0];
			    option.value = data;
			    selectData.add(option);
			});
			if(this.value===''){
			    atualizarSelectProduto('ano',selectAno.value,'','')

			}else{
			    atualizarSelectProduto('mes','',this.value,'')
			}

		});

		// Adicionar evento de input ao seletor de data
		document.getElementById('list-data-view-celular').addEventListener('input', function() {

		    atualizarSelectProduto('data','','',this.value)
		    
		});





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

function atualizarSelectProduto(argument,ano,mes,data) {

	// Referenciamos o elemento select
	let lvvc = document.querySelector('#list-venda-view-celular');
	while (lvvc.options.length > 1) {
		lvvc.remove(1); // remove o segundo elemento em diante
	}

	if(argument==='ano'){

		var dataSelecionada = new Date(ano);

	    // Filtrar os produtos que correspondem à data selecionada
	    var produtosData = vendas.filter(function(venda) {
	        var dataVenda = new Date(venda.dataVenda);
	        return dataVenda.getFullYear() === dataSelecionada.getFullYear();
	    });

	    // Adicionar os produtos ao seletor de produtos
	    produtosData.forEach(function(venda) {
	        var option = document.createElement('option');
	        option.text = venda.produto;
	        option.value = venda.produto;
	        lvvc.add(option);
	    });

	}else if(argument==='mes'){
		var dataSelecionada = new Date(mes);

	    // Filtrar os produtos que correspondem à data selecionada
	    var produtosData = vendas.filter(function(venda) {
	        var dataVenda = new Date(venda.dataVenda);
	        return dataVenda.getMonth() === dataSelecionada.getMonth();
	    });

	    // Adicionar os produtos ao seletor de produtos
	    produtosData.forEach(function(venda) {
	        var option = document.createElement('option');
	        option.text = venda.produto;
	        option.value = venda.produto;
	        lvvc.add(option);
	    });

	}else if(argument==='data'){
		var dataSelecionada = new Date(data);

	    // Filtrar os produtos que correspondem à data selecionada
	    var produtosData = vendas.filter(function(venda) {
	        var dataVenda = new Date(venda.dataVenda);
	        return dataVenda.getFullYear() === dataSelecionada.getFullYear() &&
	               dataVenda.getMonth() === dataSelecionada.getMonth() &&
	               dataVenda.getDate() === dataSelecionada.getDate();
	    });

	    // Adicionar os produtos ao seletor de produtos
	    produtosData.forEach(function(venda) {
	        var option = document.createElement('option');
	        option.text = venda.produto;
	        option.value = venda.produto;
	        lvvc.add(option);
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