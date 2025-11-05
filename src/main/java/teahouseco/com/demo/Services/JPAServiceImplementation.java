package teahouseco.com.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teahouseco.com.demo.Models.Event;
import teahouseco.com.demo.Repositories.CustomerRepository;

import java.util.List;

@Service
public class JPAServiceImplementation implements JPAService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public List<Event> getAllEvents() {
        return List.of();
    }
}
