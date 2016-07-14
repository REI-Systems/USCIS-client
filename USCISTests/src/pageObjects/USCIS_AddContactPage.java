package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import core.Driver;

/*
 * Contains methods to perform actions on the Add Contact page.
 */
public class USCIS_AddContactPage {

	WebDriver driver = Driver.getDriver();
	
	/*
	 * Uses the USCIS_HomePage class to navigate to the home page. 
	 * Clicks the Add Contact link.
	 */
	public void navigateTo(){
		USCIS_HomePage homepage = new USCIS_HomePage();
		homepage.navigateTo();
		WebElement addContactLink = driver.findElement(By.partialLinkText("Contact Add"));
		addContactLink.click();
	}
	
	/*
	 * Verifies that the browser is on the USCIS_AddContactPage.
	 */
	public Boolean isAt(){
		String expected = "Add Contact List";
		String pageTitle = driver.findElement(By.tagName("h2")).getText();
		return expected.equals(pageTitle);
	}
	
	/*
	 * Adds a contact using the passed in name, email, and phone number.
	 */
	public void addContact(String name, String email, String phone){
		WebElement nameField = driver.findElement(By.id("contactNameField"));
		nameField.sendKeys(name);
		
		WebElement emailField = driver.findElement(By.id("contactEmailField"));
		emailField.sendKeys(email);
		
		WebElement phoneField = driver.findElement(By.id("contactPhoneField"));
		phoneField.sendKeys(phone);
		
		WebElement saveButton = driver.findElement(By.id("contactSubmitButton"));
		saveButton.click();
	}
}
