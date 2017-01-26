$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).on("load resize",function(e) {
    var more = document.getElementById("js-centered-more");

    if ($(more).length > 0) {
      var windowWidth = $(window).width();
      var moreLeftSideToPageLeftSide = $(more).offset().left;
      var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

      if (moreLeftSideToPageRightSide < 330) {
        $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
        $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
      }

      if (moreLeftSideToPageRightSide > 330) {
        $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
        $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
      }
    }

    var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
    $("#js-centered-navigation-menu").removeClass("show");

    menuToggle.on("click", function(e) {
      e.preventDefault();
      $("#js-centered-navigation-menu").slideToggle(function(){
        if($("#js-centered-navigation-menu").is(":hidden")) {
          $("#js-centered-navigation-menu").removeAttr("style");
          }
      });
    });
  });

  $(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	 });
  });

  var $body = $(document);
   $body.bind('scroll', function() {
       if ($body.scrollLeft() !== 0) {
           $body.scrollLeft(0);
       }
   });
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
