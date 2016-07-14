package tests;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.Test;

import core.Driver;
import pageObjects.USCIS_AddContactPage;

public class USCIS_AddContactPageTests {
	
	
	@Test
	public void Can_Navigate_To_Page() {
		USCIS_AddContactPage addContactPage = new USCIS_AddContactPage();
		addContactPage.navigateTo();
		Assert.assertTrue(addContactPage.isAt());
	}

	@AfterSuite
	public void closeDriver() {
		Driver.closeDriver();
	}
}
