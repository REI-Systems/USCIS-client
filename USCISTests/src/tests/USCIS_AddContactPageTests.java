package tests;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.Test;

import core.Driver;
import pageObjects.USCIS_AddContactPage;
import pageObjects.USCIS_ContactListPage;

public class USCIS_AddContactPageTests {
	
	
	@Test
	public void Can_Navigate_To_Page() {
		USCIS_AddContactPage addContactPage = new USCIS_AddContactPage();
		addContactPage.navigateTo();
		Assert.assertTrue(addContactPage.isAt());
	}
	
	/*@Test
	public void Can_Add_A_Contact() throws InterruptedException{
		USCIS_AddContactPage addContactPage = new USCIS_AddContactPage();
		addContactPage.navigateTo();
		addContactPage.addContact("David", "david.dabb@outlook.com", "5714214837");
		
		USCIS_ContactListPage contactListPage = new USCIS_ContactListPage();
		contactListPage.navigateTo();
		Assert.assertTrue(contactListPage.existsContact());
		
	}*/

	@AfterSuite
	public void closeDriver() {
		Driver.closeDriver();
	}
}
