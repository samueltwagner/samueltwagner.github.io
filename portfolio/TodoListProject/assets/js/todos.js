//crossout
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stops the other elements getting effected
	event.stopPropagation();
});

//type text then enter
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		//gets rid of the text just typed in
		$(this).val("");
		//add check mark
		$("ul").append("<li><span><i class='fa fa-check'></i></span> " + todoText + "</li>");
	}
})

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle(500);
});