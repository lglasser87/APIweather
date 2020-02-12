var apiKey = "fe951b8646526da66ff9e2daee1a81e6";
$("#searchIt").on("click", function() {
    var Input = $("#mySearch").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + Input + "&APPID=" + apiKey + "&units=imperial";
    var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + Input + "&APPID=" + apiKey;
    var headVal = $("#city");
    var tempVal = $(".temp");
    var humVal = $(".hum");
    var windVal = $(".wind");
    var uvVal = $(".uv");
    var currentDay = moment().format('L');

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        //var img = "http://openweathermap.org/img/w/" + response.weather.icon +".png";
        headVal.text(response.name + " " + (currentDay));
        tempVal.text("Temperature: " + response.main.temp);
        humVal.text("Humidity: " + response.main.humidity);
        windVal.text("Wind Speed: " + response.wind.speed);
        var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?APPID=" + apiKey + "&lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: queryURLUV,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            uvVal.text("UV Index: " + response.value);
        });
    });
    $.ajax({
        url: queryURL5,
        method: "GET"
    }).then(function (response) {
        
        console.log(response);
        
    });
});