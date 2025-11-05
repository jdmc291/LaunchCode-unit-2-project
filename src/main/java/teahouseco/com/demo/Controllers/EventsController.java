package teahouseco.com.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import teahouseco.com.demo.Models.Event;
import teahouseco.com.demo.Repositories.EventRepository;

import java.util.List;

@RestController
public class EventsController {

    @Autowired
    EventRepository eventRepository;

    @GetMapping(value = "/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        try{
            return new ResponseEntity<>(eventRepository.findAll(), HttpStatusCode.valueOf(200));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        List<Event> events = eventRepository.findAll();
        return new ResponseEntity<>(HttpStatusCode.valueOf(200), events);
    }
}
