package com.itf.schulung.bankingapp.bankingapp.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itf.schulung.bankingapp.bankingapp.model.Account;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
	
	List<Account> findAll();

}
