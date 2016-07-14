package core;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

/*
 * The driver class is responsible for handling the Selenium driver, which drives the browser.
 */
public class Driver {
	
	private static WebDriver driver;
	
	/*
	 * Creates a new instance of WebDriver and returns it.
	 */
	public static WebDriver createDriver(){
		DesiredCapabilities caps = DesiredCapabilities.firefox();
		
		/*try {
			driver = new RemoteWebDriver(new URL("http://jenkins-uscis.reisys.io:4444/wd/hub"), caps);
		} 
		catch (MalformedURLException e) {
			e.printStackTrace();
		}*/
		
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
