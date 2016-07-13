package tests;

import org.testng.annotations.Test;

import core.Driver;
import pageObjects.USCIS_AboutPage;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;

public class USCIS_AboutPageTests {
	
	
	@Test
	public void Can_Navigate_To_Page() {
		USCIS_AboutPage page = new USCIS_AboutPage();
		page.navigateTo();
		Assert.assertTrue(page.isAt());
	}

	@AfterSuite
	public void closeDriver() {
		Driver.closeDriver();
	}

}
