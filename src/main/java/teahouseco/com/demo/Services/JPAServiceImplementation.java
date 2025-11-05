package teahouseco.com.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teahouseco.com.demo.Models.Event;
import teahouseco.com.demo.Repositories.CustomerRepository;
import teahouseco.com.demo.Repositories.EventRepository;

import java.util.List;

@Service
public class JPAServiceImplementation implements JPAService {

    @Autowired
    EventRepository eventRepository;

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
