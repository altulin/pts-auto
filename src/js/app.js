



$(function() {

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

  $(`.header-nav__link`).each(function() {
    $(this).on(`click`, () => {
      drawer.close();
      $(`.page-header__menu--close`).addClass(`hide`);
      $(`.page-header__menu--open`).removeClass(`hide`);
    })
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
    startCollapsed: 'accordion'
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
      // draggable: true,
      icon: myIcon
    }).addTo(map);

    
    // Взять все элементы <input> у которых атрибут class="phone field"
    $('.input-phone').mask("+7 (999) 999-99-99")


    //подгрузить отзывы
    $(`body`).on(`click`, `.review__link`, (e) => {
      e.preventDefault();
      $('.card').removeClass(`card--hide`);
      $('.review__link').hide()
    })

    // срабатывания цели на открытие thank-modal
    $('#thank-modal').on($.modal.OPEN, function(event, modal) {
      ym(67969729,'reachGoal','thank-modal');
    });

    
});