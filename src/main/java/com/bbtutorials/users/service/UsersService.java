package com.bbtutorials.users.service;

import java.util.List;
import java.util.Random;
import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.Users;
import com.bbtutorials.users.repository.UsersRepository;

@Component
public class UsersService {
	
	private UsersRepository usersRepository;
    private static int id = 1;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }
    
    public Users saveUser(Users users) {
        users.setId(id+1);
        id += 1;
    	return usersRepository.save(users);
    }

}
