package tests;

import org.testng.annotations.Test;

import core.Driver;
import pageObjects.USCIS_ContactListPage;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;

public class USCIS_ContactListPageTests {
	
	
	@Test
	public void Can_Navigate_To_Page() {
		USCIS_ContactListPage page = new USCIS_ContactListPage();
		page.navigateTo();
		Assert.assertTrue(page.isAt());
	}

	@AfterSuite
	public void closeDriver() {
		Driver.closeDriver();
	}

}
