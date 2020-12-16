$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on('keyup', function() {
    // console.log("ITS WORKING");
    const tweetCount = $(this).val().length;
    $("output").text(140-tweetCount);
  })

})