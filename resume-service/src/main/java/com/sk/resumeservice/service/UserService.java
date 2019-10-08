package com.sk.resumeservice.service;

import com.sk.resumeservice.domain.User;
import com.sk.resumeservice.dto.UserDto;
import com.sk.resumeservice.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    /**
     * create order
     * @param userDto
     * @return
     */
    public UserDto createUser(UserDto userDto) {

        // validate

        // create user entity from dto
        User user = new User();
        user.setAddress(userDto.getAddress());
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setGender(userDto.getGender());
        user.setMobile(userDto.getMobile());

        //save
        user = userRepo.save(user);

        //convert to dto
        userDto = new UserDto(user);

        return userDto;
    }

}
