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



