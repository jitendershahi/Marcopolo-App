(function(){
    app.directive("myDirective",function(){
        return{
            restrict: "EA",
            scope:"false",
            templateUrl: "/templates/myDirective.html"
        }
    })
})()