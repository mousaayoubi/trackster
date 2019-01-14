$(document).ready(function() {
  $(".form-control").keydown(function(e) {
    if (e.which == 13) {
      localStorage.setItem("byTitle", $(".form-control").val());
      window.open("./success.html", "_self");
      return false;
    }
  })

  $(".btn").click(function() {
    localStorage.setItem("byTitle", $(".form-control").val());
    window.open("./success.html", "_self");
  });
});