package com.lti.app.service;

import java.util.List;

import com.lti.app.pojo.Employment;
import com.lti.app.pojo.Loan;
import com.lti.app.pojo.Personel;
import com.lti.app.pojo.Vehicle;

public interface EmploymentService 
{	
	//Employment details
	public List<Employment> getEmploymentDetails();
	public boolean addEmploymentDetails(Employment employment, int appid);
	
	//Vehicle Details
	public List<Vehicle> getVehicleDetails();
	public boolean addVehicleDetails(Vehicle vehicle, int appid);
	
	//Loan details
	public List<Loan> getLoanDetails();
	public boolean addLoanDetails(Loan loan, int appid);
	
	//Personel details
	public List<Personel> getPersonelDetails();
	public Personel addPersonelDetails(Personel personel);
	

}
