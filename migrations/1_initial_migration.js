/* eslint-disable no-undef */
const PatientRecordContract = artifacts.require("PatientRecordContract");

module.exports = function(deployer){
    deployer.deploy(PatientRecordContract);
};