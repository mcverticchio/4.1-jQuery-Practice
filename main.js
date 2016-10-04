(function($){
  $(function(){
    "use strict";
    // console.log(jQuery);   --> CHECK TO SEE IF JQUERY IS WORKING

    var heading = jQuery('h4');
      console.log(heading);

    console.log(this);


var hiddenItems = $('.belowitems');
var titleItem = $('.heading');


titleItem.hover(function(){
  // $(this).css("background-color", "#8CB338");
// }, function(){
//   $(this).css("background-color", '#5E6065');
  $(this).css("cursor", "pointer");
});


titleItem.click(function(event){
  event.preventDefault();
  $(this).next().slideToggle();                       //THIS REFERS TO "TITLEITEM", SO THE HEADER.
  // hiddenItems.slideToggle("slow", function(){      //NEXT IS SAYING THE NEXT SIBLING WHICH IS MY "BELOWITEMS"
  //
  // });
});

  });
}(jQuery));
