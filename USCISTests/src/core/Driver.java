package core;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/*
 * The driver class is responsible for handling the Selenium driver, which drives the browser.
 */
public class Driver {
	
	private static WebDriver driver;
	
	/*
	 * Creates a new instance of WebDriver and returns it.
	 */
	public static WebDriver createDriver(){
		//DesiredCapabilities caps = DesiredCapabilities.firefox();
		//driver = new RemoteWebDriver(new URL("jenkins-uscis.reisys.io:4444/wd/hub"),caps);
		
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	}
	
	/*
	 * Returns the driver. 
	 */
	public static WebDriver getDriver(){
		if (driver == null){
			createDriver();
		}
		return driver;
	}
	
	/*
	 * Closes the driver. This will also close the browser.
	 */
	public static void closeDriver(){
		driver.close();
	}
}
