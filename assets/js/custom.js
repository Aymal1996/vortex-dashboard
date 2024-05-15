$(document).ready(function () {
  $('.six-input-field').on('keyup', function (event) {
    var inputValue = $(this).val()
    // Keep only the first character
    var sanitizedValue = inputValue.replace(/[^a-zA-Z0-9]/, '')
    $(this).val(sanitizedValue) // Update the input value
    if (inputValue.length === $(this).attr('maxlength')) {
      $(this).next('.six-input-field').focus()
    }
  })

  $('.six-input-field').on('keyup', function (event) {
    var inputLists = $('.six-input-field')
    inputLists.each(function (index) {
      var currentInput = $(this)
      if (
        currentInput.val().length === currentInput.attr('maxlength') &&
        parseInt(currentInput.attr('id')) < inputLists.length
      ) {
        $('#' + (parseInt(currentInput.attr('id')) + 1)).focus()
      }
    })
  })

  $('.six-input-field').on('keydown', function (event) {
    // If the Backspace key is pressed and the input field is empty, focus on the previous input field
    if (event.keyCode === 8 && $(this).val() === '') {
      $(this).prev('.six-input-field').focus()
    }
  })
  var elts = document.getElementsByClassName('six-input-field')
  Array.from(elts).forEach(function (elt) {
    elt.addEventListener('keyup', function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13 || elt.value.length == 1) {
        // Focus on the next sibling
        elt.nextElementSibling.focus()
      }
    })
  })

  // Error
  $('#submit-btn').click(function(){
    console.log('click');
    var allFieldsFilled = true;

    $(".error-message").remove(); // Remove any existing error messages

    $(".six-input-field").each(function() {
        var six_field = $(this).val().trim();
        console.log('six_field ');
        console.log(six_field);
        console.log('six_field ');
        if(six_field.length === 0){
            allFieldsFilled = false;
            $(this).addClass('empty-field'); // Add a class to the empty field
            console.log('empty');
        } else {
            $(this).removeClass('empty-field'); // Remove the class if the field is filled
            console.log('full');
        }
    });

    if (!allFieldsFilled) {
        $('.six-input').after(`<div class="error-message">Verification code didn't match!</div>`); // Show a message if any field is empty
    }
});



})
