package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teahouseco.com.demo.Models.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
}
