$(document).ready(function() {
 
	$("form").submit(function() {
		var $form = $(this);
		var data = $form.serialize();
		
		if (validateForm($form)) {
			$.post("./assets/mail.php", data, function(resp) {});
			
			
//*************************************************************************************************
			//КОД ДЛЯ GOOGLE ANALYTICS:
			//ga('send', 'event', 'FormContact1', {nonInteraction: true});
			//ga('send', 'event',	'FormContact1', 'play', 'Fall Campaign');

//*************************************************************************************************			
			//КОД ДЛЯ МЕТРИКИ ЯНДЕКС:
			// ЗДЕСЬ ХХХХХХ - номер счетчика, FormContact - имя события, которое будет отображаться в метрике
			//yaCounter39173625.reachGoal('FormContact');
//*************************************************************************************************

			$('#exampleModal').arcticmodal({
				beforeOpen: function(data, el) {
					if ($('.modal').hasClass('show')) {
						$('.modal').addClass('zoomOut');						
                  		$('.modal_wrapper').addClass('fadeOut');                  		
                        $('.modal').removeClass('show zoomIn');      
                        $('.modal_wrapper').removeClass('show fadeIn');                  		
                 	}
				}				
    		});
//
		} else { return false; };

		return false;
	});

});
 

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("modal_error");
			setTimeout(function(){
                        $(element).removeClass('modal_error');
                  }, 1500);
			valid = false;
		}
		else {
			$(element).removeClass("modal_error");
		}
	});
	return valid;

}
//*****************
// var owl = $('#owl-1');
//
// $("input[name^='user-phone']").mask("+7 (999) 999 - 9999");
//
// owl.owlCarousel({
//   loop:true,//Зацикливаем слайдер
//   margin:40,
//   nav:true,
//   dots: true,
//   //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
//   //autoplay:true, //Автозапуск слайдера
//   smartSpeed:1000, //Время движения слайда
//   autoplayTimeout:30, //Время смены слайда
//   responsiveClass:true,
//   dotsEach: true,
//
//   responsive:{
//     0:{
//       items:1,
//       dots: false
//     },
//     768:{
//       items:2
//     },
//     1000:{
//       items:2
//     }
//   }
// });
$("input[name^='user-phone']").mask("+7 (999) 999 - 9999");
var owl0 = $('#owl-0');
var owl1 = $('#owl-1');
var owl2 = $('#owl-2');
owl0.owlCarousel({
  loop:true,//Зацикливаем слайдер
  margin:40,
  nav:true,
  dots: true,
  //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
  //autoplay:true, //Автозапуск слайдера
  smartSpeed:1000, //Время движения слайда
  autoplayTimeout:30, //Время смены слайда
  responsiveClass:true,
  dotsEach: true,

  responsive:{
    0:{
      items:1,
      dots: true
    },
    740:{
      items:1
    },
    1020: {
      items:1
    }
  }
});
owl1.owlCarousel({
  loop:true,//Зацикливаем слайдер
  margin:40,
  nav:true,
  dots: true,
  //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
  //autoplay:true, //Автозапуск слайдера
  smartSpeed:1000, //Время движения слайда
  autoplayTimeout:30, //Время смены слайда
  responsiveClass:true,
  dotsEach: true,

  responsive:{
    0:{
      items:1,
      dots: false
    },
    740:{
      items:2
    },
    992:{
      items:3
    },
    1020: {
      margin:20
    }
  }
});
owl2.owlCarousel({
  loop:true,//Зацикливаем слайдер
  margin:0,
  nav:true,
  dots: false,
  //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
  //autoplay:true, //Автозапуск слайдера
  smartSpeed:1000, //Время движения слайда
  autoplayTimeout:30, //Время смены слайда
  responsiveClass:true,
  dotsEach: false,

  responsive:{
    0:{
      items:1,
      dots: false
    },
    1000:{
      items:2
    }
  }
});

//*****************



