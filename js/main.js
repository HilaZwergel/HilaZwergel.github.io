$(function(){

  var $doc = $(document);
  var docHeight = $doc.height();
  var $scroller;

  //Set screen height to doc height
  var $blankingScreen = $('.loader-wrapper');
  if($blankingScreen.length > 0){
    $blankingScreen.css('height', docHeight + 'px');

    //Turn on screen
    $blankingScreen.addClass('active');

    //after 2 secs turn off screen
    setTimeout(function(){
      $blankingScreen.removeClass('active');
    }, 2000);
  }

$('.about').animate({ width: "100%" }, 1000);
  // /* SCROLL */
  // /* Move on page load */
  // $scroller = $('.frame');
  // $scroller.scrollLeft(localStorage.getItem('scrollPosition'));
  //
  // /* Save scroll position */
  // $scroller.on('scroll', function($e){
  //   var leftPos = $(this).scrollLeft();
  //   console.log(leftPos);
  //   localStorage.setItem('scrollPosition', leftPos);
  // });




}); // end of document
