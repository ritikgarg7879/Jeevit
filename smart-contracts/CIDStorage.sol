// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract CIDStorage {
    struct PatientData {
        string[] cids;
        uint256[] timestamps;
    }

    mapping(string => PatientData) private patientRecords;

    event CIDAdded(string patientId, string cid, uint256 timestamp);

    function addCID(string memory patientId, string memory cid) public {
        patientRecords[patientId].cids.push(cid);
        patientRecords[patientId].timestamps.push(block.timestamp);
        emit CIDAdded(patientId, cid, block.timestamp);
    }

    function getCIDs(string memory patientId) public view returns (string[] memory, uint256[] memory) {
        return (patientRecords[patientId].cids, patientRecords[patientId].timestamps);
    }
}