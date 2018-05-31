$(function(){
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
