package stepsDefinitions;

import base.BaseUtil;
import cucumber.api.java.pt.Então;

public class GenericosSteps extends BaseUtil {

	private BaseUtil base;

	public GenericosSteps(BaseUtil base) {
		this.base = base;
	}

	public GenericosSteps() {

	}

	@Então("^o content-type \"([^\"]*)\"$")
	public void oContentType(String arg1) throws Throwable {
		base.response.then().contentType(arg1);
	}

}
