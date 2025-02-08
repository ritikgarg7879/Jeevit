package centralHack.repository;

import centralHack.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PatientRepository extends MongoRepository<Patient, String> {}
