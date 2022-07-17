$(function(){
    $("p.menu").click(function(){
        $(".sidebar").toggle();
        $(".content.container").toggleClass("hide");
    });
  });