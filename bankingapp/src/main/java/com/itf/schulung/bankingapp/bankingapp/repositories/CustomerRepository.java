package com.itf.schulung.bankingapp.bankingapp.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itf.schulung.bankingapp.bankingapp.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
	
	List<Customer> findAll();

}
