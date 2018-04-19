/**
 * Created by nazab on 3/7/2017.
 */
angular.module("WiDUCTDataModule")
    .factory('WiDUCTAdvancedValidationService',WiDUCTAdvancedValidationService);

function WiDUCTAdvancedValidationService() {
    function _WiDUCTAdvancedFieldValidationService(Information){
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
    return{GetWiDUCTAdvancedFieldValidationService: _WiDUCTAdvancedFieldValidationService};
}

