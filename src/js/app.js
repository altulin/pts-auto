



$(function() {

  // selects promo form
  // $("#calculation-brand").heapbox({"heapsize":"300px"});
  $("#first-calculation-model").heapbox();
  $("#first-calculation-year").heapbox();
  $(`#heapbox_first-calculation-model .holder`).css("pointer-events", "none")

  // $("#order-calculation-brand").heapbox();
  $("#order-calculation-model").heapbox();
  $("#order-calculation-year").heapbox();
  $(`#heapbox_order-calculation-model .holder`).css("pointer-events", "none")

  // $("#example-calculation-brand").heapbox();
  $("#example-calculation-model").heapbox();
  $("#example-calculation-year").heapbox();
  $(`#heapbox_example-calculation-model .holder`).css("pointer-events", "none")

  // $("#modal-calculation-brand").heapbox();
  $("#modal-calculation-model").heapbox();
  $("#modal-calculation-year").heapbox();
  $(`#heapbox_modal-calculation-model .holder`).css("pointer-events", "none")



  //header-menu
  const menu = new MmenuLight(
    document.querySelector( "#header-menu" ),
    "(max-width: 600px)"
  );

  const navigator = menu.navigation({
    title: ""
  });
  const drawer = menu.offcanvas();

  $('body').on('click', '.page-header__menu--open', (e) => {
    $(`.page-header__menu--open`).addClass(`hide`);
    $(`.page-header__menu--close`).removeClass(`hide`);
    e.preventDefault();
    drawer.open();

  })

  $('body').on('click', '.page-header__menu--close', (e) => {
    $(`.page-header__menu--close`).addClass(`hide`);
    $(`.page-header__menu--open`).removeClass(`hide`);
    e.preventDefault();
    drawer.close();
  })


  // tabs
  $('#tabs-box').responsiveTabs({
    startCollapsed: 'tabs',
    startCollapsed: 'accordion'
  });

  // tabs example section

  if ($(window).width() <= 768) {
    $('#card-1').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide',
    });

    $('#card-2').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide'
    });

    $('#card-3').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide'
    });

    $('#card-4').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide'
    });

    $('#card-5').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide'
    });
  }

  $('#faq').responsiveTabs({
    startCollapsed: 'accordion',
    animation: 'slide'
  });
});


// map
let map;

DG.then(function () {
    map = DG.map('map', {
        center: [52.26745, 104.33916],
        zoom: 15,
        scrollWheelZoom: false
    });
    myIcon = DG.icon({
                iconUrl: 'img/dest/marker.png',
                iconSize: [48, 60]
            });
    DG.marker([52.2677, 104.33916], {
      draggable: true,
      icon: myIcon
    }).addTo(map);


    
    
    // Взять все элементы <input> у которых атрибут class="phone field"
    $('.input-phone').mask("+7 (999) 999-9999")


    //подгрузить отзывы
    $(`body`).on(`click`, `.review__link`, (e) => {
      e.preventDefault();
      $('.card').removeClass(`card--hide`);
      $('.review__link').hide()
    })
});