document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.sub-nav>a, #menu-toggle').forEach(function(e) {

    e.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    toggleSubMenu(e);
    });

});

    jQuery("body").on('click', function(event) {
      if (!jQuery(event.target).closest('nav').length) {
          jQuery(".sub-nav>ul").css("display", "none");
          jQuery(".sub-nav>a").attr("aria-expanded", "false");
      }
    });

});


function toggleSubMenu(e)
{
    const ul = e.nextElementSibling;
    const isExpanded = e.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        ul.style.display="none";
        e.setAttribute('aria-expanded', 'false');
    } else {
        jQuery(".sub-nav>ul").css("display","none");
        jQuery(".sub-nav>a").attr("aria-expanded","false");
        ul.style.display="flex";
        e.setAttribute('aria-expanded', 'true');
    }
}

jQuery(document).ready(function()
{
  jQuery.get("/data.json",function(data){
    if(data)
    {
        jQuery("#last-updated").html(data.lastUpdated);
        jQuery("#complaint-received .figure").html(data.complaintsReceived);
        jQuery("#cases-registered .figure").html(data.casesRegistered);
        jQuery("#money-frozen .figure").html(data.moneyFrozen);
        jQuery(".stats-box.loading").removeClass("loading");
    }
  })
});


