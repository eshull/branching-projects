$(function(){
    var age = parseInt(prompt("What is your age?"));
    if (age >= 18) {
      $("#canVote").show();
    } else {
      $("#cannotVote").show();
    }

});
