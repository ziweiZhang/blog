// build time:Sun Jun 24 2018 22:32:14 GMT+0800 (中国标准时间)
$(window).scroll(function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")});$("#rocket").click(function(){$("#rocket").addClass("launch");$("html, body").animate({scrollTop:0},500,function(){$("#rocket").removeClass("show launch")});return false});
//rebuild by neat 