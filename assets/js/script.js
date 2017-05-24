(function($, window) {
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus()
	});
})(jQuery, window);