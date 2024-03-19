//=====================================================
//INICIALIZACAO DE VARIAVEIS
//=====================================================


var funcionario = [
	{nome:'Manuel'},
	{nome:'Stiven'},
	{nome:'Lopes'}
	];

var usuario = [
	{nome:'XV1',senha:"1234", tipo:'pv', caixa: '001'},
	{nome:'X1',senha:'1234', tipo:'', caixa: '000'},
	{nome:'X2',senha:'1234', tipo:'',  caixa: '000'},
	{nome:'XV2',senha:'1234', tipo:'pv',  caixa: '002'}
	];

var clientes = [
	{nome:'C1', apelido:"Mtm1", telefone:'898745621', morada: 'Bairro B', senha: 'C1'},
	{nome:'C2', apelido:"Mtm2", telefone:'898745623', morada: 'Bairro C', senha: 'C2'},
	{nome:'C3', apelido:"Mtm3", telefone:'898745625', morada: 'Bairro E', senha: 'C3'}
	];

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
	{caixa:'002', vendedor:'Albertinho', produto:'Tomate', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2024-01-10'},
	{caixa:'004', vendedor:'Bernardo', produto:'Banana', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2021-02-10'},
	{caixa:'002', vendedor:'Chanaka', produto:'Laranja', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2022-06-15'},
	{caixa:'002', vendedor:'John', produto:'Laranja', vendidas:3, mznPagar:0, manPago:0, dataVenda:'2023-04-10'},
	{caixa:'002', vendedor:'Joana', produto:'Laranja', vendidas:2, mznPagar:0, manPago:0, dataVenda:'2023-03-19'},
	{caixa:'002', vendedor:'Joao', produto:'Laranja', vendidas:5, mznPagar:0, manPago:0, dataVenda:'2023-03-19'}

	];
