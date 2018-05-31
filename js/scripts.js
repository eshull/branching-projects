$(function(){
  $("#checkAge").submit(function(event) {
    event.preventDefault();
    var age = parseInt(prompt("What is your age?"));
    if (age >= 18) {
      $("#canVote").show();
    } else {
      $("#cannotVote").show();
    }
  })

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

  $(".warmOrCold").submit(function(event) {
    event.preventDefault();
    var firstAnswer = $("#bloodType").val();

    if (firstAnswer === "warmbBlood") {
      $(".warmOrCold").hide();
      $(".mammals").show();
    } else {
      $(".warmOrCold").hide();
      $(".scalyOrSlimy").show();
    }
  })

  $(".scalyOrSlimy").submit(function(event) {
    event.preventDefault();
    var secondAnswer = $("#skinType").val();
    if (secondAnswer === "scaly") {
      $(".scalyOrSlimy").hide();      $(".reptile").show();
    } else {
      $(".scalyOrSlimy").hide();
      $(".amphibian").show();
    }
  });

});
