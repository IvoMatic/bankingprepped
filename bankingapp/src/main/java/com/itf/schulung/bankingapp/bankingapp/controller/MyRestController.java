package com.itf.schulung.bankingapp.bankingapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itf.schulung.bankingapp.bankingapp.model.Account;
import com.itf.schulung.bankingapp.bankingapp.model.Customer;
import com.itf.schulung.bankingapp.bankingapp.repositories.AccountRepository;
import com.itf.schulung.bankingapp.bankingapp.repositories.CustomerRepository;

@RestController
public class MyRestController {
	@Autowired
	CustomerRepository custRepo;
	@Autowired
	AccountRepository accRepo;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(value = "/postCustomer", consumes = "application/json")
	public ResponseEntity<?> postCustomer(@RequestBody Customer receivedCustomer) {
		custRepo.save(receivedCustomer);
		return new ResponseEntity<>(receivedCustomer, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(value = "/postAccount", consumes = "application/json")
	public ResponseEntity<?> postAccount(@RequestBody Account receivedAccount) {
		accRepo.save(receivedAccount);
		return new ResponseEntity<>(receivedAccount, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/getCustomers")
	public ResponseEntity<?> getCustomers() {
		List<Customer> allCustomers = custRepo.findAll();
		return new ResponseEntity<>(allCustomers, HttpStatus.OK);
	}
	
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/getAccounts")
	public ResponseEntity<?> getAcconts() {
		List<Account> allAccounts = accRepo.findAll();
		return new ResponseEntity<>(allAccounts, HttpStatus.OK);
	}
	
}
