package com.sk.resumeservice.service;

import com.sk.resumeservice.domain.User;
import com.sk.resumeservice.domain.UserWork;
import com.sk.resumeservice.dto.UserWorkDto;
import com.sk.resumeservice.repo.UserRepo;
import com.sk.resumeservice.repo.UserWorkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserWorkService {
    @Autowired
    private UserWorkRepo userWorkRepo;
    @Autowired
    private UserRepo userRepo;

    public UserWork createUserWork(UserWorkDto userWorkDto) {
        User user = userRepo.findById(userWorkDto.getUserId()).get();

        Optional.ofNullable(user).orElseThrow(() -> new RuntimeException());

        UserWork userWork = new UserWork();
        userWork.setAchievements(userWorkDto.getAchievements());
        userWork.setCompanyName(userWorkDto.getCompanyName());
        userWork.setDesignation(userWorkDto.getDesignation());
        userWork.setUser(user);
        userWork.setSkills(userWorkDto.getSkills());
        userWork.setDescription(userWorkDto.getDescription());
        userWork.setStart(userWorkDto.getStart());
        userWork.setEnd(userWorkDto.getEnd());

        userWork = userWorkRepo.save(userWork);

        return userWork;
    }
}
