!function(e){"use strict";var t=e.tablesorter;t.dates=e.extend({},t.dates,{monthCased:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),t.dates.monthLower=t.dates.monthCased.join(",").toLocaleLowerCase().split(","),t.addParser({id:"month",is:function(){return!1},format:function(r,a){if(r){var n=-1,o=a.config,s=o.ignoreCase?r.toLocaleLowerCase():r;return e.each(t.dates["month"+(o.ignoreCase?"Lower":"Cased")],function(e,t){return 0>n&&s.match(t)?(n=e,!1):void 0}),0>n?r:n}return r},type:"numeric"})}(jQuery);