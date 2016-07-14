package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import core.Driver;

/*
 * Contains methods to perform actions on the Home page.
 */
public class USCIS_HomePage {

	private WebDriver driver = Driver.getDriver();
	
	/*
	 * Get the base URL from environment variables.
	 * Access the home page.
	 */
	public void navigateTo(){
		//String url = "http://localhost:9000";
		String url = System.getenv("baseURL");
		driver.get(url);
		driver.findElement(By.partialLinkText("Home")).click();
	}
	
	/*
	 * Verifies that the browser is currently on the USCIS_HomePage.
	 */
	public Boolean isAt(){
		String expected = "Make New Appointment";
		WebElement button = driver.findElement(By.id("create-button"));
		String buttonText = button.getText();
		return expected.equals(buttonText);
	}
}
