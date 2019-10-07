package com.sk.resumeservice.controller;

import com.sk.resumeservice.domain.UserWork;
import com.sk.resumeservice.dto.UserWorkDto;
import com.sk.resumeservice.service.UserWorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UserWorkController {

    @Autowired
    UserWorkService userWorkService;

    @PostMapping(path = "/workProfiles")
    private UserWork createUserworkProfile(@RequestBody UserWorkDto userWorkDto){
        return userWorkService.createUserWork(userWorkDto);
    }
}
