package tests;

import org.testng.annotations.Test;

import core.Driver;
import pageObjects.USCIS_HomePage;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;

public class USCIS_HomePageTests {
	
	
	@Test
	public void Can_Navigate_To_Page() {
		USCIS_HomePage homepage = new USCIS_HomePage();
		homepage.navigateTo();
		Assert.assertTrue(homepage.isAt());
	}

	@AfterSuite
	public void closeDriver() {
		Driver.closeDriver();
	}

}
