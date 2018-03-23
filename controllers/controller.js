(function (){

    "use strict"

    app.controller("marcoPoloController",["calcFactory",function(calcFactory){
    this.num = 100;

   this.getFunc = function(){
      this.result = calcFactory.getMarcoPolo(this.num);
    }

    }]);

})();




