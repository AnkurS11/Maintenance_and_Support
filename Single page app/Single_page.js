angular.module('Ticket',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/Home',
    {
        templateUrl:'SiglePage_Home.html',
        controller:'homectrl'
    }).when('/Reports',
    {
        templateUrl:'Reports.html',
        controller:'reportsctrl'
    }).when('/Documents',
    {
        templateUrl:'SiglePage_Documents.html',
        controller:'documentsctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("Ticket_ctrl",function($scope)
{
    $http.get("https://ankurs11.github.io/JSON/data.json")
    .success(function(response)
    {
        $scope.ticket_details=response.records;
    });
    $scope.rowlimit=8;
})
.controller("documentsctrl",function($scope,$http)
{
    $http.get('data.json')
    .success(function(response)
    {
        $scope.students=response.records;
    });
});