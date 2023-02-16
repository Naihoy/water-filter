function checkSelectedOption() {
    var selectedOption1 = $('select.filter-select1').val();
    var selectedOption2 = $('select.filter-select2').val();
    var selectedOption3 = $('select.filter-select3').val();
    var selectedOption4 = $('select.filter-select4').val();
    var selectedOption5 = $('select.filter-select5').val();
    var selectedOption6 = $('select.filter-select6').val();
    console.log(selectedOption1);
    console.log(selectedOption2);
    console.log(selectedOption3);
    console.log(selectedOption4);
    console.log(selectedOption5);
    console.log(selectedOption6);
    $(".display").hide();
    $('.clearall').show();
    if (selectedOption1 || selectedOption2 || selectedOption3 || selectedOption4 || selectedOption5 || selectedOption6) {
        if ($(".display." + selectedOption1).length || $(".display." + selectedOption2).length || $(".display." + selectedOption3).length || $(".display." + selectedOption4).length || $(".display." + selectedOption5).length || $(".display." + selectedOption6).length) {
            $(".display").hide();
            $(".display." + selectedOption1 + ", .display." + selectedOption2 + ", .display." + selectedOption3 + ", .display." + selectedOption4 + ", .display." + selectedOption5 + ", .display." + selectedOption6).show();
            $('.clearall').show();
        } else {
            $(".display").hide();
       }
    }
}
//     if ($(".display").hasClass(selectedOption)) {
//         $(".display").hide();
//         $(".display." + selectedOption).show();
//         $('.clearall').show();
//     } else {
//         $(".display").hide();
//     }
// }

$(document).ready(function () {
    checkSelectedOption();
});

$('select.filter-select1, select.filter-select2, select.filter-select3, select.filter-select4, select.filter-select5, select.filter-select6').change(function () {
    checkSelectedOption();


    $('#close-all').click(function () {
        //  $('select.filter-select').empty();
        $('input[type=checkbox]').each(function () {
            this.checked = false;
        });
        $('.display.' + selectedOption).hide();
        $('.clearall').hide();
        $('#fitness-checkboxes').hide();
        $('#workout-checkboxes').hide();
        $('#trainer-checkboxes').hide();

    });


});