// $(document).ready(function(){
//   var age = parseInt(prompt("How old are you?"));
//
//   if (age > 21) {
//     $('#drinks').show();
//   } else if (age === 21) {
//     alert("Now don't get crazy");
//     $('#drinks').show();
//   } else {
//     $("#under-21").show();
//   }
// });

$(function(){
  var age = parseInt(prompt("What is your age?"));

  if (age >= 18) {
    $("#canVote").show();
  } else {
    $("#cannotVote").show();
  }
});
