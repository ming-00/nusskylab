!function(b,t){"use strict";var c=b.tablesorter||{};b.extend(c.css,{resizableContainer:"tablesorter-resizable-container",resizableHandle:"tablesorter-resizable-handle",resizableNoSelect:"tablesorter-disableSelection",resizableStorage:"tablesorter-resizable"}),b(function(){var e="<style>body."+c.css.resizableNoSelect+" { -ms-user-select: none; -moz-user-select: -moz-none;-khtml-user-select: none; -webkit-user-select: none; user-select: none; }."+c.css.resizableContainer+" { position: relative; height: 1px; }."+c.css.resizableHandle+" { position: absolute; display: inline-block; width: 8px;top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }</style>";b(e).appendTo("body")}),c.resizable={init:function(e,t){if(!e.$table.hasClass("hasResizable")){e.$table.addClass("hasResizable");var s,a,i,r,l=e.$table,o=l.parent(),n=parseInt(l.css("margin-top"),10),d=t.resizable_vars={useStorage:c.storage&&!1!==t.resizable,$wrap:o,mouseXPosition:0,$target:null,$next:null,overflow:"auto"===o.css("overflow")||"scroll"===o.css("overflow")||"auto"===o.css("overflow-x")||"scroll"===o.css("overflow-x"),storedSizes:[]};for(c.resizableReset(e.table,!0),d.tableWidth=l.width(),d.fullWidth=Math.abs(o.width()-d.tableWidth)<20,d.useStorage&&d.overflow&&(c.storage(e.table,"tablesorter-table-original-css-width",d.tableWidth),r=c.storage(e.table,"tablesorter-table-resized-width")||"auto",c.resizable.setWidth(l,r,!0)),t.resizable_vars.storedSizes=i=(d.useStorage?c.storage(e.table,c.css.resizableStorage):[])||[],c.resizable.setWidths(e,t,i),c.resizable.updateStoredSizes(e,t),t.$resizable_container=b('<div class="'+c.css.resizableContainer+'">').css({top:n}).insertBefore(l),a=0;a<e.columns;a++)s=e.$headerIndexed[a],r=c.getColumnData(e.table,e.headers,a),"false"===c.getData(s,r,"resizable")||b('<div class="'+c.css.resizableHandle+'">').appendTo(t.$resizable_container).attr({"data-column":a,unselectable:"on"}).data("header",s).bind("selectstart",!1);l.one("tablesorter-initialized",function(){c.resizable.setHandlePosition(e,t),c.resizable.bindings(this.config,this.config.widgetOptions)})}},updateStoredSizes:function(e,t){var s,a,i=e.columns,r=t.resizable_vars;for(r.storedSizes=[],s=0;s<i;s++)a=e.$headerIndexed[s],r.storedSizes[s]=a.is(":visible")?a.width():0},setWidth:function(e,t,s){e.css({width:t,"min-width":s?t:"","max-width":s?t:""})},setWidths:function(e,t,s){var a,i,r=t.resizable_vars,l=b(e.namespace+"_extra_headers"),o=e.$table.children("colgroup").children("col");if((s=s||r.storedSizes||[]).length){for(a=0;a<e.columns;a++)c.resizable.setWidth(e.$headerIndexed[a],s[a],r.overflow),l.length&&(i=l.eq(a).add(o.eq(a)),c.resizable.setWidth(i,s[a],r.overflow));(i=b(e.namespace+"_extra_table")).length&&!c.hasWidget(e.table,"scroller")&&c.resizable.setWidth(i,e.$table.outerWidth(),r.overflow)}},setHandlePosition:function(i,r){var l,e=c.hasWidget(i.table,"scroller"),o=i.$table.height(),t=r.$resizable_container.children(),n=Math.floor(t.width()/2);e&&(o=0,i.$table.closest("."+c.css.scrollerWrap).children().each(function(){var e=b(this);o+=e.filter('[style*="height"]').length?e.height():e.children("table").height()})),l=i.$table.position().left,t.each(function(){var e=b(this),t=parseInt(e.attr("data-column"),10),s=i.columns-1,a=e.data("header");a&&(a.is(":visible")?(t<s||t===s&&r.resizable_addLastColumn)&&e.css({display:"inline-block",height:o,left:a.position().left-l+a.outerWidth()-n}):e.hide())})},toggleTextSelection:function(e,t){var s=e.namespace+"tsresize";e.widgetOptions.resizable_vars.disabled=t,b("body").toggleClass(c.css.resizableNoSelect,t),t?b("body").attr("unselectable","on").bind("selectstart"+s,!1):b("body").removeAttr("unselectable").unbind("selectstart"+s)},bindings:function(r,l){var e=r.namespace+"tsresize";l.$resizable_container.children().bind("mousedown",function(e){var t,s=l.resizable_vars,a=b(r.namespace+"_extra_headers"),i=b(e.target).data("header");t=parseInt(i.attr("data-column"),10),s.$target=i=i.add(a.filter('[data-column="'+t+'"]')),s.target=t,s.$next=e.shiftKey||l.resizable_targetLast?i.parent().children().not(".resizable-false").filter(":last"):i.nextAll(":not(.resizable-false)").eq(0),t=parseInt(s.$next.attr("data-column"),10),s.$next=s.$next.add(a.filter('[data-column="'+t+'"]')),s.next=t,s.mouseXPosition=e.pageX,c.resizable.updateStoredSizes(r,l),c.resizable.toggleTextSelection(r,!0)}),b(document).bind("mousemove"+e,function(e){var t=l.resizable_vars;t.disabled&&0!==t.mouseXPosition&&t.$target&&(l.resizable_throttle?(clearTimeout(t.timer),t.timer=setTimeout(function(){c.resizable.mouseMove(r,l,e)},isNaN(l.resizable_throttle)?5:l.resizable_throttle)):c.resizable.mouseMove(r,l,e))}).bind("mouseup"+e,function(){l.resizable_vars.disabled&&(c.resizable.toggleTextSelection(r,!1),c.resizable.stopResize(r,l),c.resizable.setHandlePosition(r,l))}),b(t).bind("resize"+e+" resizeEnd"+e,function(){c.resizable.setHandlePosition(r,l)}),r.$table.bind("columnUpdate"+e,function(){c.resizable.setHandlePosition(r,l)}).find("thead:first").add(b(r.namespace+"_extra_table").find("thead:first")).bind("contextmenu"+e,function(){var e=0===l.resizable_vars.storedSizes.length;return c.resizableReset(r.table),c.resizable.setHandlePosition(r,l),l.resizable_vars.storedSizes=[],e})},mouseMove:function(e,t,s){if(0!==t.resizable_vars.mouseXPosition&&t.resizable_vars.$target){var a,i=0,r=t.resizable_vars,l=r.$next,o=r.storedSizes[r.target],n=s.pageX-r.mouseXPosition;if(r.overflow){if(0<o+n){for(r.storedSizes[r.target]+=n,c.resizable.setWidth(r.$target,r.storedSizes[r.target],!0),a=0;a<e.columns;a++)i+=r.storedSizes[a];c.resizable.setWidth(e.$table.add(b(e.namespace+"_extra_table")),i)}l.length||(r.$wrap[0].scrollLeft=e.$table.width())}else r.fullWidth?(r.storedSizes[r.target]+=n,r.storedSizes[r.next]-=n):r.storedSizes[r.target]+=n,c.resizable.setWidths(e,t);r.mouseXPosition=s.pageX,e.$table.trigger("stickyHeadersUpdate")}},stopResize:function(e,t){var s=t.resizable_vars;c.resizable.updateStoredSizes(e,t),s.useStorage&&(c.storage(e.table,c.css.resizableStorage,s.storedSizes),c.storage(e.table,"tablesorter-table-resized-width",e.$table.width())),s.mouseXPosition=0,s.$target=s.$next=null,e.$table.trigger("stickyHeadersUpdate")}},c.addWidget({id:"resizable",priority:40,options:{resizable:!0,resizable_addLastColumn:!1,resizable_widths:[],resizable_throttle:!1,resizable_targetLast:!1,resizable_fullWidth:null},init:function(e,t,s,a){c.resizable.init(s,a)},remove:function(e,t,s,a){if(s.$resizable_container){var i=t.namespace+"tsresize";t.$table.add(b(t.namespace+"_extra_table")).removeClass("hasResizable").children("thead").unbind("contextmenu"+i),s.$resizable_container.remove(),c.resizable.toggleTextSelection(t,!1),c.resizableReset(e,a),b(document).unbind("mousemove"+i+" mouseup"+i)}}}),c.resizableReset=function(r,l){b(r).each(function(){var e,t,s=this.config,a=s&&s.widgetOptions,i=a.resizable_vars;if(r&&s&&s.$headerIndexed.length){for(i.overflow&&i.tableWidth&&(c.resizable.setWidth(s.$table,i.tableWidth,!0),i.useStorage&&c.storage(r,"tablesorter-table-resized-width","auto")),e=0;e<s.columns;e++)t=s.$headerIndexed[e],a.resizable_widths&&a.resizable_widths[e]?c.resizable.setWidth(t,a.resizable_widths[e],i.overflow):t.hasClass("resizable-false")||c.resizable.setWidth(t,"",i.overflow);s.$table.trigger("stickyHeadersUpdate"),c.storage&&!l&&c.storage(this,c.css.resizableStorage,{})}})}}(jQuery,window);