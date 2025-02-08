package centralHack.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "patients")
@Data
public class Patient {
    @Id
    private String id;
    private List<String> cids;

    public Patient(String id, List<String> cids) {
        this.id = id;
        this.cids = cids;
    }


    public List<String> getCids() {
        return cids;
    }
}
