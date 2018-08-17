#language: pt

Funcionalidade: Consultar cardápios e seus produtos relacionados.


Cenário: Consultar seção de cardápios
	Dado que eu possua o cnpj do estabelecimento
	Quando eu realizar a requisição no endpoint
	Então a api me retorna as seções de cardápios
	E o content-type "application/json"