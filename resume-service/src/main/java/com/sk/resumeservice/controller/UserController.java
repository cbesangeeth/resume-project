package com.sk.resumeservice.controller;

import com.sk.resumeservice.dto.UserDto;
import com.sk.resumeservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/users")
    private List<UserDto> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping(path = "/users")
    private UserDto createUser(@RequestBody UserDto userDto){
        return userService.createUser(userDto);
    }
}
