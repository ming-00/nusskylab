/*! Widget: Pager - updated 10/4/2015 (v2.23.5) */
!function(e){"use strict";var a,t=e.tablesorter;t.addWidget({id:"pager",priority:55,options:{pager_output:"{startRow} to {endRow} of {totalRows} rows",pager_updateArrows:!0,pager_startPage:0,pager_pageReset:0,pager_size:10,pager_maxOptionSize:20,pager_savePages:!0,pager_storageKey:"tablesorter-pager",pager_fixedHeight:!1,pager_countChildRows:!1,pager_removeRows:!1,pager_ajaxUrl:null,pager_customAjaxUrl:function(e,a){return a},pager_ajaxError:null,pager_ajaxObject:{dataType:"json"},pager_processAjaxOnInit:!0,pager_ajaxProcessing:function(e){return[0,[],null]},pager_css:{container:"tablesorter-pager",errorRow:"tablesorter-errorRow",disabled:"disabled"},pager_selectors:{container:".pager",first:".first",prev:".prev",next:".next",last:".last",gotoPage:".gotoPage",pageDisplay:".pagedisplay",pageSize:".pagesize"}},init:function(e){a.init(e)},format:function(e,t){return t.pager&&t.pager.initialized?void a.moveToPage(e,t.pager,!1):a.initComplete(e,t)},remove:function(e,t,r,i){a.destroyPager(e,t,i)}}),a=t.pager={init:function(r){if(!r.hasInitialized||!r.config.pager.initialized){var i,s=r.config,o=s.widgetOptions,g=o.pager_selectors,n=s.pager=e.extend({totalPages:0,filteredRows:0,filteredPages:0,currentFilters:[],page:o.pager_startPage,startRow:0,endRow:0,ajaxCounter:0,$size:null,last:{},setSize:o.pager_size,setPage:o.pager_startPage},s.pager);n.isInitializing||(n.isInitializing=!0,s.debug&&console.log("Pager: Initializing"),n.size=e.data(r,"pagerLastSize")||o.pager_size,n.$container=e(g.container).addClass(o.pager_css.container).show(),n.$goto=n.$container.find(g.gotoPage),n.$size=n.$container.find(g.pageSize),n.totalRows=s.$tbodies.eq(0).children("tr").not(o.pager_countChildRows?"":"."+s.cssChildRow).length,n.oldAjaxSuccess=n.oldAjaxSuccess||o.pager_ajaxObject.success,s.appender=a.appender,n.initializing=!0,n.showAll=!1,o.pager_savePages&&t.storage&&(i=t.storage(r,o.pager_storageKey)||{},n.page=(isNaN(i.page)?n.page:i.page)||n.setPage||0,n.size=(isNaN(i.size)?n.size:i.size)||n.setSize||10,e.data(r,"pagerLastSize",n.size)),n.regexRows=new RegExp("("+(o.filter_filteredRow||"filtered")+"|"+s.selectorRemove.slice(1)+"|"+s.cssChildRow+")"),n.initialized=!1,s.$table.trigger("pagerBeforeInitialized",s),a.enablePager(r,s,!1),n.ajaxObject=o.pager_ajaxObject,n.ajaxObject.url=o.pager_ajaxUrl,"string"==typeof o.pager_ajaxUrl?(n.ajax=!0,o.filter_serversideFiltering=!0,s.serverSideSorting=!0,a.moveToPage(r,n)):(n.ajax=!1,s.$table.trigger("appendCache",[{},!0])))}},initComplete:function(e,r){var i=r.pager;a.bindEvents(e,r),a.setPageSize(e,0,r),i.ajax||a.hideRowsSetup(e,r),i.initialized=!0,i.initializing=!1,i.isInitializing=!1,r.debug&&console.log("Pager: Triggering pagerInitialized"),r.$table.trigger("pagerInitialized",r),r.widgetOptions.filter_initialized&&t.hasWidget(e,"filter")||a.updatePageDisplay(e,r,!i.ajax)},bindEvents:function(t,r){var i,s,o=r.pager,g=r.widgetOptions,n=r.namespace+"pager",l=g.pager_selectors;r.$table.off(n).on("filterInit filterStart ".split(" ").join(n+" "),function(a,t){o.currentFilters=e.isArray(t)?t:r.$table.data("lastSearch"),"filterStart"===a.type&&g.pager_pageReset!==!1&&(r.lastCombinedFilter||"")!==(o.currentFilters||[]).join("")&&(o.page=g.pager_pageReset)}).on("filterEnd sortEnd ".split(" ").join(n+" "),function(){o.currentFilters=r.$table.data("lastSearch"),(o.initialized||o.initializing)&&(r.delayInit&&r.rowsCopy&&0===r.rowsCopy.length&&a.updateCache(t),a.updatePageDisplay(t,r,!1),r.$table.trigger("applyWidgets"))}).on("disablePager"+n,function(e){e.stopPropagation(),a.showAllRows(t,r)}).on("enablePager"+n,function(e){e.stopPropagation(),a.enablePager(t,r,!0)}).on("destroyPager"+n,function(e,i){e.stopPropagation(),a.destroyPager(t,r,i)}).on("updateComplete"+n,function(e,t,i){if(e.stopPropagation(),t&&!i&&!o.ajax){var s=r.$tbodies.eq(0).children("tr").not(r.selectorRemove);o.totalRows=s.length-(g.pager_countChildRows?0:s.filter("."+r.cssChildRow).length),o.totalPages=Math.ceil(o.totalRows/o.size),s.length&&r.rowsCopy&&0===r.rowsCopy.length&&a.updateCache(t),o.page>=o.totalPages&&a.moveToLastPage(t,o),a.hideRows(t,r),a.changeHeight(t,r),a.updatePageDisplay(t,r,!1),r.$table.trigger("applyWidgets"),a.updatePageDisplay(t,r)}}).on("pageSize refreshComplete ".split(" ").join(n+" "),function(e,i){e.stopPropagation(),a.setPageSize(t,parseInt(i,10)||o.setSize||10,r),a.hideRows(t,r),a.updatePageDisplay(t,r,!1)}).on("pageSet pagerUpdate ".split(" ").join(n+" "),function(e,i){e.stopPropagation(),"pagerUpdate"===e.type&&(i="undefined"==typeof i?o.page+1:i,o.last.page=!0),o.page=(parseInt(i,10)||1)-1,a.moveToPage(t,o,!0),a.updatePageDisplay(t,r,!1)}).on("pageAndSize"+n,function(e,i,s){e.stopPropagation(),o.page=(parseInt(i,10)||1)-1,a.setPageSize(t,parseInt(s,10)||o.setSize||10,r),a.moveToPage(t,o,!0),a.hideRows(t,r),a.updatePageDisplay(t,r,!1)}),i=[l.first,l.prev,l.next,l.last],s=["moveToFirstPage","moveToPrevPage","moveToNextPage","moveToLastPage"],r.debug&&!o.$container.length&&console.warn("Pager: >> Container not found"),o.$container.find(i.join(",")).attr("tabindex",0).off("click"+n).on("click"+n,function(r){r.stopPropagation();var n,l=e(this),p=i.length;if(!l.hasClass(g.pager_css.disabled))for(n=0;p>n;n++)if(l.is(i[n])){a[s[n]](t,o);break}}),o.$goto.length?o.$goto.off("change"+n).on("change"+n,function(){o.page=e(this).val()-1,a.moveToPage(t,o,!0),a.updatePageDisplay(t,r,!1)}):r.debug&&console.warn("Pager: >> Goto selector not found"),o.$size.length?(o.$size.find("option").removeAttr("selected"),o.$size.off("change"+n).on("change"+n,function(){return o.$size.val(e(this).val()),e(this).hasClass(g.pager_css.disabled)||(a.setPageSize(t,parseInt(e(this).val(),10),r),a.changeHeight(t,r)),!1})):r.debug&&console.warn("Pager: >> Size selector not found")},pagerArrows:function(e,a){var t=e.pager,r=!!a,i=r||0===t.page,s=Math.min(t.totalPages,t.filteredPages),o=r||t.page===s-1||0===s,g=e.widgetOptions,n=g.pager_selectors;g.pager_updateArrows&&(t.$container.find(n.first+","+n.prev).toggleClass(g.pager_css.disabled,i).attr("aria-disabled",i),t.$container.find(n.next+","+n.last).toggleClass(g.pager_css.disabled,o).attr("aria-disabled",o))},calcFilters:function(a,t){var r,i,s,o=t.widgetOptions,g=t.pager,n=t.$table.hasClass("hasFilters");if(n&&!o.pager_ajaxUrl)if(e.isEmptyObject(t.cache))g.filteredRows=g.totalRows=t.$tbodies.eq(0).children("tr").not(o.pager_countChildRows?"":"."+t.cssChildRow).length;else for(g.filteredRows=0,r=t.cache[0].normalized,s=r.length,i=0;s>i;i++)g.filteredRows+=g.regexRows.test(r[i][t.columns].$row[0].className)?0:1;else n||(g.filteredRows=g.totalRows)},updatePageDisplay:function(r,i,s){if(!i.pager.initializing){var o,g,n,l,p,d,c=i.widgetOptions,f=i.pager,h=i.namespace+"pager",u=f.size||f.setSize||10;if(c.pager_countChildRows&&g.push(i.cssChildRow),f.$size.add(f.$goto).removeClass(c.pager_css.disabled).removeAttr("disabled").attr("aria-disabled","false"),f.totalPages=Math.ceil(f.totalRows/u),i.totalRows=f.totalRows,a.calcFilters(r,i),i.filteredRows=f.filteredRows,f.filteredPages=Math.ceil(f.filteredRows/u)||0,Math.min(f.totalPages,f.filteredPages)>=0){if(g=f.size*f.page>f.filteredRows&&s,f.page=g?c.pager_pageReset||0:f.page,f.startRow=g?f.size*f.page+1:0===f.filteredRows?0:f.size*f.page+1,f.endRow=Math.min(f.filteredRows,f.totalRows,f.size*(f.page+1)),n=f.$container.find(c.pager_selectors.pageDisplay),o=(f.ajaxData&&f.ajaxData.output?f.ajaxData.output||c.pager_output:c.pager_output).replace(/\{page([\-+]\d+)?\}/gi,function(e,a){return f.totalPages?f.page+(a?parseInt(a,10):1):0}).replace(/\{\w+(\s*:\s*\w+)?\}/gi,function(e){var a,t,r=e.replace(/[{}\s]/g,""),i=r.split(":"),s=f.ajaxData,o=/(rows?|pages?)$/i.test(r)?0:"";return/(startRow|page)/.test(i[0])&&"input"===i[1]?(a=(""+("page"===i[0]?f.totalPages:f.totalRows)).length,t="page"===i[0]?f.page+1:f.startRow,'<input type="text" class="ts-'+i[0]+'" style="max-width:'+a+'em" value="'+t+'"/>'):i.length>1&&s&&s[i[0]]?s[i[0]][i[1]]:f[r]||(s?s[r]:o)||o}),f.$goto.length){for(g="",l=a.buildPageSelect(f,i),d=l.length,p=0;d>p;p++)g+='<option value="'+l[p]+'">'+l[p]+"</option>";f.$goto.html(g).val(f.page+1)}n.length&&(n["INPUT"===n[0].nodeName?"val":"html"](o),n.find(".ts-startRow, .ts-page").off("change"+h).on("change"+h,function(){var a=e(this).val(),t=e(this).hasClass("ts-startRow")?Math.floor(a/f.size)+1:a;i.$table.trigger("pageSet"+h,[t])}))}a.pagerArrows(i),a.fixHeight(r,i),f.initialized&&s!==!1&&(i.debug&&console.log("Pager: Triggering pagerComplete"),i.$table.trigger("pagerComplete",i),c.pager_savePages&&t.storage&&t.storage(r,c.pager_storageKey,{page:f.page,size:f.size}))}},buildPageSelect:function(a,t){var r,i,s,o,g,n,l=t.widgetOptions,p=Math.min(a.totalPages,a.filteredPages)||1,d=5*Math.ceil(p/l.pager_maxOptionSize/5),c=p>l.pager_maxOptionSize,f=a.page+1,h=d,u=p-d,w=[1],P=c?d:1;for(r=P;p>=r;)w.push(r),r+=c?d:1;if(w.push(p),c){for(s=[],i=Math.max(Math.floor(l.pager_maxOptionSize/d)-1,5),h=f-i,1>h&&(h=1),u=f+i,u>p&&(u=p),r=h;u>=r;r++)s.push(r);w=e.grep(w,function(a,t){return e.inArray(a,w)===t}),g=w.length,n=s.length,g-n>d/2&&g+n>l.pager_maxOptionSize&&(o=Math.floor(g/2)-Math.floor(n/2),Array.prototype.splice.apply(w,[o,n])),w=w.concat(s)}return w=e.grep(w,function(a,t){return e.inArray(a,w)===t}).sort(function(e,a){return e-a})},fixHeight:function(a,t){var r,i,s=t.pager,o=t.widgetOptions,g=t.$tbodies.eq(0);g.find("tr.pagerSavedHeightSpacer").remove(),o.pager_fixedHeight&&!s.isDisabled&&(i=e.data(a,"pagerSavedHeight"),i&&(r=i-g.height(),r>5&&e.data(a,"pagerLastSize")===s.size&&g.children("tr:visible").length<s.size&&g.append('<tr class="pagerSavedHeightSpacer '+t.selectorRemove.slice(1)+'" style="height:'+r+'px;"></tr>')))},changeHeight:function(t,r){var i,s=r.$tbodies.eq(0);s.find("tr.pagerSavedHeightSpacer").remove(),s.children("tr:visible").length||s.append('<tr class="pagerSavedHeightSpacer '+r.selectorRemove.slice(1)+'"><td>&nbsp</td></tr>'),i=s.children("tr").eq(0).height()*r.pager.size,e.data(t,"pagerSavedHeight",i),a.fixHeight(t,r),e.data(t,"pagerLastSize",r.pager.size)},hideRows:function(e,a){if(!a.widgetOptions.pager_ajaxUrl){var r,i,s,o,g,n=a.pager,l=a.widgetOptions,p=a.$tbodies.length,d=n.page*n.size,c=d+n.size,f=l&&l.filter_filteredRow||"filtered",h=0,u=0;for(n.cacheIndex=[],r=0;p>r;r++){for(s=a.$tbodies.eq(r).children("tr"),o=s.length,g=0,h=0,u=0,i=0;o>i;i++)s[i].className.match(f)||(u===d&&s[i].className.match(a.cssChildRow)?s[i].style.display="none":(s[i].style.display=u>=d&&c>u?"":"none",h!==u&&u>=d&&c>u&&(n.cacheIndex.push(i),h=u),u+=s[i].className.match(a.cssChildRow+"|"+a.selectorRemove.slice(1))&&!l.pager_countChildRows?0:1,u===c&&"none"!==s[i].style.display&&s[i].className.match(t.css.cssHasChild)&&(g=i)));if(g>0&&s[g].className.match(t.css.cssHasChild))for(;++g<o&&s[g].className.match(a.cssChildRow);)s[g].style.display=""}}},hideRowsSetup:function(t,r){var i=r.pager,s=r.namespace+"pager";i.size=parseInt(i.$size.val(),10)||i.size||i.setSize||10,e.data(t,"pagerLastSize",i.size),a.pagerArrows(r),r.widgetOptions.pager_removeRows||(a.hideRows(t,r),r.$table.on("sortEnd filterEnd ".split(" ").join(s+" "),function(){a.hideRows(t,r)}))},renderAjax:function(r,i,s,o,g,n){var l=s.pager,p=s.widgetOptions;if(e.isFunction(p.pager_ajaxProcessing)){var d,c,f,h,u,w,P,b,z,m,v,R,j,x,_=s.$table,y="",$=p.pager_ajaxProcessing(r,i,o)||[0,[]],S=_.find("thead th").length;if(t.showError(i),n)s.debug&&console.error("Pager: >> Ajax Error",o,g,n),t.showError(i,o,g,n),s.$tbodies.eq(0).children("tr").detach(),l.totalRows=0;else{if(e.isArray($)?(f=isNaN($[0])&&!isNaN($[1]),j=$[f?1:0],l.totalRows=isNaN(j)?l.totalRows||0:j,s.totalRows=s.filteredRows=l.filteredRows=l.totalRows,v=0===l.totalRows?[]:$[f?0:1]||[],m=$[2]):(l.ajaxData=$,s.totalRows=l.totalRows=$.total,s.filteredRows=l.filteredRows="undefined"!=typeof $.filteredRows?$.filteredRows:$.total,m=$.headers,v=$.rows||[]),R=v&&v.length,v instanceof jQuery)p.pager_processAjaxOnInit&&(s.$tbodies.eq(0).children("tr").detach(),s.$tbodies.eq(0).append(v));else if(R){for(d=0;R>d;d++){for(y+="<tr>",c=0;c<v[d].length;c++)y+=/^\s*<td/.test(v[d][c])?e.trim(v[d][c]):"<td>"+v[d][c]+"</td>";y+="</tr>"}p.pager_processAjaxOnInit&&s.$tbodies.eq(0).html(y)}if(p.pager_processAjaxOnInit=!0,m&&m.length===S)for(h=_.hasClass("hasStickyHeaders"),w=h?p.$sticky.children("thead:first").children("tr").children():"",u=_.find("tfoot tr:first").children(),P=s.$headers.filter("th "),x=P.length,c=0;x>c;c++)b=P.eq(c),b.find("."+t.css.icon).length?(z=b.find("."+t.css.icon).clone(!0),b.find(".tablesorter-header-inner").html(m[c]).append(z),h&&w.length&&(z=w.eq(c).find("."+t.css.icon).clone(!0),w.eq(c).find(".tablesorter-header-inner").html(m[c]).append(z))):(b.find(".tablesorter-header-inner").html(m[c]),h&&w.length&&w.eq(c).find(".tablesorter-header-inner").html(m[c])),u.eq(c).html(m[c])}s.showProcessing&&t.isProcessing(i),l.totalPages=Math.ceil(l.totalRows/(l.size||l.setSize||10)),l.last.totalRows=l.totalRows,l.last.currentFilters=l.currentFilters,l.last.sortList=(s.sortList||[]).join(","),l.initializing=!1,a.updatePageDisplay(i,s,!1),_.trigger("updateCache",[function(){l.initialized&&setTimeout(function(){s.debug&&console.log("Pager: Triggering pagerChange"),_.trigger("applyWidgets").trigger("pagerChange",l),a.updatePageDisplay(i,s)},0)}])}l.initialized||s.$table.trigger("applyWidgets")},getAjax:function(r,i){var s,o=a.getAjaxUrl(r,i),g=e(document),n=i.namespace+"pager",l=i.pager;""!==o&&(i.showProcessing&&t.isProcessing(r,!0),g.on("ajaxError"+n,function(e,t,s,o){a.renderAjax(null,r,i,t,s,o),g.off("ajaxError"+n)}),s=++l.ajaxCounter,l.last.ajaxUrl=o,l.ajaxObject.url=o,l.ajaxObject.success=function(e,t,o){s<l.ajaxCounter||(a.renderAjax(e,r,i,o),g.off("ajaxError"+n),"function"==typeof l.oldAjaxSuccess&&l.oldAjaxSuccess(e))},i.debug&&console.log("Pager: Ajax initialized",l.ajaxObject),e.ajax(l.ajaxObject))},getAjaxUrl:function(a,t){var r,i,s=t.pager,o=t.widgetOptions,g=o.pager_ajaxUrl?o.pager_ajaxUrl.replace(/\{page([\-+]\d+)?\}/,function(e,a){return s.page+(a?parseInt(a,10):0)}).replace(/\{size\}/g,s.size):"",n=t.sortList,l=s.currentFilters||e(a).data("lastSearch")||[],p=g.match(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/),d=g.match(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/),c=[];if(p){for(p=p[1],i=n.length,r=0;i>r;r++)c.push(p+"["+n[r][0]+"]="+n[r][1]);g=g.replace(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/g,c.length?c.join("&"):p),c=[]}if(d){for(d=d[1],i=l.length,r=0;i>r;r++)l[r]&&c.push(d+"["+r+"]="+encodeURIComponent(l[r]));g=g.replace(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/g,c.length?c.join("&"):d),s.currentFilters=l}return e.isFunction(o.pager_customAjaxUrl)&&(g=o.pager_customAjaxUrl(a,g)),t.debug&&console.log("Pager: Ajax url = "+g),g},renderTable:function(e,r){var i,s,o,g,n=e.config,l=n.pager,p=n.widgetOptions,d=n.$table.hasClass("hasFilters"),c=r&&r.length||0,f=l.page*l.size,h=l.size;if(1>c)return void(n.debug&&console.warn("Pager: >> No rows for pager to render"));if(l.page>=l.totalPages)return a.moveToLastPage(e,l);if(l.cacheIndex=[],l.isDisabled=!1,l.initialized&&(n.debug&&console.log("Pager: Triggering pagerChange"),n.$table.trigger("pagerChange",n)),p.pager_removeRows||l.showAll){for(t.clearTableBody(e),i=t.processTbody(e,n.$tbodies.eq(0),!0),s=d?0:f,o=d?0:f,g=0;h>g&&s<r.length;)d&&/filtered/.test(r[s][0].className)||(o++,o>f&&h>=g&&(g++,l.cacheIndex.push(s),i.append(r[s]))),s++;t.processTbody(e,i,!1)}else a.hideRows(e,n);a.updatePageDisplay(e,n),p.pager_startPage=l.page,p.pager_size=l.size,e.isUpdating&&(n.debug&&console.log("Pager: Triggering updateComplete"),n.$table.trigger("updateComplete",[e,!0]))},showAllRows:function(t,r){var i,s,o,g=r.pager,n=r.widgetOptions;for(g.ajax?a.pagerArrows(r,!0):(e.data(t,"pagerLastPage",g.page),e.data(t,"pagerLastSize",g.size),g.page=0,g.size=g.totalRows,g.totalPages=1,g.showAll=!0,r.$table.addClass("pagerDisabled").removeAttr("aria-describedby").find("tr.pagerSavedHeightSpacer").remove(),a.renderTable(t,r.rowsCopy),g.isDisabled=!0,r.$table.trigger("applyWidgets"),r.debug&&console.log("Pager: Disabled")),s=g.$size.add(g.$goto).add(g.$container.find(".ts-startRow, .ts-page ")),o=s.length,i=0;o>i;i++)s.eq(i).attr("aria-disabled","true").addClass(n.pager_css.disabled)[0].disabled=!0},updateCache:function(t){var r=t.config,i=r.pager;r.$table.trigger("updateCache",[function(){if(!e.isEmptyObject(t.config.cache)){var s,o=[],g=t.config.cache[0].normalized;for(i.totalRows=g.length,s=0;s<i.totalRows;s++)o.push(g[s][r.columns].$row);r.rowsCopy=o,a.moveToPage(t,i,!0),i.last.currentFilters=[" "]}}])},moveToPage:function(r,i,s){if(!i.isDisabled){if(s!==!1&&i.initialized&&e.isEmptyObject(r.config.cache))return a.updateCache(r);var o,g=r.config,n=g.widgetOptions,l=i.last;i.ajax&&!n.filter_initialized&&t.hasWidget(r,"filter")||(a.calcFilters(r,g),o=Math.min(i.totalPages,i.filteredPages),i.page<0&&(i.page=0),i.page>o-1&&0!==o&&(i.page=o-1),l.currentFilters=""===(l.currentFilters||[]).join("")?[]:l.currentFilters,i.currentFilters=""===(i.currentFilters||[]).join("")?[]:i.currentFilters,(l.page!==i.page||l.size!==i.size||l.totalRows!==i.totalRows||(l.currentFilters||[]).join(",")!==(i.currentFilters||[]).join(",")||(l.ajaxUrl||"")!==(i.ajaxObject.url||"")||(l.optAjaxUrl||"")!==(n.pager_ajaxUrl||"")||l.sortList!==(g.sortList||[]).join(","))&&(g.debug&&console.log("Pager: Changing to page "+i.page),i.last={page:i.page,size:i.size,sortList:(g.sortList||[]).join(","),totalRows:i.totalRows,currentFilters:i.currentFilters||[],ajaxUrl:i.ajaxObject.url||"",optAjaxUrl:n.pager_ajaxUrl},i.ajax?a.getAjax(r,g):i.ajax||a.renderTable(r,g.rowsCopy),e.data(r,"pagerLastPage",i.page),i.initialized&&s!==!1&&(g.debug&&console.log("Pager: Triggering pageMoved"),g.$table.trigger("pageMoved",g).trigger("applyWidgets"),!i.ajax&&r.isUpdating&&(g.debug&&console.log("Pager: Triggering updateComplete"),g.$table.trigger("updateComplete",[r,!0])))))}},setPageSize:function(t,r,i){var s=i.pager;s.size=r||s.size||s.setSize||10,s.$size.val(s.size),e.data(t,"pagerLastPage",s.page),e.data(t,"pagerLastSize",s.size),s.totalPages=Math.ceil(s.totalRows/s.size),s.filteredPages=Math.ceil(s.filteredRows/s.size),a.moveToPage(t,s,!0)},moveToFirstPage:function(e,t){t.page=0,a.moveToPage(e,t,!0)},moveToLastPage:function(e,t){t.page=Math.min(t.totalPages,t.filteredPages)-1,a.moveToPage(e,t,!0)},moveToNextPage:function(e,t){t.page++,t.page>=Math.min(t.totalPages,t.filteredPages)-1&&(t.page=Math.min(t.totalPages,t.filteredPages)-1),a.moveToPage(e,t,!0)},moveToPrevPage:function(e,t){t.page--,t.page<=0&&(t.page=0),a.moveToPage(e,t,!0)},destroyPager:function(e,r,i){var s=r.pager,o=r.widgetOptions.pager_selectors,g=[o.first,o.prev,o.next,o.last,o.gotoPage,o.pageSize].join(","),n=r.namespace+"pager";s.initialized=!1,r.$table.off(n),s.$container.hide().find(g).off(n),i||(a.showAllRows(e,r),r.appender=null,t.storage&&t.storage(e,r.widgetOptions.pager_storageKey,""),delete e.config.pager,delete e.config.rowsCopy)},enablePager:function(t,r,i){var s,o=r.pager;o.isDisabled=!1,o.showAll=!1,o.page=e.data(t,"pagerLastPage")||o.page||0,o.size=e.data(t,"pagerLastSize")||parseInt(o.$size.find("option[selected]").val(),10)||o.size||o.setSize||10,o.$size.val(o.size),o.totalPages=Math.ceil(Math.min(o.totalRows,o.filteredRows)/o.size),r.$table.removeClass("pagerDisabled"),t.id&&(s=t.id+"_pager_info",o.$container.find(r.widgetOptions.pager_selectors.pageDisplay).attr("id",s),r.$table.attr("aria-describedby",s)),a.changeHeight(t,r),i&&(r.$table.trigger("updateRows"),a.setPageSize(t,o.size,r),a.hideRowsSetup(t,r),r.debug&&console.log("Pager: Enabled"))},appender:function(t,r){var i=t.config,s=i.widgetOptions,o=i.pager;o.ajax?a.moveToPage(t,o,!0):(i.rowsCopy=r,o.totalRows=s.pager_countChildRows?i.$tbodies.eq(0).children("tr").length:r.length,o.size=e.data(t,"pagerLastSize")||o.size||s.pager_size||o.setSize||10,o.totalPages=Math.ceil(o.totalRows/o.size),a.moveToPage(t,o),a.updatePageDisplay(t,i,!1))}},t.showError=function(a,t,r,i){var s,o=e(a),g=o[0].config,n=g&&g.widgetOptions,l=g.pager&&g.pager.cssErrorRow||n&&n.pager_css&&n.pager_css.errorRow||"tablesorter-errorRow",p=typeof t,d=!0,c="",f=function(){g.$table.find("thead").find("."+l).remove()};if(!o.length)return void console.error("tablesorter showError: no table parameter passed");if("function"==typeof g.pager.ajaxError){if(d=g.pager.ajaxError(g,t,r,i),d===!1)return f();c=d}else if("function"==typeof n.pager_ajaxError){if(d=n.pager_ajaxError(g,t,r,i),d===!1)return f();c=d}if(""===c)if("object"===p)c=0===t.status?"Not connected, verify Network":404===t.status?"Requested page not found [404]":500===t.status?"Internal Server Error [500]":"parsererror"===i?"Requested JSON parse failed":"timeout"===i?"Time out error":"abort"===i?"Ajax Request aborted":"Uncaught error: "+t.statusText+" ["+t.status+"]";else{if("string"!==p)return f();c=t}s=e(/tr\>/.test(c)?c:'<tr><td colspan="'+g.columns+'">'+c+"</td></tr>").click(function(){e(this).remove()}).appendTo(g.$table.find("thead:first")).addClass(l+" "+g.selectorRemove.slice(1)).attr({role:"alert","aria-live":"assertive"})}}(jQuery);