/**************************************************************************
 * Circular Countdown jQuery Plugin
 * @info: http://www.codegrape.com/item/circular-countdown-jquery-plugin/2038
 * @version: 1.0 (11.07.2013)
 * @requires: jQuery v1.7 or later (tested on 1.10.2)
 * @author: flashblue - http://www.codegrape.com/user/flashblue
**************************************************************************/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(8($){$.2G.2H=8(F){6 G={R:"",S:"",1y:0,1z:2I,1e:N,1f:N,1g:N,1h:N,T:10,1i:16,1j:16,1k:16,1l:16,1A:23,1B:23,1C:23,1D:23,1E:23,1F:23,1G:23,1H:23,1I:"#17",1J:"#17",1K:"#17",1L:"#17",1M:"#18",1N:"#18",1O:"#18",1P:"#18",1Q:32,1R:32,1S:32,1T:32,1U:11,1V:11,1W:11,1X:11,1Y:"#19",1Z:"#19",20:"#19",21:"#19",22:"#1a",25:"#1a",26:"#1a",27:"#1a",28:"2J",29:"2K",2a:"2L",2b:"2M",2c:0,2e:0,2f:0,2g:0,U:8(){}};6 F=$.2N({},G,F);1m 7.2O(8(){6 a=$(7);a.2P("2Q-2R");6 b=1n 2h($(7),F);b.2i()});8 2h(t,u){6 v;6 z,$1o,$1p,$1q;6 A,V,1r,W;6 B,d,h,i,s;6 C;6 D=2S.2T("9").1s;6 E=2U(u.U)=="8"?u.U:8(){};7.2i=8(){6 a=7;v=t;C=H.2V(u.1i,u.1j,u.1k,u.1l);u.R=7.1t(u.R);u.S=7.1t(u.S);z=7.X(u.1e,"2W",u.1i,u.1A,u.1E,u.1I,u.1M,u.1Q,u.1U,u.1Y,u.22,u.2c,u.28);$1o=7.X(u.1f,"2X",u.1j,u.1B,u.1F,u.1J,u.1N,u.1R,u.1V,u.1Z,u.25,u.2e,u.29);$1p=7.X(u.1g,"2Y",u.1k,u.1C,u.1G,u.1K,u.1O,u.1S,u.1W,u.20,u.26,u.2f,u.2a);$1q=7.X(u.1h,"2Z",u.1l,u.1D,u.1H,u.1L,u.1P,u.1T,u.1X,u.21,u.27,u.2g,u.2b);v.U=E;7.2j=30(8(){a.1u()},1v);a.1u()};7.1t=8(a){6 b=a.1w("/").2k(" ").1w(":").2k(" ").1w(" ");6 y=O(b[0],10);6 m=O(b[1],10)-1;6 d=O(b[2],10);6 h=O(b[3],10);6 i=O(b[4],10)-u.1y*P;6 s=O(b[5],10);a=1n 2l(y,m,d,h,i,s,0).2m();1m a};7.X=8(a,b,c,d,e,f,g,i,j,k,l,m,n){6 o=31;I(a){6 w,h,Y,Z;6 x,y,r;6 p,$J;o=$(\'<Q 12="\'+b+\' V">								   <9 12="2n"></9>								   <9 12="K"></9>								   <Q 12="1x">0</Q>								   <Q 12="J"></Q>							   </Q>\');w=c;h=!m?c:(c+m+i);o.1b({13:w,L:h,"T":u.T+"M"});o.1c({"2o":c,"33":d,"2p":e,"2q":g});v.34(o);I(c!=C){Z=H.35((C-c)/2);o.1b("T-2r",Z+"M")}p=o.14(".1x");Y=!m?(c-j):c;p.1b({13:c,L:c,"2s-L":Y+"M","2t-2u":i+"M","2v":k});$J=o.14(".J");Y=!m?(c+i):i;Z=!m?0:(c+m);$J.J(n).1b({13:c,L:c,"2s-L":Y+"M","2t-2u":j+"M","2v":l,"T-2r":Z+"M"});I(D){x=y=c/2;r=x-d/2;6 q=o.14("9.2n")[0].1s("2d");q.9.13=c;q.9.L=c;q.2w=d;q.2x=f;q.2y(0,0,d,d);q.2z();q.2A(x,y,r,0,H.1d*2,N);q.2B();q.2C()}}1m o};7.K=8(a,b,c){6 d=a.1c("2o");6 e=a.1c("2p");6 f=a.1c("2q");6 x,y,r;x=y=d/2;r=x-e/2;6 g=a.14(".1x");g.J(b);I(D){6 h=a.14("9.K")[0].1s("2d");h.9.13=d;h.9.L=d;h.2w=e;h.2x=f;h.2y(0,0,e,e);h.2z();h.2A(x,y,r,(H.1d*2*(b/c))-(H.1d/2),-H.1d/2,N);h.2B();h.2C()}};7.1u=8(){V=1n 2l();A=V.2m()+V.36()*P*1v;W=!u.1z?u.S-A:A-u.R;I(W<0){37(7.2j);W=0;v.U.38(7)}1r=u.S-u.R;B=H.15(1r/(39));7.2D(W);I(u.1e){7.K(z,d,B)}I(u.1f){7.K($1o,h,24)}I(u.1g){7.K($1p,i,P)}I(u.1h){7.K($1q,s,P)}};7.2D=8(a){6 b=H.15(a/1v);s=b%P;i=H.15(b%(2E)/P);h=H.15(b%(2F)/2E);d=H.15(b/2F)}}}})(3a);',62,197,'||||||var|this|function|canvas||||||||||||||||||||||||||||||||||Math|if|text|circle|height|px|true|parseInt|60|div|startDate|endDate|margin|onFinish|time|endTimeDiff|addItem|lh|marginTop|||class|width|find|floor|160|ccc|e8065c|333|666|css|data|PI|showDay|showHour|showMinute|showSecond|dayDiameter|hourDiameter|minuteDiameter|secondDiameter|return|new|hours|minutes|seconds|startTimeDiff|getContext|convertToTime|checkTime|1000|split|count|timeZone|past|dayBgWidth|hourBgWidth|minuteBgWidth|secondBgWidth|dayCircleWidth|hourCircleWidth|minuteCircleWidth|secondCircleWidth|dayBgColor|hourBgColor|minuteBgColor|secondBgColor|dayCircleColor|hourCircleColor|minuteCircleColor|secondCircleColor|dayCounterFontSize|hourCounterFontSize|minuteCounterFontSize|secondCounterFontSize|dayTextFontSize|hourTextFontSize|minuteTextFontSize|secondTextFontSize|dayCounterFontColor|hourCounterFontColor|minuteCounterFontColor|secondCounterFontColor|dayTextFontColor|||hourTextFontColor|minuteTextFontColor|secondTextFontColor|dayText|hourText|minuteText|secondText|dayTextMarginTop||hourTextMarginTop|minuteTextMarginTop|secondTextMarginTop|CircularCountDown|init|intervalId|join|Date|getTime|bg|diameter|circleWidth|circleColor|top|line|font|size|color|lineWidth|strokeStyle|clearRect|beginPath|arc|stroke|closePath|timeFormat|3600|86400|fn|circularCountdown|false|DAYS|HOURS|MINUTES|SECONDS|extend|each|addClass|circular|countdown|document|createElement|typeof|max|day|hour|minute|second|setInterval|null||bgWidth|append|round|getTimezoneOffset|clearInterval|call|86400000|jQuery'.split('|'),0,{}))


/*

THE FINAL COUNTDOWN
Countdown timer plugin by Ryan Tanner

documentation in process

options:

- Hours, Minutes, and Seconds will display the hours/minutes/seconds left AFTER removing the larger increment values 
    (so displaying 26 hours in days/hours would display as 1 day, 2 hours)
- TotalHours, TotalMinutes, and TotalSeconds will display the total time remaining in hours/minutes/seconds 
    (so displaying 26 hours in days/hours would display as 1 day, 26 hours)
    -- if, for example, hoursWrap and totalHoursWrap were both set to the same element, the totalHoursWrap value would override

- total/days/hours...Wrap is the jQuery selector for the element in which the calculated values will be inserted 
    (if multiple elements returned, will use first)

- addLeadingZero when set to true will give days/hours/minutes/seconds a leading zero if only one digit

- updateAsync when set to true will update the timer at a set interval

- intervalDuration, when updateAsync is set to true, is the duration at which the timer will be updated
    (in ms, so a value of 1000 would cause the timer to update every second)

- initialized() takes a callback function that processes when the timer is done initializing

- countdownComplete() takes a callback function that processes when the timer hits 0 time remaining

*/



(function($){

    jQuery.fn.countdownInit = function(cdTo, options){
        //console.log('end date: ' + cdTo);
        var opts = jQuery.extend({}, jQuery.fn.countdownInit.defaults, options);
        var timeRem = getTimeRemaining(cdTo, opts.addLeadingZero);
        if (timeRem.total <= 0){
            opts.countdownComplete();
            return;
        }
        //console.log('time remaining: ' + timeRem.total);
        var con = this;
        con.find(opts.totalWrap).text(timeRem.total);
        con.find(opts.daysWrap).text(timeRem.days);
        con.find(opts.hoursWrap).text(timeRem.hours);
        con.find(opts.minutesWrap).text(timeRem.minutes);
        con.find(opts.secondsWrap).text(timeRem.seconds);
        con.find(opts.totalHoursWrap).text(timeRem.totalHours);
        con.find(opts.totalMinutesWrap).text(timeRem.totalMinutes);
        con.find(opts.totalSecondsWrap).text(timeRem.totalSeconds);
        if (opts.updateAsync){
            var interval = setInterval(function(){
                timeRem = getTimeRemaining(cdTo, opts.addLeadingZero);
                con.find(opts.totalWrap).text(timeRem.total);
                con.find(opts.daysWrap).text(timeRem.days);
                con.find(opts.hoursWrap).text(timeRem.hours);
                con.find(opts.minutesWrap).text(timeRem.minutes);
                con.find(opts.secondsWrap).text(timeRem.seconds);
                con.find(opts.totalHoursWrap).text(timeRem.totalHours);
                con.find(opts.totalMinutesWrap).text(timeRem.totalMinutes);
                con.find(opts.totalSecondsWrap).text(timeRem.totalSeconds);
                if (timeRem.total <= 0){
                    clearInterval(interval);
                    opts.countdownComplete();
                }
            }, opts.intervalDuration);
        }
        opts.initialized();
    };

    jQuery.fn.countdownInit.defaults = {
        totalWrap: '.total',
        daysWrap: '.days',
        hoursWrap: '.hours',
        minutesWrap: '.minutes',
        secondsWrap: '.seconds',
        totalHoursWrap: '.totalHours',
        totalMinutesWrap: '.totalMinutes',
        totalSecondsWrap: '.totalSeconds',
        addLeadingZero: true,
        updateAsync: true,
        intervalDuration: 1000,
        initialized: function(){},
        countdownComplete: function(){}
    };

}(jQuery));

//return object of time from now to date/time supplied
function getTimeRemaining(endTime, addLeadingZero){
    var t = Date.parse(endTime) - Date.parse(new Date());
    var seconds = addLeadingZero ? leadingZero(Math.floor( (t/1000) % 60 )) : Math.floor( (t/1000) % 60 );
    var minutes = addLeadingZero ? leadingZero(Math.floor( (t/1000/60) % 60 )) : Math.floor( (t/1000/60) % 60 );
    var hours = addLeadingZero ? leadingZero(Math.floor( (t/(1000*60*60)) % 24 )) : Math.floor( (t/(1000*60*60)) % 24 );
    var totalSeconds = addLeadingZero ? leadingZero(Math.floor( (t/1000) )) : Math.floor( (t/1000) );
    var totalMinutes = addLeadingZero ? leadingZero(Math.floor( (t/1000/60) )) : Math.floor( (t/1000/60) );
    var totalHours = addLeadingZero ? leadingZero(Math.floor( (t/(1000*60*60)) )) : Math.floor( (t/(1000*60*60)) );
    var days = addLeadingZero ? leadingZero(Math.floor( t/(1000*60*60*24) )) : Math.floor( t/(1000*60*60*24) );
    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'totalHours': totalHours,
        'totalMinutes': totalMinutes,
        'totalSeconds': totalSeconds
    };
}

//supply value; if value is only one character, prepend 0;
//use case: time values for minutes/seconds
function leadingZero(value){
    value = value.toString();
    if (value.length == 1){
        value = "0" + value;
    }
    return value;
}