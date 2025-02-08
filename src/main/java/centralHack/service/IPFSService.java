package centralHack.service;

import io.ipfs.api.IPFS;
import io.ipfs.api.MerkleNode;
import io.ipfs.api.NamedStreamable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class IPFSService {
    private static final Logger logger = LoggerFactory.getLogger(IPFSService.class);
    private IPFS ipfs;

    @Value("${ipfs.protocol:http}")
    private String ipfsProtocol;

    @Value("${ipfs.host:127.0.0.1}")
    private String ipfsHost;

    @Value("${ipfs.port:5001}")
    private int ipfsPort;

    @PostConstruct
    public void init() {
        try {
            // Build the multiaddr string correctly
            String multiaddr = String.format("/ip4/%s/tcp/%d", ipfsHost, ipfsPort);
            this.ipfs = new IPFS(multiaddr);

            // Verify connection by trying to get node info
            try {
                ipfs.stats.bw();
                logger.info("✅ Successfully connected to IPFS at: {}:{}", ipfsHost, ipfsPort);
            } catch (Exception e) {
                logger.error("❌ IPFS daemon is not responding. Make sure IPFS desktop is running and API is enabled.");
                logger.error("Error details: {}", e.getMessage());
                this.ipfs = null;
                return;
            }
        } catch (Exception e) {
            logger.error("❌ Failed to initialize IPFS connection: {}", e.getMessage());
            this.ipfs = null;
        }
    }

    public String uploadToIPFS(String jsonData) throws IOException {
        if (this.ipfs == null) {
            throw new IOException("IPFS is not initialized. Please ensure IPFS desktop is running and API is enabled.");
        }

        try {
            NamedStreamable.ByteArrayWrapper file = new NamedStreamable.ByteArrayWrapper(jsonData.getBytes());
            List<MerkleNode> response = ipfs.add(file);
            String hash = response.get(0).hash.toBase58();
            logger.info("Successfully uploaded to IPFS with hash: {}", hash);
            return hash;
        } catch (IOException e) {
            logger.error("Failed to upload to IPFS: {}", e.getMessage());
            throw new IOException("Failed to upload to IPFS: " + e.getMessage(), e);
        }
    }

    public boolean isConnected() {
        return this.ipfs != null;
    }
}