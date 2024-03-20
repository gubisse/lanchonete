//=====================================================
//PRIMEIRO A SER CHAMADO NA SEGUENCIA
//=====================================================
var caminho = window.location.pathname;


var nomeis = "";
var senhais = "";
var tipois = "";
var btnSubmitIS = "";

//Conta de vezes para fazer a operacao devido o loop que ocore exige a manipulcao
var conta = 1;

var funcionario = [
	{nome:'Manuel'},
	{nome:'Stiven'},
	{nome:'Lopes'}
	];

var usuario = [
	{nome:'V1', apelido:"Vendedor 1", morada: 'Bairro H', telefone:'898745621', senha:"1234", tipo:'pv', caixa: '001'},
	{nome:'v2', apelido:"Vendedor 2", morada: 'Bairro B', telefone:'8987456991', senha:'1234', tipo:'pv', caixa: '003'},
	{nome:'X', apelido:"Admin", morada: 'Bairro F', telefone:'898745690', senha:'1234', tipo:'index',  caixa: 'all'},
	{nome:'R', apelido:"Reserva", morada: 'Bairro F', telefone:'898745600', senha:'1234', tipo:'reserva',  caixa: 'null'}
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
