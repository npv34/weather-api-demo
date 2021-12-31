$(document).ready(function () {
    function getCurrentWeather(country = "Ha Noi") {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            data: {
                q: country,
                appid: "02e3323f29bc461c2346db2fe3989729"
            },
            success: function (res) {
               // console.log(res);
                let tempC = Math.floor(res.main.temp  - 273);
                console.log(tempC);
                $('#tempC').html(tempC);
                $('#weather-status').html(res.weather.main);
                $('.weather-location').html(res.name + ", " + res.sys.country);

                let date = new Date();
                let currentYear = date.getFullYear();
                let currentDay = date.getDate();
                let  currentMonth = date.getMonth() + 1

                $('.weather-date').html(currentDay + " Tháng " + currentMonth + ", " + currentYear)
            }
        })
    }
    getCurrentWeather();

    $('#country').change(function () {
        let country = this.value;
        getCurrentWeather(country);
    })
})
