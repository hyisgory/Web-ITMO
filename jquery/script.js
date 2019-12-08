$(document).ready(function() {
  $("#flip").click(function() {
    $("#panel").animate({
      height: '-=25px',
      width: '-=25px'
    });
  });
  $("#a1").click(function(){
    $("#p1").css("color", "deeppink").slideToggle(2000).slideToggle(2000);
  });
  $("#p2").click(function(){
    $("#div1").fadeIn();
  });
  $("#p3").click(function(){
    $("#div2").animate({
      left: '+=130px',
      bottom: '-=30px'
    });
  });
  $("#p5").click(function(){
    $("#div5").animate({
      fontSize: '-=2px'
    });
  });
  $("#a5").click(function(){
    $("#a55").css("color", "mediumslateblue")
  });
});
