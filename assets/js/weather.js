
// var newScript = document.createElement("script");
// newScript.type ="text/javascript";
// newScript.src = "js/echarts.min.js";
// var head = document.getElementsByTagName("head")[0];
// head.appendChild(newScript);

// var lineChart = echarts.init(document.getElementsByClassName("chart"));
window.onload = function () {
    var API1 = "https://www.tianqiapi.com/free/day?appid=27198235&appsecret=c4fQkfGY";
    var API2 = "https://www.tianqiapi.com/free/week?appid=27198235&appsecret=c4fQkfGY"
    var oInput = document.querySelector('.search');
    var buttonSea = document.querySelector('.button1');
    var oSpan = document.querySelectorAll("span");
    var time = document.querySelector(".time");
    var mainText = document.getElementById("mainText");
    var wea_img = ['xue', 'lei', 'shachen', 'wu', 'bingbao', 'yun', 'yu', 'yin', 'qing']
    
   


    buttonSea.onclick = function () {
        var xhrFirst = new XMLHttpRequest();
        xhrFirst.open("get", API1 + '&city=' + oInput.value);
        xhrFirst.send();
        xhrFirst.onreadystatechange = function () {
            if (xhrFirst.readyState === 4) {
                if (xhrFirst.status === 200) {
                    var json = JSON.parse(xhrFirst.responseText);
                    time.innerHTML = '中央气象台' + json.update_time + '发布'
                    oSpan[0].innerHTML = json.city;
                    oSpan[1].innerHTML = json.tem + '°';
                    oSpan[2].innerHTML = json.wea;
                    oSpan[3].innerHTML = '最高温度' + ':' + json.tem_day+ '°';
                    oSpan[4].innerHTML = '最低温度' + ':' + json.tem_night+ '°';
                    oSpan[5].innerHTML = json.win;
                    oSpan[6].innerHTML = json.win_meter;
                    oSpan[7].innerHTML = json.win_speed;
                    oInput.value = ''


                    if (json.wea_img == wea_img[0]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/xue.jpg')"
                    } else if (json.wea_img == wea_img[1]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-backgroundlei.jpg')"
                    } else if (json.wea_img == wea_img[2]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/shachen.jpg')"
                    } else if (json.wea_img == wea_img[3]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/wu.jpg')"
                    } else if (json.wea_img == wea_img[4]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/bingbao.jpg')"
                    } else if (json.wea_img == wea_img[5]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/yun.jpg')"
                    } else if (json.wea_img == wea_img[6]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/yu.jpg')"
                    } else if (json.wea_img == wea_img[7]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/yin.jpg')"
                    } else if (json.wea_img == wea_img[8]) {
                        mainText.style.backgroundImage = "url('./assets/img/weather-background/qing.jpg')"
                    }




                } else {
                    console.log('fail')
                }
            }
        }
        var oDivRep = document.getElementsByClassName("weaSeven");
         for(n=6;n>=0;n--){
             oDivRep[n].remove()
         }
        var xhrhourly = new XMLHttpRequest();
    xhrhourly.open("get", API2 + '&city=' + oInput.value);
    xhrhourly.send();
    xhrhourly.onreadystatechange = function () {
        if (xhrhourly.readyState === 4) {
            if (xhrhourly.status === 200) {
                var jsonClick = JSON.parse(xhrhourly.responseText);
                for (i = 0; i < 7; i++) {
                    var oDivRep = document.getElementsByClassName("weaSeven");
                    var SevenMes = document.getElementsByClassName("SevenMes");
                    var oimg = document.createElement("img");
                    var odiv = document.createElement("div");
                    var opdate = document.createElement("p");
                    var opwea = document.createElement("p");
                    var opwin = document.createElement("p");
                    var oSpanWea = document.createElement("span");
                    var oSpanWin = document.createElement("span");
                    var DateArr = jsonClick.data[i].date.split("-");
                    DateArr = DateArr.slice(1);
                    var NewDate = [];
                    for (k = 0; k < 7; k++) {
                        NewDate[k] = DateArr.join(".")
                    }

                    odiv.className = "weaSeven";
                    opdate.className = "date";
                    oSpanWea.className = "wea7";
                    oSpanWin.className = "win";
                    oimg.style.width = "18%"
                    if (jsonClick.data[i].wea_img == wea_img[0]) {
                        oimg.src = "./assets/img/weatherSeven/xue.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[1]) {
                        oimg.src = "./assets/img/weatherSeven/lei.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[2]) {
                        oimg.src = "./assets/img/weatherSeven/shachen.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[3]) {
                        oimg.src = "./assets/img/weatherSeven/wu.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[4]) {
                        oimg.src = "./assets/img/weatherSeven/bingbao.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[5]) {
                        oimg.src = "./assets/img/weatherSeven/yun.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[6]) {
                        oimg.src = "./assets/img/weatherSeven/yu.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[7]) {
                        oimg.src = "./assets/img/weatherSeven/yin.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[8]) {
                        oimg.src = "./assets/img/weatherSeven/qing.png"
                    }
                    console.log(oimg.src)
                    opdate.innerHTML = NewDate[i];
                    oSpanWea.innerHTML = jsonClick.data[i].wea;
                    oSpanWin.innerHTML = jsonClick.data[i].win;

                    SevenMes[0].appendChild(odiv);
                    odiv.appendChild(opdate);
                    odiv.appendChild(opwea);
                    odiv.appendChild(oimg);
                    odiv.appendChild(opwin);
                    opwea.appendChild(oSpanWea);
                    opwin.appendChild(oSpanWin);

                }
               
               
            }else {
                console.log('fail')
            }
        }
    }
    }

    var xhrFirst = new XMLHttpRequest();
    xhrFirst.open("get", API1);
    xhrFirst.send();
    xhrFirst.onreadystatechange = function () {
        if (xhrFirst.readyState === 4) {
            if (xhrFirst.status === 200) {
                var json = JSON.parse(xhrFirst.responseText);
                time.innerHTML = '中央气象台' + json.update_time + '发布'
                oSpan[0].innerHTML = json.city;
                oSpan[1].innerHTML = json.tem + '°';
                oSpan[2].innerHTML = json.wea;
                oSpan[3].innerHTML = '最高温度' + ':' + json.tem_day+ '°';
                oSpan[4].innerHTML = '最低温度' + ':' + json.tem_night+ '°';
                oSpan[5].innerHTML = json.win;
                oSpan[6].innerHTML = json.win_meter;
                oSpan[7].innerHTML = json.win_speed;
                oInput.value = ''

                if (json.wea_img == wea_img[0]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/xue.jpg')"
                } else if (json.wea_img == wea_img[1]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-backgroundlei.jpg')"
                } else if (json.wea_img == wea_img[2]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/shachen.jpg')"
                } else if (json.wea_img == wea_img[3]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/wu.jpg')"
                } else if (json.wea_img == wea_img[4]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/bingbao.jpg')"
                } else if (json.wea_img == wea_img[5]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/yun.jpg')"
                } else if (json.wea_img == wea_img[6]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/yu.jpg')"
                } else if (json.wea_img == wea_img[7]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/yin.jpg')"
                } else if (json.wea_img == wea_img[8]) {
                    mainText.style.backgroundImage = "url('./assets/img/weather-background/qing.jpg')"
                }


            } else {
                console.log('fail')
            }
        }
    }

    var xhrhourly = new XMLHttpRequest();
    xhrhourly.open("get", API2);
    xhrhourly.send();
    xhrhourly.onreadystatechange = function () {
        if (xhrhourly.readyState === 4) {
            if (xhrhourly.status === 200) {
                var jsonClick = JSON.parse(xhrhourly.responseText);
                for (i = 0; i < 7; i++) {
                    
                    var SevenMes = document.getElementsByClassName("SevenMes");
                    var oimg = document.createElement("img");
                    var odiv = document.createElement("div");
                    var opdate = document.createElement("p");
                    var opwea = document.createElement("p");
                    var opwin = document.createElement("p");
                    var oSpanWea = document.createElement("span");
                    var oSpanWin = document.createElement("span");
                    var DateArr = jsonClick.data[i].date.split("-");
                    DateArr = DateArr.slice(1);
                    var NewDate = [];
                    for (k = 0; k < 7; k++) {
                        NewDate[k] = DateArr.join(".")
                    }

                    odiv.className = "weaSeven";
                    opdate.className = "date";
                    oSpanWea.className = "wea7";
                    oSpanWin.className = "win";
                    oimg.style.width = "18%"
                    if (jsonClick.data[i].wea_img == wea_img[0]) {
                        oimg.src = "./assets/img/weatherSeven/xue.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[1]) {
                        oimg.src = "./assets/img/weatherSeven/lei.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[2]) {
                        oimg.src = "./assets/img/weatherSeven/shachen.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[3]) {
                        oimg.src = "./assets/img/weatherSeven/wu.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[4]) {
                        oimg.src = "./assets/img/weatherSeven/bingbao.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[5]) {
                        oimg.src = "./assets/img/weatherSeven/yun.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[6]) {
                        oimg.src = "./assets/img/weatherSeven/yu.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[7]) {
                        oimg.src = "./assets/img/weatherSeven/yin.png"
                    } else if (jsonClick.data[i].wea_img == wea_img[8]) {
                        oimg.src = "./assets/img/weatherSeven/qing.png"
                    }
                    console.log(oimg.src)
                    opdate.innerHTML = NewDate[i];
                    oSpanWea.innerHTML = jsonClick.data[i].wea;
                    oSpanWin.innerHTML = jsonClick.data[i].win;

                    SevenMes[0].appendChild(odiv);
                    odiv.appendChild(opdate);
                    odiv.appendChild(opwea);
                    odiv.appendChild(oimg);
                    odiv.appendChild(opwin);
                    opwea.appendChild(oSpanWea);
                    opwin.appendChild(oSpanWin);

                }
                
              

            }else {
                console.log('fail')
            }
        }
    }
}