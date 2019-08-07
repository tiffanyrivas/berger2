// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
        console.log(this);
      var id = $(this).data("id");
    //   var newDevour = $(this).data("devoured");
  
      var newDevour  = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/"+ id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("changed devour to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
//       var x = $("#burgerInput").val().trim();
//   console.log(x);
  
      var newBurger = {
        name: $("#burgerInput").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});


