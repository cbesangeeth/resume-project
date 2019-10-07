package com.sk.resumeservice.repo;

import com.sk.resumeservice.domain.UserWork;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserWorkRepo extends CrudRepository<UserWork,Long> {
}
