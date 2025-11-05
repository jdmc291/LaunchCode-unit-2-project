package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teahouseco.com.demo.Models.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {
}
