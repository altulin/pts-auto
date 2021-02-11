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
    console.log(`kffkfkfkfkk`)
    e.preventDefault();
    drawer.close();
  })


  // tabs
  $('#tabs-box').responsiveTabs({
    startCollapsed: 'tabs'
  });

  // console.log($(window).width())

  if ($(window).width() <= 768) {
    $('#card-1').responsiveTabs({
      startCollapsed: 'accordion'
    });
  }

  

  // console.log($(`#card-1`))
  
});
