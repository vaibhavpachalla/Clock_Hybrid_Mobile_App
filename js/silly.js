var SILLY = (function(module) {

	module.DoIt = function(resultObject) {
	/*
	Need to import timezones for this to work.
	To add timezone go to this link:
	http://stackoverflow.com/questions/27956436/add-new-timezone-to-moment-js-timezone
	Then associate the time on your laptop with a timezone:
	var charlotte = moment.tz(charlotteDate, "America/New_York");
	
	Then use that to determine time in other timezones:
	var london = charlotte.clone().tz("Europe/London");
	
	You can also go to website which has an example of how to do this:
	http://momentjs.com/timezone/
	*/
	var today = new Date().toISOString();
	var charlotteDate = moment(today);
	var charlotte = moment.tz(charlotteDate, "America/New_York")
	var london = charlotte.clone().tz("Europe/London");
	var berlin = charlotte.clone().tz("Europe/Berlin");
	var saudiArabia = charlotte.clone().tz("Asia/saudiArabia");
	var hyderabad = charlotte.clone().tz("Asia/hyderabad");
	london = moment(london).format("hh:mm A Z");
	berlin = moment(berlin).format("hh:mm A Z");
	charlotte = moment(charlotte).format("hh:mm A Z");
	saudiArabia = moment(saudiArabia).format("hh:mm A Z");
	hyderabad = moment(hyderabad).format("hh:mm A Z");
	
	resultObject.prepend( "Charlotte: " + charlotte + '<br/>' + "Frankfurt: " + berlin + '<br/>' + "Saudi Arabia: " + saudiArabia + '<br/>' + "Hyderabad: " + hyderabad + '<br/>');
	};
	
	return module;
}(SILLY || {}));

/*
var time = moment().tz("America/Los_Angeles").format("h:mm a");
	var time2 = moment().format("h:mm a");
hyderabadTime + '<br/>' + charlotteTime + '<br/>' + houstonTime + '<br/>' + denverTime + '<br/>' + losAngelesTime

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
*/