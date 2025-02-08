package centralHack.service;

import centralHack.contracts.CIDStorage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.StaticGasProvider;
import java.math.BigInteger;
import java.util.List;

@Service
public class BlockchainService {
    private final CIDStorage contract;

    public BlockchainService(
            Web3j web3j,
            Credentials credentials,
            @Value("${ethereum.contract.address}") String contractAddress) {

        // Create custom gas provider with higher limits
        ContractGasProvider gasProvider = new StaticGasProvider(
                BigInteger.valueOf(20000000000L), // 20 Gwei gas price
                BigInteger.valueOf(6721975L)      // gas limit
        );

        this.contract = CIDStorage.load(contractAddress, web3j, credentials, gasProvider);
    }

    public void addCID(String patientId, String cid) throws Exception {
        TransactionReceipt receipt = contract.addCID(patientId, cid).send();
    }

    public List<String> getCIDs(String patientId) throws Exception {
        return contract.getCIDs(patientId).send().component1();
    }
}