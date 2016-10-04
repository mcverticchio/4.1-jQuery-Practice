(function($){
  $(function(){
    "use strict";
    // console.log(jQuery);   --> CHECK TO SEE IF JQUERY IS WORKING

    var heading = jQuery('h4');
      console.log(heading);

    console.log(this);

    // $('.myfiles').hide();
    // $('.myclouds').hide();
    // var myFiles = $(.myfiles)

var hiddenItems = $('.belowitems');
var titleItem = $('.heading');
// var titleItem2 = $('.heading-2');
// var titleItem3 = $('.heading-3');
// var titleItem4 = $('.heading-4');


titleItem.hover(function(){
  $(this).css("background-color", "#8CB338");
}, function(){
  $(this).css("background-color", '#5E6065');
});

titleItem
  .css("text-align", "center");


titleItem.click(function(event){
  event.preventDefault();
  $(this).next().slideToggle();
  // hiddenItems.slideToggle("slow", function(){
  //
  // });
});

hiddenItems
  .css("text-align", "center");





  });
}(jQuery));
