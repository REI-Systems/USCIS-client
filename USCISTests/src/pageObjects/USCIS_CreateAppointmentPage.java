package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import core.Driver;

public class USCIS_CreateAppointmentPage {

	private WebDriver driver = Driver.getDriver();
	
	public void navigateTo(){
		USCIS_HomePage homepage = new USCIS_HomePage();
		homepage.navigateTo();
		WebElement newAppointmentButton = driver.findElement(By.id("create-button"));
		newAppointmentButton.click();
	}
	
	public Boolean isAt(){
		WebElement dropDown = driver.findElement(By.id("locationselect"));
		return dropDown.isDisplayed();
	}
}
