package com.sk.resumeservice.controller;

import com.sk.resumeservice.dto.UserDto;
import com.sk.resumeservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/users")
    private UserDto createUser(@RequestBody UserDto userDto){
        return userService.createUser(userDto);
    }
}
