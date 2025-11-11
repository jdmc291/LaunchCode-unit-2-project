package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teahouseco.com.demo.Models.User;

public interface AuthenticationRepository extends JpaRepository<User, Integer>{
}
