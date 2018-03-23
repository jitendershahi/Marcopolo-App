(function () {

    "use strict"

    app.factory("calcFactory",function(){

        var oCalService = {};

        oCalService.getMarcoPolo = function(number){
	
                var x = "";
                for(var i=1; i<=number; i++){
                    
                    if(i%4===0 && i%7===0){
                        x +=  "marcopolo,"
                    }else if(i%4===0){
                        x +=  "marco,"
                    }else if(i%7===0){
                        x +=  "polo,"
                    }else {
                        x +=  i;
                        x +=  ","
                    }
                    
                }
                var result = x.substring(0,x.length-1);
                // console.log(result);
                return result;
            };

        return oCalService;
    })


})();


