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
var mainMenu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
mainMenu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========