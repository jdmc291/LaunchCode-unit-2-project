package teahouseco.com.demo.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "attending")

public class Attending {
    @EmbeddedId
    @Id
    public AttendingIds id;

    @ManyToOne
    @MapsId("customer_id")
    @JoinColumn(name = "customer_id")
    public Customer customer;

    @ManyToOne
    @MapsId("event_id")
    @JoinColumn(name = "event_id")
    public Event event;

    public int number_of_guests;
    public String additional_info;

}

