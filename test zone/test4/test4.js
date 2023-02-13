$(document).ready(function(){
	$('#level-arrow-click').click(function(){
		console.log('fitness level');
		$('#fitness-checkboxes').fadeToggle(400);
		$('#workout-checkboxes').hide();
		$('#trainer-checkboxes').hide();
	})
	$('#workout-arrow-click').click(function(){
		console.log('workout type');
		$('#fitness-checkboxes').hide();
		$('#workout-checkboxes').fadeToggle(400);
		$('#trainer-checkboxes').hide();
	})
	$('#trainer-arrow-click').click(function(){
		console.log('trainer level');
		$('#fitness-checkboxes').hide();
		$('#workout-checkboxes').hide();
		$('#trainer-checkboxes').fadeToggle(400);
	})

	if ('input[type=checkbox]:checked') {
		$()
	}

    // if checkbox is checked, show corresponding text with option to X out and delete text and uncheck checkbox
	$('input[type="checkbox"]').change(function () {
        var checkboxname = $(this).val();
        	console.log(this.value);
        if ($(".display").hasClass(checkboxname)) {
            if ($(this).is(":checked")) {
                $(".display." + checkboxname).show();
                $('.clearall').show();
            } else {
                $(".display." + checkboxname).hide();
            }
        }

        $('#close-all').click(function() {
		 	// $('input[type="checkbox"]').empty();
		 	$('input[type=checkbox]').each(function() { this.checked = false; }); 
		 	$('.display.' + checkboxname).hide();
		 	$('.clearall').hide();
		 	$('#fitness-checkboxes').hide();
			$('#workout-checkboxes').hide();
			$('#trainer-checkboxes').hide();

		});
    
   
    });

})