package teahouseco.com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teahouseco.com.demo.Models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer > {

}

