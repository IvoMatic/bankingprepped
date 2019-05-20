package com.ivmalekl.bankingapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ivmalekl.bankingapp.model.Account;
import com.ivmalekl.bankingapp.model.Customer;
import com.ivmalekl.bankingapp.repositories.AccountRepository;
import com.ivmalekl.bankingapp.repositories.CustomerRepository;

@RestController
public class MyRestController {
	
	@Autowired
	CustomerRepository custRepo;
	@Autowired
	AccountRepository accRepo;
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/accounts")
	public ResponseEntity<?> getAllAccounts() {
		List<Account> allAccounts = accRepo.findAll();
		return new ResponseEntity<>(allAccounts, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PostMapping(value = "/account", consumes = "application/json")
	public ResponseEntity<Account> postAccount(@RequestBody Account receivedAccount) {
		accRepo.save(receivedAccount);
		return new ResponseEntity<Account>(receivedAccount, HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PostMapping(value = "/customer", consumes = "application/json")
	public ResponseEntity<Customer> postCustomer(@RequestBody Customer receivedCustomer) {
		custRepo.save(receivedCustomer);
		return new ResponseEntity<Customer>(receivedCustomer, HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/customers")
	public ResponseEntity<List<Customer>> getAllCustomers() {
		List<Customer> allCustomers = custRepo.findAll();
		return new ResponseEntity<List<Customer>>(allCustomers, HttpStatus.OK);
	}
	
}
