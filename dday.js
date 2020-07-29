

function dayGap(){
    var class_result=document.querySelector('#result')
    var setDate=document.querySelector('#setDate').value
    var setday=new Date(setDate)

    var nowday=new Date()

    var result=new Date(setday-nowday)
    var result_d=result.getDay()
        if (result_d<10){
            result_d='0'+result_d
        }
    var result_h=result.getHours()
        if (result_h<10){
            result_h='0'+result_h
        }
    var result_m=result.getMinutes()
        if (result_m<10){
            result_m='0'+result_m
        }
    var result_s=result.getSeconds()
        if (result_s<10){
            result_s='0'+result_s
        }
    
    var result_ms=result.getMilliseconds()
        if (result_ms<10){
            result_ms='00'+result_ms
        }
        else if(result_ms<100){
            result_ms='0'+result_ms

        }
    if (result<0){
        document.getElementById('result').innerHTML='D-Day'    
    }
    else{
    document.getElementById('result').innerHTML=result_d+'일 '+result_h+'시간 '+result_m+'분 '+result_s+'초 '+result_ms;+'<br/>남았습니다.'
    }
}


function realtime(){
    setInterval(dayGap,1)
}



/*var ddaytimer = setInterval (dayGap, 1000)
function dayGap () {
    var dday = new Date(setDate).getTime();//디데이
    var nowday = new Date();//현재
    nowday = nowday.getTime();//밀리세컨드 단위변환
    var distance = dday - nowday;//디데이에서 현재까지 뺀다.

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));//일

    var h = Math.floor((distance / (1000*60*60)) % 24);//시간
    var m = Math.floor((distance / (1000*60)) % 60);//분
    var s = Math.floor((distance / 1000) % 60);//초

    if (distance <= 0) {//당일넘어섰을때, dday로 변경
        document.getElementById("dday-timer").innerHTML = "D-day";
    } else {
        document.getElementById("time-day").innerHTML = d;
        document.getElementById("time-hour").innerHTML = h;
        document.getElementById("time-minute").innerHTML = m;
        document.getElementById("time-second").innerHTML = s;
    }
    
}
dayGap(setDate)

*/