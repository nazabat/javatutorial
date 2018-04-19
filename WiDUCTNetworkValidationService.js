/**
 * Created by nazab on 3/7/2017.
 */
angular.module("WiDUCTDataModule")
    .factory('WiDUCTNetworkValidationService',WiDUCTNetworkValidationService);

function WiDUCTNetworkValidationService() {
    function _WiDUCTNetworkFieldValidationService(Information){
        var errorMessage = [];
        if(Information.length > 0){
            angular.forEach(Information, function(Information){
                if(Information.name !== 'undefined'
                    && (Information.name == null
                    || Information.name === ''
                    || Information.name == 0)){
                    errorMessage.push(Information.errorMessage)
                }
            })
        }
        return errorMessage;
    }
    return{GetWiDUCTNetworkFieldValidationService: _WiDUCTNetworkFieldValidationService};
}

