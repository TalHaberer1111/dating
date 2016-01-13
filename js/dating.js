$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var hobbies = $("select#hobbies").val();

    if (age) {
      if (age <= 21 && hobbies == 'coffee'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies == 'coffee'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age <= 21 && hobbies == 'tea'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies == 'tea'){
          $("#result4").show();
    }
  }

     else {
      alert('Please fill in the details.');
    }

    event.preventDefault();
  })
  });
