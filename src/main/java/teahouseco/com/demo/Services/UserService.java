package teahouseco.com.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teahouseco.com.demo.DTOs.LoginUserDTO;
import teahouseco.com.demo.Models.User;
import teahouseco.com.demo.Repositories.UserRepository;

import java.util.Optional;

@Service
public class UserService  {
    @Autowired
    private UserRepository userRepository;

    public User findUser(String email, String password) {
        User returnedUser = userRepository.findByEmailAndPassword(email, password);
        return returnedUser;
    }
}
