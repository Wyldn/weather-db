// Global variable declarations
var cityList = [];
var cityname;

// local storage functions
initCityList();
initWeather();


// DOM
function renderCities(){
    $("#cityList").empty();
    $("#cityInput").val("");
    
    for (i=0; i<cityList.length; i++){
        var a = $("<a>");
        a.addClass("list-group-item list-group-item-action list-group-item-primary city");
        a.attr("data-name", cityList[i]);
        a.text(cityList[i]);
        $("#cityList").prepend(a);
    } 
}

// local sotrage
function initCityList() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    
    if (storedCities !== null) {
        cityList = storedCities;
    }
    
    renderCities();
    }
