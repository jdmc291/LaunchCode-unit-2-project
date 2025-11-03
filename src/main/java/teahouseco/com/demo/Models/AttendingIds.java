package teahouseco.com.demo.Models;

import jakarta.persistence.Embeddable;

@Embeddable
public class AttendingIds {
    public int customer_id;
    public int event_id;

    // Getters and Setters
    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }
}
