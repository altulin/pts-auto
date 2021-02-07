// selects promo form
$("#calculation-brand").heapbox();
$("#calculation-model").heapbox();
$("#calculation-year").heapbox();


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

  console.log($(`demoTab`))

  $('#demoTab').easyResponsiveTabs(
    {
      // tabidentify: 'vert',
      type: `default`,
      width: `auto`,
      fit: true,
      closed: 'accordion', // Start closed if in accordion view
      tabidentify: 'hor_1', // The tab groups identifier
      activate: function (event) { // Callback function if tab is switched
          var $tab = $(this);
          var $info = $('#nested-tabInfo');
          var $name = $('span', $info);

          $name.text($tab.text());

          $info.show();
      }
    }
  );
});
