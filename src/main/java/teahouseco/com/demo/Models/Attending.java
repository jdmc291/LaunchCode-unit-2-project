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
    public User customer;

    @ManyToOne
    @MapsId("event_id")
    @JoinColumn(name = "event_id")
    public Event event;

    public int number_of_guests;
    public String additional_info;

    public AttendingIds getId() {
        return id;
    }

    public void setId(AttendingIds id) {
        this.id = id;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public int getNumber_of_guests() {
        return number_of_guests;
    }

    public void setNumber_of_guests(int number_of_guests) {
        this.number_of_guests = number_of_guests;
    }

    public String getAdditional_info() {
        return additional_info;
    }

    public void setAdditional_info(String additional_info) {
        this.additional_info = additional_info;
    }
}

