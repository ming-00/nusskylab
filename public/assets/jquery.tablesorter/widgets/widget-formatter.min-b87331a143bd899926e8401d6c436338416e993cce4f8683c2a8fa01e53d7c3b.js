/*! Widget: formatter - 2/9/2015 (v2.19.1) */
!function(t){"use strict";var e=t.tablesorter;e.formatter={init:function(t){var o=t.widgetOptions.formatter_event+" pagerComplete updateComplete ".split(" ").join(".tsformatter ");t.$table.off(o.replace(/\s+/g," ")).on(o,function(){e.formatter.setup(t)}),e.formatter.setup(t)},setup:function(o){if(!t.isEmptyObject(o.cache)){var r,n,i,a,l,c,f,s=o.widgetOptions,m={config:o,wo:s},d=[],u=[];for(f=0;f<o.columns;f++)u[f]=o.$headerIndexed[f],d[f]=e.getColumnData(o.table,s.formatter_column,f)||!1;for(n=0;n<o.$tbodies.length;n++){for(r=e.processTbody(o.table,o.$tbodies.eq(n),!0),a=o.cache[n],c=a.normalized.length,i=0;c>i;i++)for(m.$row=a.normalized[i][o.columns].$row,m.$cells=m.$row.children("th, td"),f=0;f<o.columns;f++)d[f]&&(m.columnIndex=f,m.$header=u[f],m.$cell=m.$cells.eq(f),l=m.$cell[0],m.text=l.getAttribute(o.textAttribute)||l.textContent||m.$cell.text(),l.innerHTML=d[f](m.text,m));e.processTbody(o.table,r,!1)}}}},e.addWidget({id:"formatter",priority:100,options:{formatter_column:{},formatter_event:"applyFormatter"},init:function(t){e.formatter.init(t.config)}})}(jQuery);