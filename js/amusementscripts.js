$(function(){
  $("#checkHeight").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input:radio[name=tallness]:checked").val());
    $(".rideable").show();
    $(".smallRides").hide();
    $(".mediumRides").hide();
    $(".tallRides").hide();

    if (height === 1) {
      $(".smallRides").show();
    }
    if (height === 2) {
      $(".smallRides").show();
      $(".mediumRides").show();
    }
    if (height === 3) {
      $(".mediumRides").show();
      $(".tallRides").show();
    }
  });
});
