package teahouseco.com.demo.Models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "events" )
public class Event {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id", nullable = false, updatable = false)
    @Id
    public int event_id;

    public String event_name;
    public String picture;
    public String description;
    public Date date_of_event;
    public int seats_available;
    public int seats_left;

}
