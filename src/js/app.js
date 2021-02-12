// selects promo form
$("#calculation-brand").heapbox();
$("#calculation-model").heapbox();
$("#calculation-year").heapbox();

$("#order-calculation-brand").heapbox();
$("#order-calculation-model").heapbox();
$("#order-calculation-year").heapbox();

$("#example-calculation-brand").heapbox();
$("#example-calculation-model").heapbox();
$("#example-calculation-year").heapbox();


//header-menu
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

  $('body').on('click', '.page-header__menu--close', (e) => {
    $(`.page-header__menu--close`).addClass(`hide`);
    $(`.page-header__menu--open`).removeClass(`hide`);
    e.preventDefault();
    drawer.close();
  })


  // tabs
  $('#tabs-box').responsiveTabs({
    startCollapsed: 'tabs'
  });

  // tabs example section

  if ($(window).width() <= 768) {
    $('#card-1').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide',
      click: function(event, tab){
        // console.log(event)
        // console.log(tab)
        // console.log($(this).find(`.r-tabs-accordion-title .r-tabs-anchor`).text())
        // .replace("прочитать отзыв", "свернуть")
      }
    });
    $('#card-2').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide'
    });
    $('#card-3').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide'
    });
  }

  $('#faq').responsiveTabs({
    // collapsible: 'accordion',breakpoint
    // startCollapsed: 'accordion',
    animation: 'slide'
  });

  

  // console.log($(`#card-1`))
  
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
});