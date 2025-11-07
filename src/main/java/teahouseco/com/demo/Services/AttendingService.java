package teahouseco.com.demo.Services;

import jakarta.annotation.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teahouseco.com.demo.DTOs.ReservationDTO;
import teahouseco.com.demo.Models.Attending;
import teahouseco.com.demo.Models.AttendingIds;
import teahouseco.com.demo.Models.Event;
import teahouseco.com.demo.Models.User;
import teahouseco.com.demo.Repositories.AttendingRepository;
import teahouseco.com.demo.Repositories.EventRepository;
import teahouseco.com.demo.Repositories.UserRepository;

import java.util.Optional;

@Service
public class AttendingService {

    @Autowired
    private AttendingRepository attendingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    public void AddReservation(ReservationDTO myReservation) {

        Attending newReservation = new Attending();
        AttendingIds newIds = new AttendingIds();
        newIds.setCustomer_id(myReservation.getUserId());
        newIds.setEvent_id(myReservation.getEventId());
        newReservation.setId(newIds);

        newReservation.number_of_guests =
                myReservation.getNumber_of_guests();

        newReservation.additional_info =
                myReservation.getAdditionalInfo();

        User referencedUser = findUserById(myReservation.getUserId());

        newReservation.setCustomer(referencedUser);

        Event referencedEvent = findEventById(myReservation.getEventId());

        newReservation.setEvent(referencedEvent);

        attendingRepository.save(newReservation);

    }

    @Nullable
    public User findUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    @Nullable
    public Event findEventById(int id) {
        Optional<Event> event = eventRepository.findById(id);
        return event.orElse(null);
    }
}
