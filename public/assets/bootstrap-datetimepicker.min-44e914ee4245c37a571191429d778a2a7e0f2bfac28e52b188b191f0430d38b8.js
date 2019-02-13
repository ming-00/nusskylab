!function(e){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],e);else if("object"==typeof exports)e(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";e(jQuery,moment)}}(function(ue,fe){"use strict";if(!fe)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var a=function(i,p){var a,o,n,t,r,c={},d=fe().startOf("d"),s=d.clone(),l=!0,u=!1,f=!1,h=0,m=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],y=["days","months","years","decades"],b=["top","bottom","auto"],w=["left","right","auto"],g=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},k={},C=function(e){if("string"!=typeof e||1<e.length)throw new TypeError("isEnabled expects a single character string parameter");switch(e){case"y":return-1!==n.indexOf("Y");case"M":return-1!==n.indexOf("M");case"d":return-1!==n.toLowerCase().indexOf("d");case"h":case"H":return-1!==n.toLowerCase().indexOf("h");case"m":return-1!==n.indexOf("m");case"s":return-1!==n.indexOf("s");default:return!1}},x=function(){return C("h")||C("m")||C("s")},D=function(){return C("y")||C("M")||C("d")},T=function(){var e=ue("<thead>").append(ue("<tr>").append(ue("<th>").addClass("prev").attr("data-action","previous").append(ue("<span>").addClass(p.icons.previous))).append(ue("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",p.calendarWeeks?"6":"5")).append(ue("<th>").addClass("next").attr("data-action","next").append(ue("<span>").addClass(p.icons.next)))),t=ue("<tbody>").append(ue("<tr>").append(ue("<td>").attr("colspan",p.calendarWeeks?"8":"7")));return[ue("<div>").addClass("datepicker-days").append(ue("<table>").addClass("table-condensed").append(e).append(ue("<tbody>"))),ue("<div>").addClass("datepicker-months").append(ue("<table>").addClass("table-condensed").append(e.clone()).append(t.clone())),ue("<div>").addClass("datepicker-years").append(ue("<table>").addClass("table-condensed").append(e.clone()).append(t.clone())),ue("<div>").addClass("datepicker-decades").append(ue("<table>").addClass("table-condensed").append(e.clone()).append(t.clone()))]},M=function(){var e=ue("<tr>"),t=ue("<tr>"),a=ue("<tr>");return C("h")&&(e.append(ue("<td>").append(ue("<a>").attr({href:"#",tabindex:"-1",title:"Increment Hour"}).addClass("btn").attr("data-action","incrementHours").append(ue("<span>").addClass(p.icons.up)))),t.append(ue("<td>").append(ue("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:"Pick Hour"}).attr("data-action","showHours"))),a.append(ue("<td>").append(ue("<a>").attr({href:"#",tabindex:"-1",title:"Decrement Hour"}).addClass("btn").attr("data-action","decrementHours").append(ue("<span>").addClass(p.icons.down))))),C("m")&&(C("h")&&(e.append(ue("<td>").addClass("separator")),t.append(ue("<td>").addClass("separator").html(":")),a.append(ue("<td>").addClass("separator"))),e.append(ue("<td>").append(ue("<a>").attr({href:"#",tabindex:"-1",title:"Increment Minute"}).addClass("btn").attr("data-action","incrementMinutes").append(ue("<span>").addClass(p.icons.up)))),t.append(ue("<td>").append(ue("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:"Pick Minute"}).attr("data-action","showMinutes"))),a.append(ue("<td>").append(ue("<a>").attr({href:"#",tabindex:"-1",title:"Decrement Minute"}).addClass("btn").attr("data-action","decrementMinutes").append(ue("<span>").addClass(p.icons.down))))),C("s")&&(C("m")&&(e.append(ue("<td>").addClass("separator")),t.append(ue("<td>").addClass("separator").html(":")),a.append(ue("<td>").addClass("separator"))),e.append(ue("<td>").append(ue("<a>").attr({href:"#",tabindex:"-1",title:"Increment Second"}).addClass("btn").attr("data-action","incrementSeconds").append(ue("<span>").addClass(p.icons.up)))),t.append(ue("<td>").append(ue("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:"Pick Second"}).attr("data-action","showSeconds"))),a.append(ue("<td>").append(ue("<a>").attr({href:"#",tabindex:"-1",title:"Decrement Second"}).addClass("btn").attr("data-action","decrementSeconds").append(ue("<span>").addClass(p.icons.down))))),o||(e.append(ue("<td>").addClass("separator")),t.append(ue("<td>").append(ue("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:"Toggle Period"}))),a.append(ue("<td>").addClass("separator"))),ue("<div>").addClass("timepicker-picker").append(ue("<table>").addClass("table-condensed").append([e,t,a]))},O=function(){var e=ue("<div>").addClass("timepicker-hours").append(ue("<table>").addClass("table-condensed")),t=ue("<div>").addClass("timepicker-minutes").append(ue("<table>").addClass("table-condensed")),a=ue("<div>").addClass("timepicker-seconds").append(ue("<table>").addClass("table-condensed")),n=[M()];return C("h")&&n.push(e),C("m")&&n.push(t),C("s")&&n.push(a),n},S=function(){var e=[];return p.showTodayButton&&e.push(ue("<td>").append(ue("<a>").attr({"data-action":"today",title:p.tooltips.today}).append(ue("<span>").addClass(p.icons.today)))),!p.sideBySide&&D()&&x()&&e.push(ue("<td>").append(ue("<a>").attr({"data-action":"togglePicker",title:"Select Time"}).append(ue("<span>").addClass(p.icons.time)))),p.showClear&&e.push(ue("<td>").append(ue("<a>").attr({"data-action":"clear",title:p.tooltips.clear}).append(ue("<span>").addClass(p.icons.clear)))),p.showClose&&e.push(ue("<td>").append(ue("<a>").attr({"data-action":"close",title:p.tooltips.close}).append(ue("<span>").addClass(p.icons.close)))),ue("<table>").addClass("table-condensed").append(ue("<tbody>").append(ue("<tr>").append(e)))},P=function(){var e=ue("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),t=ue("<div>").addClass("datepicker").append(T()),a=ue("<div>").addClass("timepicker").append(O()),n=ue("<ul>").addClass("list-unstyled"),r=ue("<li>").addClass("picker-switch"+(p.collapse?" accordion-toggle":"")).append(S());return p.inline&&e.removeClass("dropdown-menu"),o&&e.addClass("usetwentyfour"),C("s")&&!o&&e.addClass("wider"),p.sideBySide&&D()&&x()?(e.addClass("timepicker-sbs"),"top"===p.toolbarPlacement&&e.append(r),e.append(ue("<div>").addClass("row").append(t.addClass("col-md-6")).append(a.addClass("col-md-6"))),"bottom"===p.toolbarPlacement&&e.append(r),e):("top"===p.toolbarPlacement&&n.append(r),D()&&n.append(ue("<li>").addClass(p.collapse&&x()?"collapse in":"").append(t)),"default"===p.toolbarPlacement&&n.append(r),x()&&n.append(ue("<li>").addClass(p.collapse&&D()?"collapse":"").append(a)),"bottom"===p.toolbarPlacement&&n.append(r),e.append(n))},e=function(){var a,n={};return(a=i.is("input")||p.inline?i.data():i.find("input").data()).dateOptions&&a.dateOptions instanceof Object&&(n=ue.extend(!0,n,a.dateOptions)),ue.each(p,function(e){var t="date"+e.charAt(0).toUpperCase()+e.slice(1);void 0!==a[t]&&(n[e]=a[t])}),n},E=function(){var e,t=(u||i).position(),a=(u||i).offset(),n=p.widgetPositioning.vertical,r=p.widgetPositioning.horizontal;if(p.widgetParent)e=p.widgetParent.append(f);else if(i.is("input"))e=i.after(f).parent();else{if(p.inline)return void(e=i.append(f));(e=i).children().first().after(f)}if("auto"===n&&(n=a.top+1.5*f.height()>=ue(window).height()+ue(window).scrollTop()&&f.height()+i.outerHeight()<a.top?"top":"bottom"),"auto"===r&&(r=e.width()<a.left+f.outerWidth()/2&&a.left+f.outerWidth()>ue(window).width()?"right":"left"),"top"===n?f.addClass("top").removeClass("bottom"):f.addClass("bottom").removeClass("top"),"right"===r?f.addClass("pull-right"):f.removeClass("pull-right"),"relative"!==e.css("position")&&(e=e.parents().filter(function(){return"relative"===ue(this).css("position")}).first()),0===e.length)throw new Error("datetimepicker component should be placed within a relative positioned container");f.css({top:"top"===n?"auto":t.top+i.outerHeight(),bottom:"top"===n?t.top+i.outerHeight():"auto",left:"left"===r?e===i?0:t.left:"auto",right:"left"===r?"auto":e.outerWidth()-i.outerWidth()-(e===i?0:t.left)})},I=function(e){"dp.change"===e.type&&(e.date&&e.date.isSame(e.oldDate)||!e.date&&!e.oldDate)||i.trigger(e)},H=function(e){"y"===e&&(e="YYYY"),I({type:"dp.update",change:e,viewDate:s.clone()})},Y=function(e){f&&(e&&(r=Math.max(h,Math.min(3,r+e))),f.find(".datepicker > div").hide().filter(".datepicker-"+m[r].clsName).show())},q=function(){var e=ue("<tr>"),t=s.clone().startOf("w").startOf("d");for(!0===p.calendarWeeks&&e.append(ue("<th>").addClass("cw").text("#"));t.isBefore(s.clone().endOf("w"));)e.append(ue("<th>").addClass("dow").text(t.format("dd"))),t.add(1,"d");f.find(".datepicker-days thead").append(e)},B=function(e){return!0===p.disabledDates[e.format("YYYY-MM-DD")]},j=function(e){return!0===p.enabledDates[e.format("YYYY-MM-DD")]},F=function(e){return!0===p.disabledHours[e.format("H")]},L=function(e){return!0===p.enabledHours[e.format("H")]},W=function(e,t){if(!e.isValid())return!1;if(p.disabledDates&&"d"===t&&B(e))return!1;if(p.enabledDates&&"d"===t&&!j(e))return!1;if(p.minDate&&e.isBefore(p.minDate,t))return!1;if(p.maxDate&&e.isAfter(p.maxDate,t))return!1;if(p.daysOfWeekDisabled&&"d"===t&&-1!==p.daysOfWeekDisabled.indexOf(e.day()))return!1;if(p.disabledHours&&("h"===t||"m"===t||"s"===t)&&F(e))return!1;if(p.enabledHours&&("h"===t||"m"===t||"s"===t)&&!L(e))return!1;if(p.disabledTimeIntervals&&("h"===t||"m"===t||"s"===t)){var a=!1;if(ue.each(p.disabledTimeIntervals,function(){return e.isBetween(this[0],this[1])?!(a=!0):void 0}),a)return!1}return!0},A=function(){for(var e=[],t=s.clone().startOf("y").startOf("d");t.isSame(s,"y");)e.push(ue("<span>").attr("data-action","selectMonth").addClass("month").text(t.format("MMM"))),t.add(1,"M");f.find(".datepicker-months td").empty().append(e)},z=function(){var e=f.find(".datepicker-months"),t=e.find("th"),a=e.find("tbody").find("span");t.eq(0).find("span").attr("title",p.tooltips.prevYear),t.eq(1).attr("title",p.tooltips.selectYear),t.eq(2).find("span").attr("title",p.tooltips.nextYear),e.find(".disabled").removeClass("disabled"),W(s.clone().subtract(1,"y"),"y")||t.eq(0).addClass("disabled"),t.eq(1).text(s.year()),W(s.clone().add(1,"y"),"y")||t.eq(2).addClass("disabled"),a.removeClass("active"),d.isSame(s,"y")&&!l&&a.eq(d.month()).addClass("active"),a.each(function(e){W(s.clone().month(e),"M")||ue(this).addClass("disabled")})},N=function(){var e=f.find(".datepicker-years"),t=e.find("th"),a=s.clone().subtract(5,"y"),n=s.clone().add(6,"y"),r="";for(t.eq(0).find("span").attr("title",p.tooltips.nextDecade),t.eq(1).attr("title",p.tooltips.selectDecade),t.eq(2).find("span").attr("title",p.tooltips.prevDecade),e.find(".disabled").removeClass("disabled"),p.minDate&&p.minDate.isAfter(a,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(a.year()+"-"+n.year()),p.maxDate&&p.maxDate.isBefore(n,"y")&&t.eq(2).addClass("disabled");!a.isAfter(n,"y");)r+='<span data-action="selectYear" class="year'+(a.isSame(d,"y")&&!l?" active":"")+(W(a,"y")?"":" disabled")+'">'+a.year()+"</span>",a.add(1,"y");e.find("td").html(r)},V=function(){var e=f.find(".datepicker-decades"),t=e.find("th"),a=fe(s.isBefore(fe({y:1999}))?{y:1899}:{y:1999}),n=a.clone().add(100,"y"),r="";for(t.eq(0).find("span").attr("title",p.tooltips.prevCentury),t.eq(2).find("span").attr("title",p.tooltips.nextCentury),e.find(".disabled").removeClass("disabled"),(a.isSame(fe({y:1900}))||p.minDate&&p.minDate.isAfter(a,"y"))&&t.eq(0).addClass("disabled"),t.eq(1).text(a.year()+"-"+n.year()),(a.isSame(fe({y:2e3}))||p.maxDate&&p.maxDate.isBefore(n,"y"))&&t.eq(2).addClass("disabled");!a.isAfter(n,"y");)r+='<span data-action="selectDecade" class="decade'+(a.isSame(d,"y")?" active":"")+(W(a,"y")?"":" disabled")+'" data-selection="'+(a.year()+6)+'">'+(a.year()+1)+" - "+(a.year()+12)+"</span>",a.add(12,"y");r+="<span></span><span></span><span></span>",e.find("td").html(r)},R=function(){var e,t,a,n,r=f.find(".datepicker-days"),i=r.find("th"),o=[];if(D()){for(i.eq(0).find("span").attr("title",p.tooltips.prevMonth),i.eq(1).attr("title",p.tooltips.selectMonth),i.eq(2).find("span").attr("title",p.tooltips.nextMonth),r.find(".disabled").removeClass("disabled"),i.eq(1).text(s.format(p.dayViewHeaderFormat)),W(s.clone().subtract(1,"M"),"M")||i.eq(0).addClass("disabled"),W(s.clone().add(1,"M"),"M")||i.eq(2).addClass("disabled"),e=s.clone().startOf("M").startOf("w").startOf("d"),n=0;n<42;n++)0===e.weekday()&&(t=ue("<tr>"),p.calendarWeeks&&t.append('<td class="cw">'+e.week()+"</td>"),o.push(t)),a="",e.isBefore(s,"M")&&(a+=" old"),e.isAfter(s,"M")&&(a+=" new"),e.isSame(d,"d")&&!l&&(a+=" active"),W(e,"d")||(a+=" disabled"),e.isSame(fe(),"d")&&(a+=" today"),(0===e.day()||6===e.day())&&(a+=" weekend"),t.append('<td data-action="selectDay" data-day="'+e.format("L")+'" class="day'+a+'">'+e.date()+"</td>"),e.add(1,"d");r.find("tbody").empty().append(o),z(),N(),V()}},Q=function(){var e=f.find(".timepicker-hours table"),t=s.clone().startOf("d"),a=[],n=ue("<tr>");for(11<s.hour()&&!o&&t.hour(12);t.isSame(s,"d")&&(o||s.hour()<12&&t.hour()<12||11<s.hour());)t.hour()%4==0&&(n=ue("<tr>"),a.push(n)),n.append('<td data-action="selectHour" class="hour'+(W(t,"h")?"":" disabled")+'">'+t.format(o?"HH":"hh")+"</td>"),t.add(1,"h");e.empty().append(a)},U=function(){for(var e=f.find(".timepicker-minutes table"),t=s.clone().startOf("h"),a=[],n=ue("<tr>"),r=1===p.stepping?5:p.stepping;s.isSame(t,"h");)t.minute()%(4*r)==0&&(n=ue("<tr>"),a.push(n)),n.append('<td data-action="selectMinute" class="minute'+(W(t,"m")?"":" disabled")+'">'+t.format("mm")+"</td>"),t.add(r,"m");e.empty().append(a)},G=function(){for(var e=f.find(".timepicker-seconds table"),t=s.clone().startOf("m"),a=[],n=ue("<tr>");s.isSame(t,"m");)t.second()%20==0&&(n=ue("<tr>"),a.push(n)),n.append('<td data-action="selectSecond" class="second'+(W(t,"s")?"":" disabled")+'">'+t.format("ss")+"</td>"),t.add(5,"s");e.empty().append(a)},J=function(){var e,t,a=f.find(".timepicker span[data-time-component]");o||(e=f.find(".timepicker [data-action=togglePeriod]"),t=d.clone().add(12<=d.hours()?-12:12,"h"),e.text(d.format("A")),W(t,"h")?e.removeClass("disabled"):e.addClass("disabled")),a.filter("[data-time-component=hours]").text(d.format(o?"HH":"hh")),a.filter("[data-time-component=minutes]").text(d.format("mm")),a.filter("[data-time-component=seconds]").text(d.format("ss")),Q(),U(),G()},K=function(){f&&(R(),J())},X=function(e){var t=l?null:d;return e?(e=e.clone().locale(p.locale),1!==p.stepping&&e.minutes(Math.round(e.minutes()/p.stepping)*p.stepping%60).seconds(0),void(W(e)?(s=(d=e).clone(),a.val(d.format(n)),i.data("date",d.format(n)),l=!1,K(),I({type:"dp.change",date:d.clone(),oldDate:t})):(p.keepInvalid||a.val(l?"":d.format(n)),I({type:"dp.error",date:e})))):(l=!0,a.val(""),i.data("date",""),I({type:"dp.change",date:!1,oldDate:t}),void K())},Z=function(){var t=!1;return f&&(f.find(".collapse").each(function(){var e=ue(this).data("collapse");return!e||!e.transitioning||!(t=!0)}),t||(u&&u.hasClass("btn")&&u.toggleClass("active"),f.hide(),ue(window).off("resize",E),f.off("click","[data-action]"),f.off("mousedown",!1),f.remove(),f=!1,I({type:"dp.hide",date:d.clone()}),a.blur())),c},$=function(){X(null)},_={next:function(){var e=m[r].navFnc;s.add(m[r].navStep,e),R(),H(e)},previous:function(){var e=m[r].navFnc;s.subtract(m[r].navStep,e),R(),H(e)},pickerSwitch:function(){Y(1)},selectMonth:function(e){var t=ue(e.target).closest("tbody").find("span").index(ue(e.target));s.month(t),r===h?(X(d.clone().year(s.year()).month(s.month())),p.inline||Z()):(Y(-1),R()),H("M")},selectYear:function(e){var t=parseInt(ue(e.target).text(),10)||0;s.year(t),r===h?(X(d.clone().year(s.year())),p.inline||Z()):(Y(-1),R()),H("YYYY")},selectDecade:function(e){var t=parseInt(ue(e.target).data("selection"),10)||0;s.year(t),r===h?(X(d.clone().year(s.year())),p.inline||Z()):(Y(-1),R()),H("YYYY")},selectDay:function(e){var t=s.clone();ue(e.target).is(".old")&&t.subtract(1,"M"),ue(e.target).is(".new")&&t.add(1,"M"),X(t.date(parseInt(ue(e.target).text(),10))),x()||p.keepOpen||p.inline||Z()},incrementHours:function(){var e=d.clone().add(1,"h");W(e,"h")&&X(e)},incrementMinutes:function(){var e=d.clone().add(p.stepping,"m");W(e,"m")&&X(e)},incrementSeconds:function(){var e=d.clone().add(1,"s");W(e,"s")&&X(e)},decrementHours:function(){var e=d.clone().subtract(1,"h");W(e,"h")&&X(e)},decrementMinutes:function(){var e=d.clone().subtract(p.stepping,"m");W(e,"m")&&X(e)},decrementSeconds:function(){var e=d.clone().subtract(1,"s");W(e,"s")&&X(e)},togglePeriod:function(){X(d.clone().add(12<=d.hours()?-12:12,"h"))},togglePicker:function(e){var t,a=ue(e.target),n=a.closest("ul"),r=n.find(".in"),i=n.find(".collapse:not(.in)");if(r&&r.length){if((t=r.data("collapse"))&&t.transitioning)return;r.collapse?(r.collapse("hide"),i.collapse("show")):(r.removeClass("in"),i.addClass("in")),a.is("span")?a.toggleClass(p.icons.time+" "+p.icons.date):a.find("span").toggleClass(p.icons.time+" "+p.icons.date)}},showPicker:function(){f.find(".timepicker > div:not(.timepicker-picker)").hide(),f.find(".timepicker .timepicker-picker").show()},showHours:function(){f.find(".timepicker .timepicker-picker").hide(),f.find(".timepicker .timepicker-hours").show()},showMinutes:function(){f.find(".timepicker .timepicker-picker").hide(),f.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){f.find(".timepicker .timepicker-picker").hide(),f.find(".timepicker .timepicker-seconds").show()},selectHour:function(e){var t=parseInt(ue(e.target).text(),10);o||(12<=d.hours()?12!==t&&(t+=12):12===t&&(t=0)),X(d.clone().hours(t)),_.showPicker.call(c)},selectMinute:function(e){X(d.clone().minutes(parseInt(ue(e.target).text(),10))),_.showPicker.call(c)},selectSecond:function(e){X(d.clone().seconds(parseInt(ue(e.target).text(),10))),_.showPicker.call(c)},clear:$,today:function(){W(fe(),"d")&&X(fe())},close:Z},ee=function(e){return ue(e.currentTarget).is(".disabled")||_[ue(e.currentTarget).data("action")].apply(c,arguments),!1},te=function(){var e,t={year:function(e){return e.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(e){return e.date(1).hours(0).seconds(0).minutes(0)},day:function(e){return e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}};return a.prop("disabled")||!p.ignoreReadonly&&a.prop("readonly")||f||(void 0!==a.val()&&0!==a.val().trim().length?X(ne(a.val().trim())):p.useCurrent&&l&&(a.is("input")&&0===a.val().trim().length||p.inline)&&(e=fe(),"string"==typeof p.useCurrent&&(e=t[p.useCurrent](e)),X(e)),f=P(),q(),A(),f.find(".timepicker-hours").hide(),f.find(".timepicker-minutes").hide(),f.find(".timepicker-seconds").hide(),K(),Y(),ue(window).on("resize",E),f.on("click","[data-action]",ee),f.on("mousedown",!1),u&&u.hasClass("btn")&&u.toggleClass("active"),f.show(),E(),p.focusOnShow&&!a.is(":focus")&&a.focus(),I({type:"dp.show"})),c},ae=function(){return f?Z():te()},ne=function(e){return(e=void 0===p.parseInputDate?fe.isMoment(e)||e instanceof Date?fe(e):fe(e,t,p.useStrict):p.parseInputDate(e)).locale(p.locale),e},re=function(e){var t,a,n,r,i=null,o=[],d={},s=e.which,l="p";for(t in k[s]=l,k)k.hasOwnProperty(t)&&k[t]===l&&(o.push(t),parseInt(t,10)!==s&&(d[t]=!0));for(t in p.keyBinds)if(p.keyBinds.hasOwnProperty(t)&&"function"==typeof p.keyBinds[t]&&((n=t.split(" ")).length===o.length&&v[s]===n[n.length-1])){for(r=!0,a=n.length-2;0<=a;a--)if(!(v[n[a]]in d)){r=!1;break}if(r){i=p.keyBinds[t];break}}i&&(i.call(c,f),e.stopPropagation(),e.preventDefault())},ie=function(e){k[e.which]="r",e.stopPropagation(),e.preventDefault()},oe=function(e){var t=ue(e.target).val().trim(),a=t?ne(t):null;return X(a),e.stopImmediatePropagation(),!1},de=function(){a.on({change:oe,blur:p.debug?"":Z,keydown:re,keyup:ie,focus:p.allowInputToggle?te:""}),i.is("input")?a.on({focus:te}):u&&(u.on("click",ae),u.on("mousedown",!1))},se=function(){a.off({change:oe,blur:blur,keydown:re,keyup:ie,focus:p.allowInputToggle?Z:""}),i.is("input")?a.off({focus:te}):u&&(u.off("click",ae),u.off("mousedown",!1))},le=function(e){var t={};return ue.each(e,function(){var e=ne(this);e.isValid()&&(t[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(t).length&&t},pe=function(e){var t={};return ue.each(e,function(){t[this]=!0}),!!Object.keys(t).length&&t},ce=function(){var e=p.format||"L LT";n=e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return(d.localeData().longDateFormat(e)||e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return d.localeData().longDateFormat(e)||e})}),(t=p.extraFormats?p.extraFormats.slice():[]).indexOf(e)<0&&t.indexOf(n)<0&&t.push(n),o=n.toLowerCase().indexOf("a")<1&&n.replace(/\[.*?\]/g,"").indexOf("h")<1,C("y")&&(h=2),C("M")&&(h=1),C("d")&&(h=0),r=Math.max(h,r),l||X(d)};if(c.destroy=function(){Z(),se(),i.removeData("DateTimePicker"),i.removeData("date")},c.toggle=ae,c.show=te,c.hide=Z,c.disable=function(){return Z(),u&&u.hasClass("btn")&&u.addClass("disabled"),a.prop("disabled",!0),c},c.enable=function(){return u&&u.hasClass("btn")&&u.removeClass("disabled"),a.prop("disabled",!1),c},c.ignoreReadonly=function(e){if(0===arguments.length)return p.ignoreReadonly;if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");return p.ignoreReadonly=e,c},c.options=function(e){if(0===arguments.length)return ue.extend(!0,{},p);if(!(e instanceof Object))throw new TypeError("options() options parameter should be an object");return ue.extend(!0,p,e),ue.each(p,function(e,t){if(void 0===c[e])throw new TypeError("option "+e+" is not recognized!");c[e](t)}),c},c.date=function(e){if(0===arguments.length)return l?null:d.clone();if(!(null===e||"string"==typeof e||fe.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return X(null===e?null:ne(e)),c},c.format=function(e){if(0===arguments.length)return p.format;if("string"!=typeof e&&("boolean"!=typeof e||!1!==e))throw new TypeError("format() expects a sting or boolean:false parameter "+e);return p.format=e,n&&ce(),c},c.dayViewHeaderFormat=function(e){if(0===arguments.length)return p.dayViewHeaderFormat;if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return p.dayViewHeaderFormat=e,c},c.extraFormats=function(e){if(0===arguments.length)return p.extraFormats;if(!1!==e&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return p.extraFormats=e,t&&ce(),c},c.disabledDates=function(e){if(0===arguments.length)return p.disabledDates?ue.extend({},p.disabledDates):p.disabledDates;if(!e)return p.disabledDates=!1,K(),c;if(!(e instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return p.disabledDates=le(e),p.enabledDates=!1,K(),c},c.enabledDates=function(e){if(0===arguments.length)return p.enabledDates?ue.extend({},p.enabledDates):p.enabledDates;if(!e)return p.enabledDates=!1,K(),c;if(!(e instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return p.enabledDates=le(e),p.disabledDates=!1,K(),c},c.daysOfWeekDisabled=function(e){if(0===arguments.length)return p.daysOfWeekDisabled.splice(0);if("boolean"==typeof e&&!e)return p.daysOfWeekDisabled=!1,K(),c;if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(p.daysOfWeekDisabled=e.reduce(function(e,t){return 6<(t=parseInt(t,10))||t<0||isNaN(t)||-1===e.indexOf(t)&&e.push(t),e},[]).sort(),p.useCurrent&&!p.keepInvalid){for(var t=0;!W(d,"d");){if(d.add(1,"d"),7===t)throw"Tried 7 times to find a valid date";t++}X(d)}return K(),c},c.maxDate=function(e){if(0===arguments.length)return p.maxDate?p.maxDate.clone():p.maxDate;if("boolean"==typeof e&&!1===e)return p.maxDate=!1,K(),c;"string"==typeof e&&("now"===e||"moment"===e)&&(e=fe());var t=ne(e);if(!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e);if(p.minDate&&t.isBefore(p.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+t.format(n));return p.maxDate=t,p.useCurrent&&!p.keepInvalid&&d.isAfter(e)&&X(p.maxDate),s.isAfter(t)&&(s=t.clone().subtract(p.stepping,"m")),K(),c},c.minDate=function(e){if(0===arguments.length)return p.minDate?p.minDate.clone():p.minDate;if("boolean"==typeof e&&!1===e)return p.minDate=!1,K(),c;"string"==typeof e&&("now"===e||"moment"===e)&&(e=fe());var t=ne(e);if(!t.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e);if(p.maxDate&&t.isAfter(p.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+t.format(n));return p.minDate=t,p.useCurrent&&!p.keepInvalid&&d.isBefore(e)&&X(p.minDate),s.isBefore(t)&&(s=t.clone().add(p.stepping,"m")),K(),c},c.defaultDate=function(e){if(0===arguments.length)return p.defaultDate?p.defaultDate.clone():p.defaultDate;if(!e)return p.defaultDate=!1,c;"string"==typeof e&&("now"===e||"moment"===e)&&(e=fe());var t=ne(e);if(!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e);if(!W(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return p.defaultDate=t,(p.defaultDate&&p.inline||""===a.val().trim()&&void 0===a.attr("placeholder"))&&X(p.defaultDate),c},c.locale=function(e){if(0===arguments.length)return p.locale;if(!fe.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!");return p.locale=e,d.locale(p.locale),s.locale(p.locale),n&&ce(),f&&(Z(),te()),c},c.stepping=function(e){return 0===arguments.length?p.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),p.stepping=e,c)},c.useCurrent=function(e){var t=["year","month","day","hour","minute"];if(0===arguments.length)return p.useCurrent;if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof e&&-1===t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "));return p.useCurrent=e,c},c.collapse=function(e){if(0===arguments.length)return p.collapse;if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter");return p.collapse===e||(p.collapse=e,f&&(Z(),te())),c},c.icons=function(e){if(0===arguments.length)return ue.extend({},p.icons);if(!(e instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return ue.extend(p.icons,e),f&&(Z(),te()),c},c.tooltips=function(e){if(0===arguments.length)return ue.extend({},p.tooltips);if(!(e instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return ue.extend(p.tooltips,e),f&&(Z(),te()),c},c.useStrict=function(e){if(0===arguments.length)return p.useStrict;if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter");return p.useStrict=e,c},c.sideBySide=function(e){if(0===arguments.length)return p.sideBySide;if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter");return p.sideBySide=e,f&&(Z(),te()),c},c.viewMode=function(e){if(0===arguments.length)return p.viewMode;if("string"!=typeof e)throw new TypeError("viewMode() expects a string parameter");if(-1===y.indexOf(e))throw new TypeError("viewMode() parameter must be one of ("+y.join(", ")+") value");return p.viewMode=e,r=Math.max(y.indexOf(e),h),Y(),c},c.toolbarPlacement=function(e){if(0===arguments.length)return p.toolbarPlacement;if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===g.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of ("+g.join(", ")+") value");return p.toolbarPlacement=e,f&&(Z(),te()),c},c.widgetPositioning=function(e){if(0===arguments.length)return ue.extend({},p.widgetPositioning);if("[object Object]"!=={}.toString.call(e))throw new TypeError("widgetPositioning() expects an object variable");if(e.horizontal){if("string"!=typeof e.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(e.horizontal=e.horizontal.toLowerCase(),-1===w.indexOf(e.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+w.join(", ")+")");p.widgetPositioning.horizontal=e.horizontal}if(e.vertical){if("string"!=typeof e.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(e.vertical=e.vertical.toLowerCase(),-1===b.indexOf(e.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+b.join(", ")+")");p.widgetPositioning.vertical=e.vertical}return K(),c},c.calendarWeeks=function(e){if(0===arguments.length)return p.calendarWeeks;if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return p.calendarWeeks=e,K(),c},c.showTodayButton=function(e){if(0===arguments.length)return p.showTodayButton;if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");return p.showTodayButton=e,f&&(Z(),te()),c},c.showClear=function(e){if(0===arguments.length)return p.showClear;if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter");return p.showClear=e,f&&(Z(),te()),c},c.widgetParent=function(e){if(0===arguments.length)return p.widgetParent;if("string"==typeof e&&(e=ue(e)),null!==e&&"string"!=typeof e&&!(e instanceof ue))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return p.widgetParent=e,f&&(Z(),te()),c},c.keepOpen=function(e){if(0===arguments.length)return p.keepOpen;if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter");return p.keepOpen=e,c},c.focusOnShow=function(e){if(0===arguments.length)return p.focusOnShow;if("boolean"!=typeof e)throw new TypeError("focusOnShow() expects a boolean parameter");return p.focusOnShow=e,c},c.inline=function(e){if(0===arguments.length)return p.inline;if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter");return p.inline=e,c},c.clear=function(){return $(),c},c.keyBinds=function(e){return p.keyBinds=e,c},c.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter");return p.debug=e,c},c.allowInputToggle=function(e){if(0===arguments.length)return p.allowInputToggle;if("boolean"!=typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter");return p.allowInputToggle=e,c},c.showClose=function(e){if(0===arguments.length)return p.showClose;if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter");return p.showClose=e,c},c.keepInvalid=function(e){if(0===arguments.length)return p.keepInvalid;if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");return p.keepInvalid=e,c},c.datepickerInput=function(e){if(0===arguments.length)return p.datepickerInput;if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter");return p.datepickerInput=e,c},c.parseInputDate=function(e){if(0===arguments.length)return p.parseInputDate;if("function"!=typeof e)throw new TypeError("parseInputDate() sholud be as function");return p.parseInputDate=e,c},c.disabledTimeIntervals=function(e){if(0===arguments.length)return p.disabledTimeIntervals?ue.extend({},p.disabledTimeIntervals):p.disabledTimeIntervals;if(!e)return p.disabledTimeIntervals=!1,K(),c;if(!(e instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return p.disabledTimeIntervals=e,K(),c},c.disabledHours=function(e){if(0===arguments.length)return p.disabledHours?ue.extend({},p.disabledHours):p.disabledHours;if(!e)return p.disabledHours=!1,K(),c;if(!(e instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(p.disabledHours=pe(e),p.enabledHours=!1,p.useCurrent&&!p.keepInvalid){for(var t=0;!W(d,"h");){if(d.add(1,"h"),24===t)throw"Tried 24 times to find a valid date";t++}X(d)}return K(),c},c.enabledHours=function(e){if(0===arguments.length)return p.enabledHours?ue.extend({},p.enabledHours):p.enabledHours;if(!e)return p.enabledHours=!1,K(),c;if(!(e instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(p.enabledHours=pe(e),p.disabledHours=!1,p.useCurrent&&!p.keepInvalid){for(var t=0;!W(d,"h");){if(d.add(1,"h"),
24===t)throw"Tried 24 times to find a valid date";t++}X(d)}return K(),c},c.viewDate=function(e){if(0===arguments.length)return s.clone();if(!e)return s=d.clone(),c;if(!("string"==typeof e||fe.isMoment(e)||e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return s=ne(e),H(),c},i.is("input"))a=i;else if(0===(a=i.find(p.datepickerInput)).size())a=i.find("input");else if(!a.is("input"))throw new Error('CSS class "'+p.datepickerInput+'" cannot be applied to non input element');if(i.hasClass("input-group")&&(u=0===i.find(".datepickerbutton").size()?i.find(".input-group-addon"):i.find(".datepickerbutton")),!p.inline&&!a.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return ue.extend(!0,p,e()),c.options(p),ce(),de(),a.prop("disabled")&&c.disable(),a.is("input")&&0!==a.val().trim().length?X(ne(a.val().trim())):p.defaultDate&&void 0===a.attr("placeholder")&&X(p.defaultDate),p.inline&&te(),c};ue.fn.datetimepicker=function(t){return this.each(function(){var e=ue(this);e.data("DateTimePicker")||(t=ue.extend(!0,{},ue.fn.datetimepicker.defaults,t),e.data("DateTimePicker",a(e,t)))})},ue.fn.datetimepicker.defaults={format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:fe.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m"))}},down:function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m"))}else this.show()},"control up":function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h"))}},"control down":function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h"))}},left:function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d"))}},right:function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d"))}},pageUp:function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var t=this.date()||fe();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(fe())},"delete":function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1}});