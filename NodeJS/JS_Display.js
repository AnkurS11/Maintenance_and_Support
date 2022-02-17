var tickets=angular.module("tickets",[]);

tickets.controller("Ticket_ctrl", function($scope,$http)
{
    $http.get('http://127.0.0.1:7000/getjson')
    .success(function(response)
    {
        $scope.ticket_details=response.records;
    });
});