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
		WebElement contactListLink = driver.findElement(By.partialLinkText("Contact List"));
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
	
	/*
	 * Verifies if the contact entered is the correct contact.
	 */
	public Boolean existsContact(){
		String topName = driver.findElement(By.id("contactName0")).getText();
		String topEmail = driver.findElement(By.id("contactEmail0")).getText();
		String topPhone = driver.findElement(By.id("contactPhone0")).getText();
		
		String expectedName = "David";
		String expectedEmail = "david.dabb@outlook.com";
		String expectedPhone = "5714214837";
		
		if (expectedName.equals(topName) && expectedEmail.equals(topEmail) && expectedPhone.equals(topPhone)){
			return true;
		}
		else{
			return false;
		}
	}
}
