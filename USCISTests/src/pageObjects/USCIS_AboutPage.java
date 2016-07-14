package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import core.Driver;

/*
 * Contains methods to perform actions on the About page.
 */
public class USCIS_AboutPage {

	private WebDriver driver = Driver.getDriver();
	
	/*
	 * Use the USCIS_HomePage class to navigate to the Home page.
	 * Click the header link to access the About Page.
	 */
	public void navigateTo(){
		USCIS_HomePage homepage = new USCIS_HomePage();
		homepage.navigateTo();
		WebElement aboutLink = driver.findElement(By.partialLinkText("About"));
		aboutLink.click();
	}
	
	/*
	 * Verifies that the browser is currently on the USCIS_AboutPage.
	 */
	public Boolean isAt(){
		String expected = "About";
		String pageTitle = driver.findElement(By.tagName("h2")).getText();
		return expected.equals(pageTitle);
	}
}
