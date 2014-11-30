$(document).ready(function() {


$("topitem").hover(function() {
  $(this).addClass("topitem-hover");
}, function () {
  $(this).removeClass("topitem-hover");
});


$("sidebar-item").click(function(){
  $("bucketlist").hide();

});

$("sidebar-item:first-child").click(function(){
  $("bucketlist").show();

});

$("bucketlist-img").on("mouseover", function(){
  $(this).css("cursor", "pointer");
  $(this).addClass("bucketlist-img-hover");

});




});