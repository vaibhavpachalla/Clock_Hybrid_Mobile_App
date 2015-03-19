var SILLY = (function(module) {

	module.DoIt = function(resultObject) {
		function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The time for "+ city +" is "+ nd.toUTCString();
	}
	var hyderabadTime = calcTime('Hyderabad', '+5');
	var charlotteTime = calcTime('Charlotte', '-4');
	var houstonTime = calcTime('Houston', '-5');
	var denverTime = calcTime('Denver' , '-6');
	var losAngelesTime = calcTime('Los Angeles', '-7')
	resultObject.prepend(hyderabadTime + '<br/>' + charlotteTime + '<br/>' + houstonTime + '<br/>' + denverTime + '<br/>' + losAngelesTime + '<br/>');
	};
	
	return module;
}(SILLY || {}));