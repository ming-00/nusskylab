!function(y){"use strict";var a=y.tablesorter=y.tablesorter||{},_=a.buildTable=function(e,o){var r="TABLE"===e.nodeName?y(e):y("<table>").appendTo(e),l=r[0],n=o.widgetOptions=y.extend(!0,{},_.defaults,o.widgetOptions),i=n.build_processing,s=n.build_type,d=n.build_source||o.data,t=function(e){var t=y.type(e),r=e instanceof jQuery;if("function"==typeof i&&(e=i(e,n)),o.data=e,r||"string"===t){if(r||/<\s*\/tr\s*>/.test(e))return _.html(l,e,n);try{if(e=y.parseJSON(e||"null"))return _.object(l,e,n)}catch(d){}}return"array"===t||"string"===t||"array"===s||"csv"===s?_.csv(l,e,n):_.object(l,e,n)};return l.config=o,a.buildTable.hasOwnProperty(s)||""===s?void(d instanceof jQuery?t(y.trim(d.html())):d&&(d.hasOwnProperty("url")||"json"===s)?y.ajax(n.build_source).done(function(e){t(e)}).fail(function(e,t){o.debug&&console.error("aborting build table widget, failed ajax load"),r.html('<tr><td class="error">'+e.status+" "+t+"</td></tr>")}):t(d)):(o.debug&&console.error("aborting build table widget, incorrect build type"),!1)};_.defaults={build_type:"",build_source:"",build_processing:null,build_complete:"tablesorter-build-complete",build_headers:{rows:1,classes:[],text:[],widths:[]},build_footers:{rows:1,classes:[],text:[]},build_numbers:{addColumn:!1,sortable:!1},build_csvStartLine:0,build_csvSeparator:",",build_objectRowKey:"rows",build_objectCellKey:"cells",build_objectHeaderKey:"headers",build_objectFooterKey:"footers"},_.build={colgroup:function(e){var r="";return e&&e.length&&(r+="<colgroup>",y.each(e,function(e,t){r+="<col"+(t?' style="width:'+t+'"':"")+">"}),r+="</colgroup>"),r},cell:function(e,t,r,o,l){var n,i,s=l?y("<col>"):"",d=t.build_headers.classes,a=t.build_headers.widths;if(/string|number/.test(typeof e))i=y("<"+r+(d&&d[o]?' class="'+d[o]+'"':"")+">"+e+"</"+r+">"),l&&a&&a[o]&&s.width(a[o]||"");else for(n in i=y("<"+r+">"),e)e.hasOwnProperty(n)&&("text"===n||"html"===n?i[n](e[n]):l&&"width"===n?s.width(e[n]||""):i.attr(n,e[n]));return[i,s]},header:function(e,t){var r=t.build_headers.text,o=t.build_headers.classes,l="<tr>"+(t.build_numbers.addColumn?"<th"+(t.build_numbers.sortable?"":' class="sorter-false"')+">"+t.build_numbers.addColumn+"</th>":"");return y.each(e,function(e,t){l+=/<\s*\/t(d|h)\s*>/.test(t)?t:"<th"+(o&&o[e]?' class="'+o[e]+'"':"")+">"+(r&&r[e]?r[e]:t)+"</th>"}),l+"</tr>"},rows:function(e,r,o,t,l,n){var i=n?"th":"td",s="<tr>"+(t.build_numbers.addColumn?"<"+i+">"+(n?"":l)+"</"+i+">":"");return y.each(e,function(e,t){s+=/<\s*\/t(d|h)\s*>/.test(t)?t:"<"+(n?i+(o&&o[e]?' class="'+o[e]+'"':""):i)+">"+(n&&r&&r.length&&r[e]?r[e]:t)+"</"+i+">"}),s+"</tr>"}},_.buildComplete=function(e,t){y(e).trigger(t.build_complete),a.setup(e,e.config)},_.array=function(e,t,r){return _.csv(e,t,r)},_.csv=function(e,t,r){var o,l,n,i="csv"===r.build_type||"string"==typeof t,s=y(e),d=i?t.replace("\r","").split("\n"):t,a=d.length,u=0,c=!1,b=r.build_headers.rows+(i?r.build_csvStartLine:0),h=r.build_footers.rows,p=0,f="",g=_.build.colgroup(r.build_headers.widths)+"<thead>";y.each(d,function(e,t){a-h<=e&&(c=!0),(!i||e>=r.build_csvStartLine)&&e<b?(l=i?_.splitCSV(t,r.build_csvSeparator):t,p=l.length,g+=_.build.header(l,r)):b<=e&&(e===b&&(g+="</thead><tbody>"),n=i?_.splitCSV(t,r.build_csvSeparator):t,c&&0<h&&(g+=(e===a-h?"</tbody><tfoot>":"")+(e===a?"</tfoot>":"")),1<n.length&&(u++,n.length!==p&&(f+="error on line "+e+": Item count ("+n.length+") does not match header count ("+p+") \n"),o=c?r.build_footers.classes:"",g+=_.build.rows(n,r.build_footers.text,o,r,u,c)))}),g+=0<h?"":"</tbody>",f?s.html(f):(s.html(g),_.buildComplete(e,r))},_.splitCSV=function(e,t){var r,o,l=y.trim(e).split(t=t||",");for(r=l.length-1;0<=r;r--)'"'===l[r].replace(/\"\s+$/,'"').charAt(l[r].length-1)?1<(o=l[r].replace(/^\s+\"/,'"')).length&&'"'===o.charAt(0)?l[r]=l[r].replace(/^\s*"|"\s*$/g,"").replace(/""/g,'"'):r?l.splice(r-1,2,[l[r-1],l[r]].join(t)):l=l.shift().split(t).concat(l):l[r].replace(/""/g,'"');return l},_.html=function(e,t,r){var o=y(e);t instanceof jQuery?o.empty().append(t):o.html(t),_.buildComplete(e,r)},_.object=function(e,t,o){var r,l,n,i,s,d,a,u=e.config,c=o.build_objectHeaderKey,b=o.build_objectRowKey,h=t.hasOwnProperty(c)&&!y.isEmptyObject(t.kh)?t.kh:!!t.hasOwnProperty("headers")&&t.headers,p=t.hasOwnProperty(b)&&!y.isEmptyObject(t.kr)?t.kr:!!t.hasOwnProperty("rows")&&t.rows;return h&&p&&0!==h.length&&0!==p.length?(i=y("<colgroup>"),s=y("<table><thead/></table>"),y.each(h,function(e,t){for(a=y("<tr>").appendTo(s.find("thead")),l=t.length,r=0;r<l;r++)(n=_.build.cell(t[r],o,"th",r,0===e))[0]&&n[0].length&&n[0].appendTo(a),0===e&&n[1]&&n[1].appendTo(i)}),i.find("col[style]").length&&s.prepend(i),d=y("<tbody>"),y.each(p,function(e,t){var r;if((n="object"===y.type(t))&&t.newTbody)for(r in d=y("<tbody>").appendTo(s),t)t.hasOwnProperty(r)&&"newTbody"!==r&&d.attr(r,t[r]);else{if(0===e&&d.appendTo(s),a=y("<tr>").appendTo(d),n){for(r in t)t.hasOwnProperty(r)&&r!==o.build_objectCellKey&&a.attr(r,t[r]);t.hasOwnProperty(o.build_objectCellKey)&&(t=t.cells)}for(l=t.length,r=0;r<l;r++)(i=_.build.cell(t[r],o,"td",r))[0]&&i[0].length&&i[0].appendTo(a)}}),t.hasOwnProperty(o.build_objectFooterKey)&&("clone"===(n=t[o.build_objectFooterKey])?(i=s.find("thead").html(),s.append("<tfoot>"+i+"</tfoot>")):(i=y("<tfoot>").appendTo(s),y.each(n,function(e,t){for(a=y("<tr>").appendTo(i),l=t.length,r=0;r<l;r++)(d=_.build.cell(t[r],o,"th",r))[0]&&d[0].length&&d[0].appendTo(a)}))),y(e).html(s.html()),void _.buildComplete(e,o)):(u.debug&&console.error("aborting build table widget, missing data for object build"),!1)},_.ajax=_.json=function(e,t,r){return _.object(e,t,r)}}(jQuery);