!function(N){"use strict";var O=N.tablesorter;N.extend({tablesorterPager:new function(){this.defaults={container:null,ajaxUrl:null,customAjaxUrl:function(e,t){return t},ajaxError:null,ajaxObject:{dataType:"json"},processAjaxOnInit:!0,ajaxProcessing:function(){return[0,[],null]},output:"{startRow} to {endRow} of {totalRows} rows",updateArrows:!0,page:0,pageReset:0,size:10,maxOptionSize:20,savePages:!0,storageKey:"tablesorter-pager",fixedHeight:!1,countChildRows:!1,removeRows:!1,cssFirst:".first",cssPrev:".prev",cssNext:".next",cssLast:".last",cssGoto:".gotoPage",cssPageDisplay:".pagedisplay",cssPageSize:".pagesize",cssErrorRow:"tablesorter-errorRow",cssDisabled:"disabled",totalRows:0,totalPages:0,filteredRows:0,filteredPages:0,ajaxCounter:0,currentFilters:[],startRow:0,endRow:0,$size:null,last:{}};var c="filterInit filterStart filterEnd sortEnd disablePager enablePager destroyPager updateComplete pageSize pageSet pageAndSize pagerUpdate refreshComplete ",p=this,f=function(e,t){var a="addClass",s="removeClass",i=e.cssDisabled,r=!!t,o=r||0===e.page,n=Math.min(e.totalPages,e.filteredPages),l=r||e.page===n-1||0===n;e.updateArrows&&(e.$container.find(e.cssFirst+","+e.cssPrev)[o?a:s](i).attr("aria-disabled",o),e.$container.find(e.cssNext+","+e.cssLast)[l?a:s](i).attr("aria-disabled",l))},u=function(e,t){var a,s,i,r=e.config,o=r.$table.hasClass("hasFilters");if(o&&!t.ajaxUrl)if(O.isEmptyObject(r.cache))t.filteredRows=t.totalRows=r.$tbodies.eq(0).children("tr").not(t.countChildRows?"":"."+r.cssChildRow).length;else for(t.filteredRows=0,i=(a=r.cache[0].normalized).length,s=0;s<i;s++)t.filteredRows+=t.regexRows.test(a[s][r.columns].$row[0].className)?0:1;else o||(t.filteredRows=t.totalRows)},y=function(e,n,t){if(!n.initializing){var a,s,i,r,o,l,g=e.config,d=g.namespace+"pager",c=n.size||n.settings.size||10;if(n.countChildRows&&s.push(g.cssChildRow),n.totalPages=Math.ceil(n.totalRows/c),g.totalRows=n.totalRows,u(e,n),g.filteredRows=n.filteredRows,n.filteredPages=Math.ceil(n.filteredRows/c)||0,0<=Math.min(n.totalPages,n.filteredPages)){if(s=n.size*n.page>n.filteredRows&&t,n.page=s?n.pageReset||0:n.page,n.startRow=s?n.size*n.page+1:0===n.filteredRows?0:n.size*n.page+1,n.endRow=Math.min(n.filteredRows,n.totalRows,n.size*(n.page+1)),i=n.$container.find(n.cssPageDisplay),a=(n.ajaxData&&n.ajaxData.output&&n.ajaxData.output||n.output).replace(/\{page([\-+]\d+)?\}/gi,function(e,t){return n.totalPages?n.page+(t?parseInt(t,10):1):0}).replace(/\{\w+(\s*:\s*\w+)?\}/gi,function(e){var t,a,s=e.replace(/[{}\s]/g,""),i=s.split(":"),r=n.ajaxData,o=/(rows?|pages?)$/i.test(s)?0:"";return/(startRow|page)/.test(i[0])&&"input"===i[1]?(t=(""+("page"===i[0]?n.totalPages:n.totalRows)).length,a="page"===i[0]?n.page+1:n.startRow,'<input type="text" class="ts-'+i[0]+'" style="max-width:'+t+'em" value="'+a+'"/>'):1<i.length&&r&&r[i[0]]?r[i[0]][i[1]]:n[s]||(r?r[s]:o)||o}),n.$goto.length){for(s="",o=(l=h(n)).length,r=0;r<o;r++)s+='<option value="'+l[r]+'">'+l[r]+"</option>";n.$goto.html(s).val(n.page+1)}i.length&&(i["INPUT"===i[0].nodeName?"val":"html"](a),i.find(".ts-startRow, .ts-page").unbind("change"+d).bind("change"+d,function(){var e=N(this).val(),t=N(this).hasClass("ts-startRow")?Math.floor(e/n.size)+1:e;g.$table.trigger("pageSet"+d,[t])}))}f(n),w(e,n),n.initialized&&!1!==t&&(g.debug&&console.log("Pager: Triggering pagerComplete"),g.$table.trigger("pagerComplete",n),n.savePages&&O.storage&&O.storage(e,n.storageKey,{page:n.page,size:n.size}))}},h=function(e){var t,a,s,i,r,o,n=Math.min(e.totalPages,e.filteredPages)||1,l=5*Math.ceil(n/e.maxOptionSize/5),g=n>e.maxOptionSize,d=e.page+1,c=l,p=n-l,f=[1];for(t=g?l:1;t<=n;)f.push(t),t+=g?l:1;if(f.push(n),g){for(s=[],(c=d-(a=Math.max(Math.floor(e.maxOptionSize/l)-1,5)))<1&&(c=1),n<(p=d+a)&&(p=n),t=c;t<=p;t++)s.push(t);l/2<(r=(f=N.grep(f,function(e,t){return N.inArray(e,f)===t})).length)-(o=s.length)&&r+o>e.maxOptionSize&&(i=Math.floor(r/2)-Math.floor(o/2),Array.prototype.splice.apply(f,[i,o])),f=f.concat(s)}return f=N.grep(f,function(e,t){return N.inArray(e,f)===t}).sort(function(e,t){return e-t})},w=function(e,t){var a,s,i=e.config,r=i.$tbodies.eq(0);r.find("tr.pagerSavedHeightSpacer").remove(),t.fixedHeight&&!t.isDisabled&&((s=N.data(e,"pagerSavedHeight"))&&(5<(a=s-r.height())&&N.data(e,"pagerLastSize")===t.size&&r.children("tr:visible").length<t.size&&r.append('<tr class="pagerSavedHeightSpacer '+i.selectorRemove.slice(1)+'" style="height:'+a+'px;"></tr>')))},b=function(e,t){var a,s=e.config,i=s.$tbodies.eq(0);i.find("tr.pagerSavedHeightSpacer").remove(),i.children("tr:visible").length||i.append('<tr class="pagerSavedHeightSpacer '+s.selectorRemove.slice(1)+'"><td>&nbsp</td></tr>'),a=i.children("tr").eq(0).height()*t.size,N.data(e,"pagerSavedHeight",a),w(e,t),N.data(e,"pagerLastSize",t.size)},z=function(e,t){if(!t.ajaxUrl){var a,s=0,i=e.config,r=i.$tbodies.eq(0).children("tr"),o=r.length,n=t.page*t.size,l=n+t.size,g=i.widgetOptions&&i.widgetOptions.filter_filteredRow||"filtered",d=0,c=0;for(t.cacheIndex=[],a=0;a<o;a++)r[a].className.match(g)||(c===n&&r[a].className.match(i.cssChildRow)?r[a].style.display="none":(r[a].style.display=n<=c&&c<l?"":"none",d!==c&&n<=c&&c<l&&(t.cacheIndex.push(a),d=c),(c+=r[a].className.match(i.cssChildRow+"|"+i.selectorRemove.slice(1))&&!t.countChildRows?0:1)===l&&"none"!==r[a].style.display&&r[a].className.match(O.css.cssHasChild)&&(s=a)));if(0<s&&r[s].className.match(O.css.cssHasChild))for(;++s<o&&r[s].className.match(i.cssChildRow);)r[s].style.display=""}},R=function(e,t){t.size=parseInt(t.$size.val(),10)||t.size||t.settings.size||10,N.data(e,"pagerLastSize",t.size),f(t),t.removeRows||(z(e,t),N(e).bind("sortEnd filterEnd ".split(" ").join(e.config.namespace+"pager "),function(){z(e,t)}))},l=function(e,t,a,s,i,r){if("function"==typeof a.ajaxProcessing){var o,n,l,g,d,c,p,f,u,h,w,b,z,R,j=t.config,m=j.$table,x="",P=a.ajaxProcessing(e,t,s)||[0,[]],v=m.find("thead th").length;if(O.showError(t),r)j.debug&&console.error("Pager: >> Ajax Error",s,i,r),O.showError(t,s,i,r),j.$tbodies.eq(0).children("tr").detach(),a.totalRows=0;else{if(N.isArray(P)?(z=P[(l=isNaN(P[0])&&!isNaN(P[1]))?1:0],a.totalRows=isNaN(z)?a.totalRows||0:z,j.totalRows=j.filteredRows=a.filteredRows=a.totalRows,w=0===a.totalRows?[]:P[l?0:1]||[],h=P[2]):(a.ajaxData=P,j.totalRows=a.totalRows=P.total,j.filteredRows=a.filteredRows="undefined"!=typeof P.filteredRows?P.filteredRows:P.total,h=P.headers,w=P.rows||[]),b=w&&w.length,w instanceof jQuery)a.processAjaxOnInit&&(j.$tbodies.eq(0).children("tr").detach(),j.$tbodies.eq(0).append(w));else if(b){for(o=0;o<b;o++){for(x+="<tr>",n=0;n<w[o].length;n++)x+=/^\s*<td/.test(w[o][n])?N.trim(w[o][n]):"<td>"+w[o][n]+"</td>";x+="</tr>"}a.processAjaxOnInit&&j.$tbodies.eq(0).html(x)}if(a.processAjaxOnInit=!0,h&&h.length===v)for(c=(g=m.hasClass("hasStickyHeaders"))?j.widgetOptions.$sticky.children("thead:first").children("tr").children():"",d=m.find("tfoot tr:first").children(),R=(p=j.$headers.filter("th ")).length,n=0;n<R;n++)(f=p.eq(n)).find("."+O.css.icon).length?(u=f.find("."+O.css.icon).clone(!0),f.find(".tablesorter-header-inner").html(h[n]).append(u),g&&c.length&&(u=c.eq(n).find("."+O.css.icon).clone(!0),c.eq(n).find(".tablesorter-header-inner").html(h[n]).append(u))):(f.find(".tablesorter-header-inner").html(h[n]),g&&c.length&&c.eq(n).find(".tablesorter-header-inner").html(h[n])),d.eq(n).html(h[n])}j.showProcessing&&O.isProcessing(t),a.totalPages=Math.ceil(a.totalRows/(a.size||a.settings.size||10)),a.last.totalRows=a.totalRows,a.last.currentFilters=a.currentFilters,a.last.sortList=(j.sortList||[]).join(","),y(t,a,!1),m.trigger("updateCache",[function(){a.initialized&&setTimeout(function(){j.debug&&console.log("Pager: Triggering pagerChange"),m.trigger("applyWidgets").trigger("pagerChange",a),y(t,a,!0)},0)}])}a.initialized||(a.initialized=!0,a.initializing=!1,t.config.debug&&console.log("Pager: Triggering pagerInitialized"),N(t).trigger("applyWidgets").trigger("pagerInitialized",a),y(t,a))},n=function(i,r){var s,e=a(i,r),o=N(document),t=i.config,n=t.namespace+"pager";""!==e&&(t.showProcessing&&O.isProcessing(i,!0),o.bind("ajaxError"+n,function(e,t,a,s){l(null,i,r,t,a,s),o.unbind("ajaxError"+n)}),s=++r.ajaxCounter,r.last.ajaxUrl=e,r.ajaxObject.url=e,r.ajaxObject.success=function(e,t,a){s<r.ajaxCounter||(l(e,i,r,a),o.unbind("ajaxError"+n),"function"==typeof r.oldAjaxSuccess&&r.oldAjaxSuccess(e))},t.debug&&console.log("Pager: Ajax initialized",r.ajaxObject),N.ajax(r.ajaxObject))},a=function(e,a){var t,s,i=e.config,r=a.ajaxUrl?a.ajaxUrl.replace(/\{page([\-+]\d+)?\}/,function(e,t){return a.page+(t?parseInt(t,10):0)}).replace(/\{size\}/g,a.size):"",o=i.sortList,n=a.currentFilters||N(e).data("lastSearch")||[],l=r.match(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/),g=r.match(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/),d=[];if(l){for(l=l[1],s=o.length,t=0;t<s;t++)d.push(l+"["+o[t][0]+"]="+o[t][1]);r=r.replace(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/g,d.length?d.join("&"):l),d=[]}if(g){for(g=g[1],s=n.length,t=0;t<s;t++)n[t]&&d.push(g+"["+t+"]="+encodeURIComponent(n[t]));r=r.replace(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/g,d.length?d.join("&"):g),a.currentFilters=n}return"function"==typeof a.customAjaxUrl&&(r=a.customAjaxUrl(e,r)),i.debug&&console.log("Pager: Ajax url = "+r),r},g=function(e,t,a){var s,i,r,o,n=N(e),l=e.config,g=l.$table.hasClass("hasFilters"),d=t&&t.length||0,c=a.page*a.size,p=a.size;if(d<1)l.debug&&console.warn("Pager: >> No rows for pager to render");else{if(a.page>=a.totalPages&&C(e,a),a.cacheIndex=[],a.isDisabled=!1,a.initialized&&(l.debug&&console.log("Pager: Triggering pagerChange"),n.trigger("pagerChange",a)),a.removeRows||a.showAll){for(O.clearTableBody(e),s=O.processTbody(e,l.$tbodies.eq(0),!0),r=i=g?0:c,o=0;o<p&&i<t.length;)g&&/filtered/.test(t[i][0].className)||c<++r&&o<=p&&(o++,a.cacheIndex.push(i),s.append(t[i])),i++;O.processTbody(e,s,!1)}else z(e,a);y(e,a),e.isUpdating&&(l.debug&&console.log("Pager: Triggering updateComplete"),n.trigger("updateComplete",[e,!0]))}},j=function(e,t){var a,s,i;for(t.ajax?f(t,!0):(N.data(e,"pagerLastPage",t.page),N.data(e,"pagerLastSize",t.size),t.page=0,t.size=t.totalRows,t.totalPages=1,t.showAll=!0,N(e).addClass("pagerDisabled").removeAttr("aria-describedby").find("tr.pagerSavedHeightSpacer").remove(),g(e,e.config.rowsCopy,t),t.isDisabled=!0,N(e).trigger("applyWidgets"),e.config.debug&&console.log("Pager: Disabled")),i=(s=t.$size.add(t.$goto).add(t.$container.find(".ts-startRow, .ts-page"))).length,a=0;a<i;a++)s.eq(a).attr("aria-disabled","true").addClass(t.cssDisabled)[0].disabled=!0},m=function(s){var i=s.config,r=i.pager;i.$table.trigger("updateCache",[function(){var e,t=[],a=s.config.cache[0].normalized;for(r.totalRows=a.length,e=0;e<r.totalRows;e++)t.push(a[e][i.columns].$row);i.rowsCopy=t,x(s,r,!0)}])},x=function(e,t,a){if(!t.isDisabled){var s,i=e.config,r=N(e),o=t.last;return!1!==a&&t.initialized&&O.isEmptyObject(i.cache)?m(e):void(t.ajax&&O.hasWidget(e,"filter")&&!i.widgetOptions.filter_initialized||(u(e,t),s=Math.min(t.totalPages,t.filteredPages),t.page<0&&(t.page=0),t.page>s-1&&0!==s&&(t.page=s-1),o.currentFilters=""===(o.currentFilters||[]).join("")?[]:o.currentFilters,t.currentFilters=""===(t.currentFilters||[]).join("")?[]:t.currentFilters,(o.page!==t.page||o.size!==t.size||o.totalRows!==t.totalRows||(o.currentFilters||[]).join(",")!==(t.currentFilters||[]).join(",")||(o.ajaxUrl||"")!==(t.ajaxObject.url||"")||(o.optAjaxUrl||"")!==(t.ajaxUrl||"")||o.sortList!==(i.sortList||[]).join(","))&&(i.debug&&console.log("Pager: Changing to page "+t.page),t.last={page:t.page,size:t.size,sortList:(i.sortList||[]).join(","),totalRows:t.totalRows,currentFilters:t.currentFilters||[],ajaxUrl:t.ajaxObject.url||"",optAjaxUrl:t.ajaxUrl||""},t.ajax?n(e,t):t.ajax||g(e,i.rowsCopy,t),N.data(e,"pagerLastPage",t.page),t.initialized&&!1!==a&&(i.debug&&console.log("Pager: Triggering pageMoved"),r.trigger("pageMoved",t).trigger("applyWidgets"),e.isUpdating&&(i.debug&&console.log("Pager: Triggering updateComplete"),r.trigger("updateComplete",[e,!0]))))))}},P=function(e,t,a){a.size=t||a.size||a.settings.size||10,a.$size.val(a.size),N.data(e,"pagerLastPage",a.page),N.data(e,"pagerLastSize",a.size),a.totalPages=Math.ceil(a.totalRows/a.size),a.filteredPages=Math.ceil(a.filteredRows/a.size),x(e,a)},v=function(e,t){t.page=0,x(e,t)},C=function(e,t){t.page=Math.min(t.totalPages,t.filteredPages)-1,x(e,t)},$=function(e,t){t.page++,t.page>=Math.min(t.totalPages,t.filteredPages)-1&&(t.page=Math.min(t.totalPages,t.filteredPages)-1),x(e,t)},S=function(e,t){t.page--,t.page<=0&&(t.page=0),x(e,t)},A=function(e,t){var a=e.config,s=a.namespace+"pager",i=[t.cssFirst,t.cssPrev,t.cssNext,t.cssLast,t.cssGoto,t.cssPageSize].join(",");j(e,t),t.$container.hide().find(i).unbind(s),a.appender=null,a.$table.unbind(s),O.storage&&O.storage(e,t.storageKey,""),delete a.pager,delete a.rowsCopy},I=function(e,t,a){var s,i=e.config;t.$size.add(t.$goto).add(t.$container.find(".ts-startRow, .ts-page")).removeClass(t.cssDisabled).removeAttr("disabled").attr("aria-disabled","false"),t.isDisabled=!1,t.showAll=!1,t.page=N.data(e,"pagerLastPage")||t.page||0,t.size=N.data(e,"pagerLastSize")||parseInt(t.$size.find("option[selected]").val(),10)||t.size||t.settings.size||10,t.$size.val(t.size),t.totalPages=Math.ceil(Math.min(t.totalRows,t.filteredRows)/t.size),e.id&&(s=e.id+"_pager_info",t.$container.find(t.cssPageDisplay).attr("id",s),i.$table.attr("aria-describedby",s)),b(e,t),a&&(i.$table.trigger("updateRows"),P(e,t.size,t),R(e,t),i.debug&&console.log("Pager: Enabled"))};p.appender=function(e,t){var a=e.config,s=a.pager;s.ajax||(a.rowsCopy=t,s.totalRows=s.countChildRows?a.$tbodies.eq(0).children("tr").length:t.length,s.size=N.data(e,"pagerLastSize")||s.size||s.settings.size||10,s.totalPages=Math.ceil(s.totalRows/s.size),g(e,t,s),y(e,s,!1))},p.construct=function(d){return this.each(function(){if(this.config&&this.hasInitialized){var e,i,r,o=this,n=o.config,t=n.widgetOptions,l=n.pager=N.extend(!0,{},N.tablesorterPager.defaults,d),a=n.$table,s=n.namespace+"pager",g=l.$container=N(l.container).addClass("tablesorter-pager").show();l.settings=N.extend(!0,{},N.tablesorterPager.defaults,d),n.debug&&console.log("Pager: Initializing"),l.oldAjaxSuccess=l.oldAjaxSuccess||l.ajaxObject.success,n.appender=p.appender,l.initializing=!0,l.showAll=!1,l.savePages&&O.storage&&(e=O.storage(o,l.storageKey)||{},l.page=isNaN(e.page)?l.page:e.page,l.size=(isNaN(e.size)?l.size:e.size)||l.settings.size||10,N.data(o,"pagerLastSize",l.size)),l.regexRows=new RegExp("("+(t.filter_filteredRow||"filtered")+"|"+n.selectorRemove.slice(1)+"|"+n.cssChildRow+")"),a.unbind(c.split(" ").join(s+" ").replace(/\s+/g," ")).bind("filterInit filterStart ".split(" ").join(s+" "),function(e,t){l.currentFilters=N.isArray(t)?t:n.$table.data("lastSearch"),"filterStart"===e.type&&!1!==l.pageReset&&(n.lastCombinedFilter||"")!==(l.currentFilters||[]).join("")&&(l.page=l.pageReset)}).bind("filterEnd sortEnd ".split(" ").join(s+" "),function(){l.currentFilters=n.$table.data("lastSearch"),(l.initialized||l.initializing)&&(n.delayInit&&n.rowsCopy&&0===n.rowsCopy.length&&m(o),y(o,l,!1),x(o,l,!1),n.$table.trigger("applyWidgets"))}).bind("disablePager"+s,function(e){e.stopPropagation(),j(o,l)}).bind("enablePager"+s,function(e){e.stopPropagation(),I(o,l,!0)}).bind("destroyPager"+s,function(e){e.stopPropagation(),A(o,l)}).bind("updateComplete"+s,function(e,t,a){if(e.stopPropagation(),t&&!a&&!l.ajax){var s=n.$tbodies.eq(0).children("tr").not(n.selectorRemove);l.totalRows=s.length-(l.countChildRows?0:s.filter("."+n.cssChildRow).length),l.totalPages=Math.ceil(l.totalRows/l.size),s.length&&n.rowsCopy&&0===n.rowsCopy.length&&m(t),l.page>=l.totalPages&&C(t,l),z(t,l),b(t,l),y(t,l,!0)}}).bind("pageSize refreshComplete ".split(" ").join(s+" "),function(e,t){e.stopPropagation(),P(o,parseInt(t,10)||l.settings.size||10,l),z(o,l),y(o,l,!1)}).bind("pageSet pagerUpdate ".split(" ").join(s+" "),function(e,t){e.stopPropagation(),"pagerUpdate"===e.type&&(t=void 0===t?l.page+1:t,l.last.page=!0),l.page=(parseInt(t,10)||1)-1,x(o,l,!0),y(o,l,!1)}).bind("pageAndSize"+s,function(e,t,a){e.stopPropagation(),l.page=(parseInt(t,10)||1)-1,P(o,parseInt(a,10)||l.settings.size||10,l),x(o,l,!0),z(o,l),y(o,l,!1)}),i=[l.cssFirst,l.cssPrev,l.cssNext,l.cssLast],r=[v,S,$,C],n.debug&&!g.length&&console.warn("Pager: >> Container not found"),g.find(i.join(",")).attr("tabindex",0).unbind("click"+s).bind("click"+s,function(e){e.stopPropagation();var t,a=N(this),s=i.length;if(!a.hasClass(l.cssDisabled))for(t=0;t<s;t++)if(a.is(i[t])){r[t](o,l);break}}),l.$goto=g.find(l.cssGoto),l.$goto.length?l.$goto.unbind("change"+s).bind("change"+s,function(){l.page=N(this).val()-1,x(o,l,!0),y(o,l,!1)}):n.debug&&console.warn("Pager: >> Goto selector not found"),l.$size=g.find(l.cssPageSize),l.$size.length?(l.$size.find("option").removeAttr("selected"),l.$size.unbind("change"+s).bind("change"+s,function(){return l.$size.val(N(this).val()),N(this).hasClass(l.cssDisabled)||(P(o,parseInt(N(this).val(),10),l),b(o,l)),!1})):n.debug&&console.warn("Pager: >> Size selector not found"),l.initialized=!1,a.trigger("pagerBeforeInitialized",l),I(o,l,!1),"string"==typeof l.ajaxUrl?(l.ajax=!0,n.widgetOptions.filter_serversideFiltering=!0,n.serverSideSorting=!0,x(o,l)):(l.ajax=!1,N(this).trigger("appendCache",!0),R(o,l)),l.ajax||l.initialized||(l.initializing=!1,l.initialized=!0,x(o,l),n.debug&&console.log("Pager: Triggering pagerInitialized"),n.$table.trigger("pagerInitialized",l),n.widgetOptions.filter_initialized&&O.hasWidget(o,"filter")||y(o,l,!1)),n.widgetInit.pager=!0}})}}}),O.showError=function(e,t,a,s){var i=N(e),r=i[0].config,o=r&&r.widgetOptions,n=r.pager&&r.pager.cssErrorRow||o&&o.pager_css&&o.pager_css.errorRow||"tablesorter-errorRow",l=typeof t,g=!0,d="",c=function(){r.$table.find("thead").find("."+n).remove()};if(i.length){if("function"==typeof r.pager.ajaxError){if(!1===(g=r.pager.ajaxError(r,t,a,s)))return c();d=g}else if("function"==typeof o.pager_ajaxError){if(!1===(g=o.pager_ajaxError(r,t,a,s)))return c();d=g}if(""===d)if("object"===l)d=0===t.status?"Not connected, verify Network":404===t.status?"Requested page not found [404]":500===t.status?"Internal Server Error [500]":"parsererror"===s?"Requested JSON parse failed":"timeout"===s?"Time out error":"abort"===s?"Ajax Request aborted":"Uncaught error: "+t.statusText+" ["+t.status+"]";else{if("string"!==l)return c();d=t}N(/tr\>/.test(d)?d:'<tr><td colspan="'+r.columns+'">'+d+"</td></tr>").click(function(){N(this).remove()}).appendTo(r.$table.find("thead:first")).addClass(n+" "+r.selectorRemove.slice(1)).attr({role:"alert","aria-live":"assertive"})}else console.error("tablesorter showError: no table parameter passed")},N.fn.extend({tablesorterPager:N.tablesorterPager.construct})}(jQuery);