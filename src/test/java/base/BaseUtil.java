package base;

import base.BaseUtil;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class BaseUtil {

	public Response response;
	public RequestSpecification request;
	public String urlDigital = "http://digital.poa.qa.sellercorp.com.br";
	public String urlSweb = "http://wwh5.sellercorp.com.br:8080/sweb_teste_digital";

}
