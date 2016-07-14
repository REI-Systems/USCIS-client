package tests;

import org.testng.annotations.Test;

import core.Driver;
import pageObjects.USCIS_CreateAppointmentPage;

import org.testng.Assert;
import org.testng.annotations.AfterSuite;

public class USCIS_CreateAppointmentPageTests {
	
	
	@Test
	public void Can_Navigate_To_Create_Appointment_Page() {
		USCIS_CreateAppointmentPage page = new USCIS_CreateAppointmentPage();
		page.navigateTo();
		Assert.assertTrue(page.isAt());
	}

	@AfterSuite
	public void closeDriver() {
		Driver.closeDriver();
	}

}
