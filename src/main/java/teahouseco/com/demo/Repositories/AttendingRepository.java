package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teahouseco.com.demo.DTOs.ReservationDTO;
import teahouseco.com.demo.Models.Attending;

@Repository
public interface AttendingRepository extends JpaRepository<Attending, Integer > {
}
