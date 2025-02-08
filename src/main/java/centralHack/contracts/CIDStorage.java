package centralHack.contracts;

import io.reactivex.Flowable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.EventEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.DynamicArray;
import org.web3j.abi.datatypes.Event;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.RemoteFunctionCall;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.BaseEventResponse;
import org.web3j.protocol.core.methods.response.Log;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tuples.generated.Tuple2;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/hyperledger-web3j/web3j/tree/main/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 1.6.2.
 */
@SuppressWarnings("rawtypes")
public class CIDStorage extends Contract {
    public static final String BINARY = "6080604052348015600e575f5ffd5b506106598061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80632dda724114610038578063a65572f41461004d575b5f5ffd5b61004b61004636600461032b565b610077565b005b61006061005b366004610390565b610125565b60405161006e9291906103f8565b60405180910390f35b5f826040516100869190610499565b9081526040516020918190038201902080546001810182555f918252919020016100b08282610533565b505f826040516100c09190610499565b908152604051602091819003820181206001908101805491820181555f908152929092204292018290557fe23e9779e38579ed29aa5d326a2f7c067728e798ba1e2aab25ec6113bc4d6d539161011991859185916105ee565b60405180910390a15050565b6060805f836040516101379190610499565b908152604051908190036020018120905f90610154908690610499565b908152602001604051809103902060010181805480602002602001604051908101604052809291908181526020015f905b8282101561022d578382905f5260205f200180546101a2906104af565b80601f01602080910402602001604051908101604052809291908181526020018280546101ce906104af565b80156102195780601f106101f057610100808354040283529160200191610219565b820191905f5260205f20905b8154815290600101906020018083116101fc57829003601f168201915b505050505081526020019060010190610185565b5050505091508080548060200260200160405190810160405280929190818152602001828054801561027c57602002820191905f5260205f20905b815481526020019060010190808311610268575b5050505050905091509150915091565b634e487b7160e01b5f52604160045260245ffd5b5f82601f8301126102af575f5ffd5b813567ffffffffffffffff8111156102c9576102c961028c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156102f8576102f861028c565b60405281815283820160200185101561030f575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f6040838503121561033c575f5ffd5b823567ffffffffffffffff811115610352575f5ffd5b61035e858286016102a0565b925050602083013567ffffffffffffffff81111561037a575f5ffd5b610386858286016102a0565b9150509250929050565b5f602082840312156103a0575f5ffd5b813567ffffffffffffffff8111156103b6575f5ffd5b6103c2848285016102a0565b949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b5f604082016040835280855180835260608501915060608160051b8601019250602087015f5b8281101561044f57605f1987860301845261043a8583516103ca565b9450602093840193919091019060010161041e565b5050505082810360208401528084518083526020830191506020860192505f5b8181101561048d57835183526020938401939092019160010161046f565b50909695505050505050565b5f82518060208501845e5f920191825250919050565b600181811c908216806104c357607f821691505b6020821081036104e157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561052e57805f5260205f20601f840160051c8101602085101561050c5750805b601f840160051c820191505b8181101561052b575f8155600101610518565b50505b505050565b815167ffffffffffffffff81111561054d5761054d61028c565b6105618161055b84546104af565b846104e7565b6020601f821160018114610593575f831561057c5750848201515b5f19600385901b1c1916600184901b17845561052b565b5f84815260208120601f198516915b828110156105c257878501518255602094850194600190920191016105a2565b50848210156105df57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b606081525f61060060608301866103ca565b828103602084015261061281866103ca565b91505082604083015294935050505056fea2646970667358221220145d62bddf9b8ae42dafe32ab0db897f538551ff463367bebd34ff8896f2bc4364736f6c634300081c0033";

    private static String librariesLinkedBinary;

    public static final String FUNC_ADDCID = "addCID";

    public static final String FUNC_GETCIDS = "getCIDs";

