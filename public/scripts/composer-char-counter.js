$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on('keyup', function() {
    // console.log("ITS WORKING");
    var tweetCount = $(this).val().length;
    $("output").text(140-tweetCount);

    // if (!tweetCount > 140) {
    //   console.log("TOO MUCH");

    // }

    let $tc = $(this).closest('.input-box').siblings('.bottomline').find('.counter').text(140 - tweetCount);
    if (tweetCount <= 140) {
      $tc.removeClass('error');
    } else {
      $tc.addClass('error');
    }

  })

});