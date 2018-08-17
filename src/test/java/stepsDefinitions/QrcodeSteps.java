package stepsDefinitions;

import static com.jayway.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.is;
import base.BaseUtil;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;
import cucumber.api.java.pt.Então;

public class QrcodeSteps extends BaseUtil {

	private BaseUtil base;
	private String endpoint = "/api/v1/qrcode/generate";

	public QrcodeSteps(BaseUtil base) {
		this.base = base;
	}

	public QrcodeSteps() {

	}

	@Dado("^que eu informe os dados da requisição$")
	public void que_eu_informe_os_dados_da_requisição() throws Throwable {
		
		base.request.given()
				.body("{'CNPJEmpresa': '91426214000180',\r\n" + "  'CodigoConsumidor': 12345,\r\n"
						+ "  'CPFConsumidor': 65786767329,\r\n" + "  'NomeConsumidor': 'João Da Silva',\r\n"
						+ "  'NumeroCelularConsumidor': 99912341234,\r\n"
						+ "  'CodigoUnicoCelularConsumidor': '00:0a:95:9d:68:16',\r\n"
						+ "  'EmailConsumidor': 'email@linx.com.br'}\r\n");
	}

	@Quando("^realizar a requisição no endpoint$")
	public void realizar_a_requisição_no_endpoint() throws Throwable {
		// System.out.println(base.urlDigital+endpoint);
		base.response = base.request.post(base.urlDigital + endpoint);
	}

	@Então("^a api me retorna código (\\d+)$")
	public void a_api_me_retorna_código(int arg1) throws Throwable {

		base.response.then().statusCode(arg1).body("result.mensagem",
				is("Seja bem vindo(a)! Baixe o APP do Premmia e aproveite a experiencia na palma da sua mao."));
	}

	@Então("^o qrcode possui (\\d+) caracteres$")
	public void o_qrcode_possui_caracteres(int arg1) throws Throwable {

		base.response.then().body("result.qrCode.size()", is(arg1));
	}

	@Então("^o codigo da comanda possui (\\d+) caracters$")
	public void o_codigo_da_comanda_possui_caracters(int arg1) throws Throwable {

		base.response.then().body("result.codigoComanda.size()", is(arg1));
	}

}
