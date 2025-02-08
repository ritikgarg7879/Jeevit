package centralHack.controller;


import centralHack.model.Patient;
import centralHack.repository.PatientRepository;
import centralHack.service.BlockchainService;
import centralHack.service.IPFSService;
import centralHack.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/patients")
public class PatientController {
    private final BlockchainService blockchainService;
    private final IPFSService ipfsService;
    private final PatientRepository patientRepository;
    @Autowired
    private PatientService patientService;

    public PatientController(BlockchainService blockchainService, IPFSService ipfsService, PatientRepository patientRepository) {
        this.blockchainService = blockchainService;
        this.ipfsService = ipfsService;
        this.patientRepository = patientRepository;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadReport(@RequestBody String jsonData, @RequestParam String patientId) {
        try {
            // Upload to IPFS
            String cid = ipfsService.uploadToIPFS(jsonData);

            // Store on blockchain
            blockchainService.addCID(patientId, cid);

            // Store in MongoDB
            Patient patient = patientRepository.findById(patientId)
                    .orElse(new Patient(patientId, new ArrayList<>()));
            patient.getCids().add(cid);
            patientRepository.save(patient);

            return ResponseEntity.ok()
                    .body(Map.of(
                            "message", "Upload successful",
                            "cid", cid,
                            "patientId", patientId
                    ));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("IPFS upload failed: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Operation failed: " + e.getMessage());
        }
    }

    @GetMapping("/{patientId}/cids")
    public List<String> getCIDs(@PathVariable String patientId) {
        return patientService.getCIDs(patientId);
    }
}
