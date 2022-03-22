package com.lti.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.app.pojo.Employment;
import com.lti.app.pojo.Loan;
import com.lti.app.pojo.Personel;
import com.lti.app.pojo.Vehicle;
import com.lti.app.service.EmploymentService;

@RestController
@RequestMapping("rest/api")
@CrossOrigin("http://localhost:4200")
public class EmploymentController 
{
	@Autowired
	EmploymentService eService;
	
	//Employment Details
    @GetMapping("/employment")
	public List<Employment> getEmploymentDetails()
	{
		return eService.getEmploymentDetails();
	}
    
    @PostMapping("/employment/{appid}")
    public boolean addEmploymentDetails(@RequestBody Employment employment, @PathVariable(name="appid") int appid)  //@RequestBody annotation is used that we will send json data
	{
		return eService.addEmploymentDetails(employment, appid);
	}
    
    //Vehicle Details
    @GetMapping("/vehicle")
    public List<Vehicle> getVehicleDetails()
    {
    	return eService.getVehicleDetails();
    }
    
    @PostMapping("/vehicle/{appid}")
    public boolean addVehicleDetails1(@RequestBody Vehicle vehicle,  @PathVariable(name="appid") int appid)
    {
    	return eService.addVehicleDetails(vehicle, appid);
    }
    
    
    //Loan Details
    @GetMapping("/loan")
    public List<Loan> getLoanDetails()
    {
    	return eService.getLoanDetails();
    }
    
    @PostMapping("/loan/{appid}")
    public boolean addLoanDetails(@RequestBody Loan loan, @PathVariable(name="appid") int appid)
    {
    	return eService.addLoanDetails(loan, appid);
    }
    
    
    //Personel Details
    @GetMapping("/personel")
    public List<Personel> getPersonelDetails()
    {
    	return eService.getPersonelDetails();
    }
    
    @PostMapping("/personel")
    public Personel addPersonelDetails(@RequestBody Personel personel)
    {
    	return eService.addPersonelDetails(personel);
    }
    

}
