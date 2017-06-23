$(function(){
	var name = "";
	$("#btn").click(function(){
		name = $("#txt").val();
		if(name.length!=0){
			$.ajax({
				url:"DisposeAction",
				type:"get",
				datatype:"text",
				data:{
					name:name,
				},
				success:function(data){
					$("#display").html(data);
				}
					
			});
		}else{
			$("#display").html("不能为空！");
			$("#display").css("color","red");
		}
		
	});
	$("#txt").focus(function(){
		$("#txt").val("");
		$("#display").html("");
	});
});