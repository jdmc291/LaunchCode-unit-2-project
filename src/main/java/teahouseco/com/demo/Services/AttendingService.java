package teahouseco.com.demo.Services;

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

        Optional<User> referencedUser =
                userRepository.findById(myReservation.getUserId());

        Optional<Attending> referencedEvent =
                attendingRepository.findById(myReservation.getEventId());
        //attendingRepository.save(newReservation);

    }
}
