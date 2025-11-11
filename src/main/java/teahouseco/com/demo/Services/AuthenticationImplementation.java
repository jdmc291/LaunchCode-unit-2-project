package teahouseco.com.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import teahouseco.com.demo.DTOs.LoginUserDTO;
import teahouseco.com.demo.Models.User;
import teahouseco.com.demo.Repositories.UserRepository;

    @Service
    public class AuthenticationImplementation implements AuthenticationService {

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @Autowired
        private AuthenticationManager authenticationManager;

        public User authenticate(LoginUserDTO input) {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            input.getEmail(),
                            input.getPassword()
                    )
            );

            return userRepository.findByEmail(input.getEmail())
                    .orElseThrow();
        }
    }

