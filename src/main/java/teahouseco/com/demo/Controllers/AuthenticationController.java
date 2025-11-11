package teahouseco.com.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import teahouseco.com.demo.DTOs.LoginUserDTO;
import teahouseco.com.demo.Models.LoginResponse;
import teahouseco.com.demo.Models.User;
import teahouseco.com.demo.Repositories.UserRepository;
import teahouseco.com.demo.Services.AuthenticationImplementation;
import teahouseco.com.demo.Services.AuthenticationService;
import teahouseco.com.demo.Services.JWTService;

import java.util.Optional;

@RequestMapping ("/api/auth")
@Controller
public class AuthenticationController {


    @Autowired
    private AuthenticationImplementation authenticationImplementation;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDTO loginUserDto) {
//        User authenticatedUser = authenticationImplementation.authenticate(loginUserDto);
         User retrievedUser = userRepository.findByEmailAndPassword(loginUserDto.getEmail(), loginUserDto.getPassword());

        if (retrievedUser == null)
        {
            return ResponseEntity.status(404).build();
        }
        else {
            String jwtToken = jwtService.generateToken(retrievedUser);

            LoginResponse loginResponse = new LoginResponse();
            loginResponse.setToken(jwtToken);
            loginResponse.setExpiresIn(jwtService.getExpirationTime());

            return ResponseEntity.ok(loginResponse);
        }
    }
}