    public static final Event CIDADDED_EVENT = new Event("CIDAdded", 
            Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}));
    ;

    @Deprecated
    protected CIDStorage(String contractAddress, Web3j web3j, Credentials credentials,
            BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected CIDStorage(String contractAddress, Web3j web3j, Credentials credentials,
            ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected CIDStorage(String contractAddress, Web3j web3j, TransactionManager transactionManager,
            BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected CIDStorage(String contractAddress, Web3j web3j, TransactionManager transactionManager,
            ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static List<CIDAddedEventResponse> getCIDAddedEvents(
            TransactionReceipt transactionReceipt) {
        List<Contract.EventValuesWithLog> valueList = staticExtractEventParametersWithLog(CIDADDED_EVENT, transactionReceipt);
        ArrayList<CIDAddedEventResponse> responses = new ArrayList<CIDAddedEventResponse>(valueList.size());
        for (Contract.EventValuesWithLog eventValues : valueList) {
            CIDAddedEventResponse typedResponse = new CIDAddedEventResponse();
            typedResponse.log = eventValues.getLog();
            typedResponse.patientId = (String) eventValues.getNonIndexedValues().get(0).getValue();
            typedResponse.cid = (String) eventValues.getNonIndexedValues().get(1).getValue();
            typedResponse.timestamp = (BigInteger) eventValues.getNonIndexedValues().get(2).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public static CIDAddedEventResponse getCIDAddedEventFromLog(Log log) {
        Contract.EventValuesWithLog eventValues = staticExtractEventParametersWithLog(CIDADDED_EVENT, log);
        CIDAddedEventResponse typedResponse = new CIDAddedEventResponse();
        typedResponse.log = log;
        typedResponse.patientId = (String) eventValues.getNonIndexedValues().get(0).getValue();
        typedResponse.cid = (String) eventValues.getNonIndexedValues().get(1).getValue();
        typedResponse.timestamp = (BigInteger) eventValues.getNonIndexedValues().get(2).getValue();
        return typedResponse;
    }

    public Flowable<CIDAddedEventResponse> cIDAddedEventFlowable(EthFilter filter) {
        return web3j.ethLogFlowable(filter).map(log -> getCIDAddedEventFromLog(log));
    }

    public Flowable<CIDAddedEventResponse> cIDAddedEventFlowable(DefaultBlockParameter startBlock,
            DefaultBlockParameter endBlock) {
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(CIDADDED_EVENT));
        return cIDAddedEventFlowable(filter);
    }

    public RemoteFunctionCall<TransactionReceipt> addCID(String patientId, String cid) {
        final Function function = new Function(
                FUNC_ADDCID, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(patientId), 
                new org.web3j.abi.datatypes.Utf8String(cid)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<Tuple2<List<String>, List<BigInteger>>> getCIDs(String patientId) {
        final Function function = new Function(FUNC_GETCIDS, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(patientId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<DynamicArray<Utf8String>>() {}, new TypeReference<DynamicArray<Uint256>>() {}));
        return new RemoteFunctionCall<Tuple2<List<String>, List<BigInteger>>>(function,
                new Callable<Tuple2<List<String>, List<BigInteger>>>() {
                    @Override
                    public Tuple2<List<String>, List<BigInteger>> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple2<List<String>, List<BigInteger>>(
                                convertToNative((List<Utf8String>) results.get(0).getValue()), 
                                convertToNative((List<Uint256>) results.get(1).getValue()));
                    }
                });
    }

    @Deprecated
    public static CIDStorage load(String contractAddress, Web3j web3j, Credentials credentials,
            BigInteger gasPrice, BigInteger gasLimit) {
        return new CIDStorage(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static CIDStorage load(String contractAddress, Web3j web3j,
            TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new CIDStorage(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static CIDStorage load(String contractAddress, Web3j web3j, Credentials credentials,
            ContractGasProvider contractGasProvider) {
        return new CIDStorage(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static CIDStorage load(String contractAddress, Web3j web3j,
            TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new CIDStorage(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<CIDStorage> deploy(Web3j web3j, Credentials credentials,
            ContractGasProvider contractGasProvider) {
        return deployRemoteCall(CIDStorage.class, web3j, credentials, contractGasProvider, getDeploymentBinary(), "");
    }

    @Deprecated
    public static RemoteCall<CIDStorage> deploy(Web3j web3j, Credentials credentials,
            BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(CIDStorage.class, web3j, credentials, gasPrice, gasLimit, getDeploymentBinary(), "");
    }

    public static RemoteCall<CIDStorage> deploy(Web3j web3j, TransactionManager transactionManager,
            ContractGasProvider contractGasProvider) {
        return deployRemoteCall(CIDStorage.class, web3j, transactionManager, contractGasProvider, getDeploymentBinary(), "");
    }

    @Deprecated
    public static RemoteCall<CIDStorage> deploy(Web3j web3j, TransactionManager transactionManager,
            BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(CIDStorage.class, web3j, transactionManager, gasPrice, gasLimit, getDeploymentBinary(), "");
    }



    private static String getDeploymentBinary() {
        if (librariesLinkedBinary != null) {
            return librariesLinkedBinary;
        } else {
            return BINARY;
        }
    }

    public static class CIDAddedEventResponse extends BaseEventResponse {
        public String patientId;

        public String cid;

        public BigInteger timestamp;
    }
}
