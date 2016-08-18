$('#content-area').hide().load('main.html').fadeIn("slow",function(){
	
});









$('.nav-link').click(function(){


	var href = $(this).attr("href");

	$('#content-area').hide().load(href).fadeIn("slow",function(){

	});

	


	return false;

});	