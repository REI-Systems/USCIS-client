package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import core.Driver;

public class USCIS_ContactListPage {

	private WebDriver driver = Driver.getDriver();
	
	/*
	 * Uses the USCIS_HomePage to navigate to the home page.
	 * Clicks the tab to access the Contact List page.
	 */
	public void navigateTo(){
		USCIS_HomePage homepage = new USCIS_HomePage();
		homepage.navigateTo();
		WebElement contactListLink = driver.findElement(By.partialLinkText("Contacts List"));
		contactListLink.click();
	}
	
	/*
	 * Verifies that the browser is currently on the USCIS_ContactListPage.
	 */
	public Boolean isAt(){
		String pageTitle = driver.findElement(By.tagName("h2")).getText();
		String expected = "Contact List";
		return expected.equals(pageTitle);
	}
}
