package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import teahouseco.com.demo.DTOs.LoginUserDTO;
import teahouseco.com.demo.Models.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer > {
    Optional<User> findByEmail(String email);
    //finding if login exists
    User findByEmailAndPassword(String email, String password);
}

