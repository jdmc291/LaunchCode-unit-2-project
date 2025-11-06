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
@RequestMapping("/api/events")
public class EventsController {

    @Autowired
    EventRepository eventRepository;

    @GetMapping("/getAllEvents")
    public ResponseEntity<List<Event>> getAllEvents() {
        try{
            return new ResponseEntity<>(eventRepository.findAll(), HttpStatusCode.valueOf(200));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatusCode.valueOf(500));
        }

    }
}
