package stepsDefinitions;

import base.BaseUtil;
import static com.jayway.restassured.module.jsv.JsonSchemaValidator.*;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;
import cucumber.api.java.pt.Então;

public class CardapioSteps extends BaseUtil {

	private String cnpj;
	private String endpoint = "/api/CardapioDigital/Secao/?cnpjEstabelecimento=";
	private BaseUtil base;

	public CardapioSteps(BaseUtil base) {
		this.base = base;
	}

	public CardapioSteps() {

	}

	@Dado("^que eu possua o cnpj do estabelecimento$")
	public void que_eu_possua_o_cnpj_do_estabelecimento() throws Throwable {

		cnpj = "34274233025865";

	}

	@Quando("^eu realizar a requisição no endpoint$")
	public void eu_realizar_a_requisição_no_endpoint() throws Throwable {
		System.out.println("URL SOLICITADA:::::::::: " + base.urlDigital + endpoint + cnpj);
		base.response = base.request.get(base.urlSweb + endpoint + cnpj);
	}

	@Então("^a api me retorna as seções de cardápios$")
	public void a_api_me_retorna_as_seções_de_cardápios() throws Throwable {

		// System.out.println(response.body().asString());
		base.response.then().statusCode(200).assertThat()
				.body(matchesJsonSchemaInClasspath("json.schemas/schema_lista_cardapio.json")); // validacao do schema
	}

}
