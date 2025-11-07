package teahouseco.com.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import teahouseco.com.demo.DTOs.ReservationDTO;
import teahouseco.com.demo.Models.Event;
import teahouseco.com.demo.Repositories.AttendingRepository;
import teahouseco.com.demo.Repositories.EventRepository;
import teahouseco.com.demo.Services.AttendingService;
import teahouseco.com.demo.Services.EventService;

import java.util.List;


@RestController
@RequestMapping("/api/events")
public class EventsController {

    @Autowired
    EventService eventService;

    @Autowired
    AttendingService attendingService;

//    @Autowired
//    AttendingRepository attendingRepository;

    @GetMapping("/getAllEvents")
    public ResponseEntity<List<Event>> getAllEvents() {
        try{
            return new ResponseEntity<>(eventService.getAllEvents(), HttpStatusCode.valueOf(200));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatusCode.valueOf(500));
        }

    }

    @PostMapping("/createReservation")
    public ResponseEntity<Event> createEvent(@RequestBody ReservationDTO myReservationDto) {

        attendingService.AddReservation(myReservationDto);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
