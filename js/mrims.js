$.extend( $.fn.dataTable.defaults, {
	 "bJQueryUI": true,
	 "sPaginationType": "full_numbers",
     "dom": '<"H"Tfr>t<"F"i<"pageNo"l>p>',
     "language":{
	    "sProcessing":   "处理中...",
	    "sLengthMenu":   "显示 _MENU_ 项结果",
	    "sZeroRecords":  "没有匹配结果",
	    "sInfo":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
	    "sInfoEmpty":    "显示第 0 至 0 项结果，共 0 项",
	    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
	    "sInfoPostFix":  "",
	    "sSearch":       "搜索:",
	    "sUrl":          "",
	    "sEmptyTable":     "表中数据为空",
	    "sLoadingRecords": "载入中...",
	    "sInfoThousands":  ",",
	    "oPaginate": {
	        "sFirst":    "首页",
	        "sPrevious": "上页",
	        "sNext":     "下页",
	        "sLast":     "末页"
	    },
	    "oAria": {
	        "sSortAscending":  ": 以升序排列此列",
	        "sSortDescending": ": 以降序排列此列"
	    }
	}
} );
// custom button
$.fn.dataTable.TableTools.buttons.add = $.extend(
	    {},
	    $.fn.dataTable.TableTools.buttonBase,
	    {
	        "sNewLine": "<br>",
	        "sDiv": "",
	        "sButtonText": "添加",
	        "fnClick": function( nButton, oConfig ) {
		        alert(11);
	        }
	    }
);
$.fn.dataTable.TableTools.buttons.edit = $.extend(
		{},
	    $.fn.dataTable.TableTools.buttonBase,
	    {
	        "sNewLine": "<br>",
	        "sDiv": "",
	        "sButtonText": "编辑",
	        "fnClick": function( nButton, oConfig ) {
			 var dataLength = this.fnGetSelected(oConfig).length;
			 if (dataLength < 1 ) {
				 $("#alertDiv").modal();
				 $("#alertContent").html("请选择一条记录");
				 return false;
			 }
			 if (dataLength > 1 ) {
				 $("#alertDiv").modal();
				 $("#alertContent").html("最多选择一条记录");
				 return false;
			 }
			 $("#editModal").modal();
	        }
	    }
);

$.fn.dataTable.TableTools.buttons.remove = $.extend(
		{},
	    $.fn.dataTable.TableTools.buttonBase,
	    {
	        "sNewLine": "<br>",
	        "sDiv": "",
	        "sButtonText": "删除",
	        "fnClick": function( nButton, oConfig ) {
			 var dataLength = this.fnGetSelected(oConfig).length;
			 if (dataLength < 1 ) {
				 $("#alertDiv").modal();
				 $("#alertContent").html("至少选择一条记录");
				 return false;
			 } else {
				 $("#alertDiv").modal();
				 $("#alertContent").html("确定删除选择" + dataLength + "条记录" );
			 }
	        }
	    }
);
