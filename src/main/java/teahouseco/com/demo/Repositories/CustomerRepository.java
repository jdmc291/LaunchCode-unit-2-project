package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teahouseco.com.demo.Models.User;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<User, Integer > {
    Optional<User> findByEmail(String email);
}

