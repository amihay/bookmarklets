/**
 * Created by amihay.hollinger on 22/02/2016.
 */
javascript:(function showCurrTrain(){
    var currDate = new Date().toJSON().slice(0,10);
    var currHour = new Date().getHours();
    window.location = 'http://www.rail.co.il/HE/DrivePlan/Pages/DrivePlan.aspx?DrivePlanPage=true&OriginStationId=3700&DestStationId=7000&OriginStationName=%D7%AA%22%D7%90-%D7%A1%D7%91%D7%99%D7%93%D7%95%D7%A8%20%D7%9E%D7%A8%D7%9B%D7%96&DestStationName=%D7%A7%D7%A8%D7%99%D7%99%D7%AA%20%D7%92%D7%AA&HoursDeparture=' + currHour + '&MinutesDeparture=0&HoursReturn=12&MinutesReturn=0&GoingHourDeparture=true&ArrivalHourDeparture=false&GoingHourReturn=true&ArrivalHourReturn=false&IsReturn=false&GoingTrainCln=' + currDate + '&ReturnningTrainCln=' + currDate + '&IsFullURL=true';
})();