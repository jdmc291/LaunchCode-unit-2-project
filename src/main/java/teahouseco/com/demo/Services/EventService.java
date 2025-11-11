package teahouseco.com.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teahouseco.com.demo.DTOs.ReservationDTO;
import teahouseco.com.demo.Models.Event;
import teahouseco.com.demo.Repositories.EventRepository;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }


}
