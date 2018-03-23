var app =  angular.module("app", ["ui.router"]);

app.config(["$stateProvider",function($stateProvider){
    $stateProvider
    .state("home",{
        url:"/home",
        template: "<h3>Welcome to My MarcoPolo App......</h3>"
    })
   .state("marcopolo",{
       url:"/marcopolo",
       templateUrl: "/templates/mainContent.html",
       controller: "marcoPoloController",
       controllerAs:"cntrl"
   })
   .state("root",{
       url:"/",
       template:"<strong>you are at root....click something else</strong>"
   })
   .state("otherwise",{
       url: "*path",
       template: "<strong>Click left side on MarcoPolo</strong>"
   })
}])










