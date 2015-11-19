var app = angular.module('weaveSearch');

app.controller('mainCtrl', function($scope, $http){
    
    $scope.test = "Yo.";
    
    $scope.appointments = [{
	"createdat":"2015-09-12T14:25:21.139Z",
	"data" : {
		"apt_operatory" : "OP-5",
		"apt_pms_status" : "",
		"apt_practitioner" : "Bradford Picot",
		"apt_status" : "Unknown",
		"apt_type" : "CLRCH",
		"patient_id" : "5300",
		"appointment_id" : "-1234567890",
		"apt_datetime" : "2015-10-24T10:00:00-04:00"
	},
	"operation" : "POST",
	"recordid" : "-2013178472",
	"slug" : "jimmylewis"
},{
	"createdat" : "2015-10-13T15:05:47.187Z",
	"data" : {
		"apt_pms_status" : "Confirmed",
		"apt_practitioner" : "Bradford Picot",
		"apt_status" : "Unknown",
		"apt_type" : "CLRCH",
		"patient_id" : "5300",
		"appointment_id" : "-4367826455",
		"apt_datetime" : "2015-11-14T10:00:00-05:00",
		"apt_operatory" : "Overflow"
	},
	"operation" : "PUT",
	"recordid" : "-2013178472",
	"slug" : "michaeljordan"
},{
	"createdat" : "2015-10-13T15:05:47.187Z",
	"data" : {
		"apt_pms_status" : "Cancelled",
		"apt_practitioner" : "Bradford Picot",
		"apt_status" : "Unknown",
		"apt_type" : "CLRCH",
		"patient_id" : "5300",
		"appointment_id" : "-2013178472",
		"apt_datetime" : "2015-11-14T10:00:00-05:00",
		"apt_operatory" : "OP-1"
	},
	"operation" : "PUT",
	"recordid" : "-2013178472",
	"slug" : "bradfordpicot"
}
] 
    
});
