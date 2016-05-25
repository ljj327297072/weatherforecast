window.onload = function(){
	var weather = document.getElementById('weather');
	var temp = document.getElementById('temp');
	var temphigh = document.getElementById('temphigh');
	var templow = document.getElementById('templow');
	var todaylogo = document.getElementById('todaylogo');
	var city = document.getElementById('city');
	var today = document.getElementById('today');
	var block_1 = document.getElementById('one');
	var block_2 = document.getElementById('two');
	var block_3 = document.getElementById('three');
	var block_4 = document.getElementById('four');
	var block_5 = document.getElementById('five');
	var block_6 = document.getElementById('six');
	city.innerHTML = "西安";
	$.ajax({
        type : 'GET',
        dataType : 'jsonp',
        data : {
        	city : "西安",
        	appkey : '918bb5736e29e7bd'
        },
        url : "http://api.jisuapi.com/weather/query",
        success : function (data){
        	console.log(data);
        	today.innerHTML = data.result.date + "  " + data.result.week;
        	weather.innerHTML = data.result.weather;
        	temp.innerHTML = data.result.temp + "℃";
            temphigh.innerHTML = data.result.temphigh + "℃";
            templow.innerHTML = data.result.templow + "℃";
            todaylogo.src = data.result.img + ".png";
            for(var i = 1;i <= 6; i++){
            	var newdiv = document.createElement('div');
            	newdiv.id = "forecastweather";
            	var day = document.createElement('p');
            	day.id = "day";
            	day.innerHTML = data.result.daily[i].date;
            	var weekday = document.createElement('p');
            	weekday.id = "weekday";
            	weekday.innerHTML = data.result.daily[i].week;
            	var forecastlogo = document.createElement('img');
            	forecastlogo.id = "forecastlogo";
            	forecastlogo.src = data.result.daily[i].day.img + ".png";
            	var weatherinfor = document.createElement('p');
            	weatherinfor.id = "weatherinfor";
            	weatherinfor.innerHTML = data.result.daily[i].day.weather;
            	var forecasttemp = document.createElement('p');
            	forecasttemp.id = "forecasttemp";
            	forecasttemp.innerHTML = data.result.daily[i].night.templow + "~" + data.result.daily[i - 1].day.temphigh;
            	if(i == 1){
            		block_1.appendChild(day);
	            	block_1.appendChild(weekday);
	            	block_1.appendChild(forecastlogo);
	            	block_1.appendChild(weatherinfor);
	            	block_1.appendChild(forecasttemp);
            	}
            	if(i == 2){
            		block_2.appendChild(day);
	            	block_2.appendChild(weekday);
	            	block_2.appendChild(forecastlogo);
	            	block_2.appendChild(weatherinfor);
	            	block_2.appendChild(forecasttemp);
            	}
            	if(i == 3){
            		block_3.appendChild(day);
	            	block_3.appendChild(weekday);
	            	block_3.appendChild(forecastlogo);
	            	block_3.appendChild(weatherinfor);
	            	block_3.appendChild(forecasttemp);
            	}
            	if(i == 4){
            		block_4.appendChild(day);
	            	block_4.appendChild(weekday);
	            	block_4.appendChild(forecastlogo);
	            	block_4.appendChild(weatherinfor);
	            	block_4.appendChild(forecasttemp);
            	}
            	if(i == 5){
            		block_5.appendChild(day);
	            	block_5.appendChild(weekday);
	            	block_5.appendChild(forecastlogo);
	            	block_5.appendChild(weatherinfor);
	            	block_5.appendChild(forecasttemp);
            	}
            	if(i == 6){
            		block_6.appendChild(day);
	            	block_6.appendChild(weekday);
	            	block_6.appendChild(forecastlogo);
	            	block_6.appendChild(weatherinfor);
	            	block_6.appendChild(forecasttemp);
            	}
            	
            }
        }	
     });
}
function findweather () {
	deletedata();
	var inputcity = document.getElementById('inputcity');
    var cityname = inputcity.value;
    var weather = document.getElementById('weather');
	var temp = document.getElementById('temp');
	var temphigh = document.getElementById('temphigh');
	var templow = document.getElementById('templow');
	var todaylogo = document.getElementById('todaylogo');
	var city = document.getElementById('city');
	var today = document.getElementById('today');
	var block_1 = document.getElementById('one');
	var block_2 = document.getElementById('two');
	var block_3 = document.getElementById('three');
	var block_4 = document.getElementById('four');
	var block_5 = document.getElementById('five');
	var block_6 = document.getElementById('six');
	city.innerHTML = cityname;
	$.ajax({
        type : 'GET',
        dataType : 'jsonp',
        data : {
        	city : cityname,
        	appkey : '918bb5736e29e7bd'
        },
        url : "http://api.jisuapi.com/weather/query",
        success : function (data){
        	console.log(data);
        	today.innerHTML = data.result.date + "  " + data.result.week;
        	weather.innerHTML = data.result.weather;
        	temp.innerHTML = data.result.temp + "℃";
            temphigh.innerHTML = data.result.temphigh + "℃";
            templow.innerHTML = data.result.templow + "℃";
            todaylogo.src = data.result.img + ".png";
            for(var i = 1;i <= 6; i++){
            	var newdiv = document.createElement('div');
            	newdiv.id = "forecastweather";
            	var day = document.createElement('p');
            	day.id = "day";
            	day.innerHTML = data.result.daily[i].date;
            	var weekday = document.createElement('p');
            	weekday.id = "weekday";
            	weekday.innerHTML = data.result.daily[i].week;
            	var forecastlogo = document.createElement('img');
            	forecastlogo.id = "forecastlogo";
            	forecastlogo.src = data.result.daily[i].day.img + ".png";
            	var weatherinfor = document.createElement('p');
            	weatherinfor.id = "weatherinfor";
            	weatherinfor.innerHTML = data.result.daily[i].day.weather;
            	var forecasttemp = document.createElement('p');
            	forecasttemp.id = "forecasttemp";
            	forecasttemp.innerHTML = data.result.daily[i].night.templow + "~" + data.result.daily[i - 1].day.temphigh;
            	if(i == 1){
            		block_1.appendChild(day);
	            	block_1.appendChild(weekday);
	            	block_1.appendChild(forecastlogo);
	            	block_1.appendChild(weatherinfor);
	            	block_1.appendChild(forecasttemp);
            	}
            	if(i == 2){
            		block_2.appendChild(day);
	            	block_2.appendChild(weekday);
	            	block_2.appendChild(forecastlogo);
	            	block_2.appendChild(weatherinfor);
	            	block_2.appendChild(forecasttemp);
            	}
            	if(i == 3){
            		block_3.appendChild(day);
	            	block_3.appendChild(weekday);
	            	block_3.appendChild(forecastlogo);
	            	block_3.appendChild(weatherinfor);
	            	block_3.appendChild(forecasttemp);
            	}
            	if(i == 4){
            		block_4.appendChild(day);
	            	block_4.appendChild(weekday);
	            	block_4.appendChild(forecastlogo);
	            	block_4.appendChild(weatherinfor);
	            	block_4.appendChild(forecasttemp);
            	}
            	if(i == 5){
            		block_5.appendChild(day);
	            	block_5.appendChild(weekday);
	            	block_5.appendChild(forecastlogo);
	            	block_5.appendChild(weatherinfor);
	            	block_5.appendChild(forecasttemp);
            	}
            	if(i == 6){
            		block_6.appendChild(day);
	            	block_6.appendChild(weekday);
	            	block_6.appendChild(forecastlogo);
	            	block_6.appendChild(weatherinfor);
	            	block_6.appendChild(forecasttemp);
            	}
            	
            }
        }	
     });
}
function deletedata () {
	var block_1 = document.getElementById('one');
	var block_2 = document.getElementById('two');
	var block_3 = document.getElementById('three');
	var block_4 = document.getElementById('four');
	var block_5 = document.getElementById('five');
	var block_6 = document.getElementById('six');
	block_1.innerHTML = "";
	block_2.innerHTML = "";
	block_3.innerHTML = "";
	block_4.innerHTML = "";
	block_5.innerHTML = "";
	block_6.innerHTML = "";
}