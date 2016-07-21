;(function($){
	//fousUs
	var $fousUs = $('.fousUs');
	var $link = $('.fousUs_link');
	$fousUs.hover(function(){
		console.log("sasd")
		$link.show();
	},function(){
		$link.hide();
	})
})(jQuery);