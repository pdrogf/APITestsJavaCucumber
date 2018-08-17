$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cardapio.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Consultar cardápios e seus produtos relacionados.",
  "description": "",
  "id": "consultar-cardápios-e-seus-produtos-relacionados.",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 1315089920,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Consultar seção de cardápios",
  "description": "",
  "id": "consultar-cardápios-e-seus-produtos-relacionados.;consultar-seção-de-cardápios",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 7,
  "name": "que eu possua o cnpj do estabelecimento",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "eu realizar a requisição no endpoint",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "a api me retorna as seções de cardápios",
  "keyword": "Então "
});
formatter.step({
  "line": 10,
  "name": "o content-type \"application/json\"",
  "keyword": "E "
});
formatter.match({
  "location": "CardapioSteps.que_eu_possua_o_cnpj_do_estabelecimento()"
});
formatter.result({
  "duration": 225257814,
  "status": "passed"
});
formatter.match({
  "location": "CardapioSteps.eu_realizar_a_requisição_no_endpoint()"
});
formatter.result({
  "duration": 2115025920,
  "status": "passed"
});
formatter.match({
  "location": "CardapioSteps.a_api_me_retorna_as_seções_de_cardápios()"
});
formatter.result({
  "duration": 1278121387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 16
    }
  ],
  "location": "GenericosSteps.oContentType(String)"
});
formatter.result({
  "duration": 10628267,
  "status": "passed"
});
formatter.uri("qrcode.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Gerar QRCode",
  "description": "",
  "id": "gerar-qrcode",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 3811414,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Realizar requisição na API com dados de requisição válidos",
  "description": "",
  "id": "gerar-qrcode;realizar-requisição-na-api-com-dados-de-requisição-válidos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 5,
  "name": "que eu informe os dados da requisição",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizar a requisição no endpoint",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "a api me retorna código 200",
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o content-type \"application/json\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "o qrcode possui 134 caracteres",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "o codigo da comanda possui 8 caracters",
  "keyword": "E "
});
formatter.match({
  "location": "QrcodeSteps.que_eu_informe_os_dados_da_requisição()"
});
formatter.result({
  "duration": 367786,
  "status": "passed"
});
formatter.match({
  "location": "QrcodeSteps.realizar_a_requisição_no_endpoint()"
});
formatter.result({
  "duration": 679670614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "QrcodeSteps.a_api_me_retorna_código(int)"
});
formatter.result({
  "duration": 750117546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 16
    }
  ],
  "location": "GenericosSteps.oContentType(String)"
});
formatter.result({
  "duration": 1473706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134",
      "offset": 16
    }
  ],
  "location": "QrcodeSteps.o_qrcode_possui_caracteres(int)"
});
formatter.result({
  "duration": 19210240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "QrcodeSteps.o_codigo_da_comanda_possui_caracters(int)"
});
formatter.result({
  "duration": 17999787,
  "status": "passed"
});
formatter.before({
  "duration": 5989973,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Realizar requisição na API sem informar dados na requisição",
  "description": "",
  "id": "gerar-qrcode;realizar-requisição-na-api-sem-informar-dados-na-requisição",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 13,
  "name": "realizar a requisição no endpoint",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "a api me retorna código 200",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "o content-type \"application/json\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o qrcode possui 134 caracteres",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o codigo da comanda possui 8 caracters",
  "keyword": "E "
});
formatter.match({
  "location": "QrcodeSteps.realizar_a_requisição_no_endpoint()"
});
formatter.result({
  "duration": 875700053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "QrcodeSteps.a_api_me_retorna_código(int)"
});
formatter.result({
  "duration": 13530026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 16
    }
  ],
  "location": "GenericosSteps.oContentType(String)"
});
formatter.result({
  "duration": 874240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134",
      "offset": 16
    }
  ],
  "location": "QrcodeSteps.o_qrcode_possui_caracteres(int)"
});
formatter.result({
  "duration": 15508480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "QrcodeSteps.o_codigo_da_comanda_possui_caracters(int)"
});
formatter.result({
  "duration": 17051733,
  "status": "passed"
});
});