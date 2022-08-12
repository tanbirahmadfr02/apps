// ============counter up part start ============
$('.counter').counterUp();
// ============counter up part end ============
  // ========back to top part ======
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $(".back_to_top").addClass("bottom_to_top")
    }else{
      $(".back_to_top").removeClass("bottom_to_top")
    }
  });
  // ========back to top part ======
   // =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
main_menu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========