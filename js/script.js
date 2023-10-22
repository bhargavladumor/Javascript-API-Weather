var search = document.getElementById("search");

function getWeatherInfo(){
    $.ajax({
        url : `https://api.weatherapi.com/v1/forecast.json?key=2695a95f8b1e4b7188325039231808&q=${search.value}`,
        method : "GET",
        success : function(res)
        {
            document.getElementById("city").innerHTML = res.location.name;
            document.getElementById("icon").src = "https://"+ res.current.condition.icon;
            document.getElementById("temp").innerHTML = res.current.temp_c;
            document.getElementById("min").innerHTML = res.forecast.forecastday[0].day.mintemp_c;
            document.getElementById("max").innerHTML = res.forecast.forecastday[0].day.maxtemp_c;
            document.getElementById("text").innerHTML = res.current.condition.text;
            document.getElementById("feel").innerHTML = res.current.feelslike_c;
            document.getElementById("wind").innerHTML = res.current.wind_kph+" km/h";
            document.getElementById("rain").innerHTML = res.forecast.forecastday[0].day.daily_chance_of_rain+" %";
            document.getElementById("uv").innerHTML = res.current.uv;

            var forecastHTML = "";
            res.forecast.forecastday[0].hour.map((v)=>{
                forecastHTML += `<div class="fItem">`
                forecastHTML += `<div id="Ftime">${v.time.substr(-6)}</div>`
                forecastHTML += `<img src="http:${v.condition.icon}" id="Ficon" />`
                forecastHTML += `<div class="Frain"><i class="ri-drop-line"></i><span id="Frain">${v.will_it_rain}%</span></div>`
                forecastHTML += `<div class="Ftemp"><span id="Ftemp">${v.temp_c}</span><i class="ri-celsius-line"></i></div>`
                forecastHTML += `</div>`
            });
            document.getElementById("forecast").innerHTML = forecastHTML;

        }
    })
}