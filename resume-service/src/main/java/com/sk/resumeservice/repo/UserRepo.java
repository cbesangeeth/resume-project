package com.sk.resumeservice.repo;

import com.sk.resumeservice.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {

    List<User> getAll();
}
