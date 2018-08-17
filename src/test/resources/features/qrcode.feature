#language: pt
Funcionalidade: Gerar QRCode

  Cenário: Realizar requisição na API com dados de requisição válidos
    Dado que eu informe os dados da requisição
    Quando realizar a requisição no endpoint 
    Então a api me retorna código 200
    E o content-type "application/json"
    E o qrcode possui 134 caracteres
    E o codigo da comanda possui 8 caracters

  Cenário: Realizar requisição na API sem informar dados na requisição
    Quando realizar a requisição no endpoint
    Então a api me retorna código 200
    E o content-type "application/json"
    E o qrcode possui 134 caracteres
    E o codigo da comanda possui 8 caracters

