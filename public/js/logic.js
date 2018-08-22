$(document).ready(function(){

  $("#submit").on("click", function(){
      event.preventDefault();
      console.log("This works");
      $(".form-control").val("");
  })
})