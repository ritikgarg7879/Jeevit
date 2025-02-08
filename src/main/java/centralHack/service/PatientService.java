package centralHack.service;

import centralHack.model.Patient;
import centralHack.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public List<String> getCIDs(String patientId) {
        Optional<Patient> patient = patientRepository.findById(patientId);

        // Fix: Use lambda to ensure safe access
        return patient.map(Patient::getCids).orElse(Collections.emptyList());
    }
}
