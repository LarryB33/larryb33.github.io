
let navs = document.querySelectorAll('.dropdown_menu_main');
let footer = document.querySelector('footer');
let navFoodMenu = document.querySelector('#nav-food-menu');
let sideNavBtnPlaceHolder = document.querySelector('#side_nav_btn');


let sideNavBtnHTML = '<span class="open_slide_menu"><a href="#" onclick="toggleSlideMenu"><svg width="30" height="30"><path d="M0,5 30,5" stroke="rgba(0,0,0, 0.5)" stroke-width="3"/><path d="M0,14 30,14" stroke="rgba(0,0,0, 0.5)" stroke-width="3"/><path d="M0,23 30,23" stroke="rgba(0,0,0, 0.5)" stroke-width="3"/></svg></a></span>';

sideNavBtnPlaceHolder.innerHTML = sideNavBtnHTML;

// ORIGINAL MENU FOR NORMAL TIMES
let navHTML = '<li class="main-menu-li"><a class="main-menu-a" href="index.html">Home</a></li>';

navHTML += '<li class="main-menu-li"><a class="main-menu-a" href="tostartshare.html#nav-food-menu">Our Menu</a><ul class="dropdown_menu_inner"><li class="main-menu-li"><a class="main-menu-a" href="tostartshare.html">Start & Share</a></li><li class="main-menu-li"><a class="main-menu-a" href="salads.html">Salads</a></li><li class="main-menu-li"><a class="main-menu-a" href="soups.html">Soups</a></li><li class="main-menu-li"><a class="main-menu-a" href="flatbreads.html">Flatbreads</a></li><li class="main-menu-li"><a class="main-menu-a" href="handhelds.html">Handhelds</a></li><li class="main-menu-li"><a class="main-menu-a" href="entrees.html">Entrees</a></li><li class="main-menu-li"><a class="main-menu-a" href="late_night.html">Late Night</a></li></ul></li>';

navHTML += '<li class="main-menu-li"><a class="main-menu-a" href="contactus.html">Contact Us</a></li>';
////////// END ORIGINAL MENU


footer.innerHTML = `
  <div id="upper_footer">
    <div class="container grid grid-template-columns-480">
      <div class="address_footer container footer_container">
        <a href="index.html"><img src="/img/sj_header_logo.png" alt=""></a>
        <div>
          <address>
            4554 Culver Road<br>
            Rochester, NY 14622<br>
            Located in Sea Breeze<br>
            Phone: (585) 323-9310
          </address>
        </div>
      </div>
      <!-- COVID DELETE -->
      <!-- <div class="know_footer container footer_container">
        <h3>Get to Know Us</h3>
        <div>
          <a href="aboutus.html"><p>About Shamrock's</p></a>
          <a href="tostartshare.html#nav-food-menu"><p>Our Menus</p></a>
          <a href="events-calendar.html"><p>Upcoming Events</p></a>
        </div>
      </div> -->
      <!-- END COVID DELETE -->
      <div class="help_footer container footer_container">
        <h3>Need Help?</h3>
        <div>
          <a href="contactus.html"><p>Contact Us</p></a>
        </div>
      </div>
      <div class="container social_media_footer social-media-icons-container">
        <h3>Follow Us</h3>
        <div class="icons">
          <a href="https://www.facebook.com/Shamrockjacks33/"><img src=""><i class="fab fa-facebook-square icon"></i></a>
          <a href="https://twitter.com/shamrockjacks"><img src=""><i class="fab fa-instagram icon"></i></a>
          <a href="https://www.instagram.com/shamrockjacks/"><img src=""><i class="fab fa-twitter-square icon"></i></a>
          <a href="https://www.youtube.com/channel/UCZWmxIyBczZhZ8hbSIQhAdQ"><img src=""><i class="fab fa-youtube-square icon"></i></a>
        </div>
        <div class="button_div">
          <a href="contactus.html" class="button">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
  <div id="lower_footer">
    <p>&copy 2018 Shamrock Jack's LLC. All Rights Reserved. Design by Tony Joy</p>
  </div>
`;
// add menu to web pages
navs.forEach(nav => {
  //add menu html to main-nav and side_nav
  nav.innerHTML = navHTML;
});

let navFoodMenuHTML = `
  <ul class="food-menu-list">
      <li class="main-menu-li"><a class="main-menu-a" href="tostartshare.html">Start & Share</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="salads.html">Salads</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="soups.html">Soups</a></li>
      `;
       navFoodMenuHTML += `
       <li class="main-menu-li"><a class="main-menu-a" href="flatbreads.html">Flatbreads</a></li>
       `;
      navFoodMenuHTML += `
      <li class="main-menu-li"><a class="main-menu-a" href="handhelds.html">Handhelds</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="entrees.html">Entrees</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="late_night.html">Late Night</a></li>
  </ul>
`;
if (navFoodMenu != null) {
  navFoodMenu.innerHTML = navFoodMenuHTML;
}


let upArrowDiv = document.createElement('div');
let upArrowClassList = ["up-arrow-container", "fade-in", "d-none"]
upArrowDiv.classList.add(...upArrowClassList);
upArrowDiv.innerHTML = `<a href="#"><img class="up-arrow" src="../img/uparrow.svg" alt=""></a>`;
footer.insertAdjacentElement('afterend', upArrowDiv);

// select all the li's in the menu
let mainMenuLis = document.querySelectorAll('header li');
let mainMenuAs = document.querySelectorAll('.main-menu-a');
let loc = window.location.href.split("/")[3];
// console.log(loc);
mainMenuAs.forEach(a => {
  if ((loc==a.getAttribute("href")) || (loc==a.getAttribute("href").split(".")[0])) {
    a.parentElement.classList.add("current");
  }
});

// add click listener to add current class to menu item clicked
document.addEventListener('click', e => {
  mainMenuLis.forEach(li => {
    li.classList.remove("current");
  });
  // if (e.target.classList.contains('main-menu-li')){
  //   console.log(e.target);
  // }
  if (e.target.classList.contains('main-menu-a')){
    // console.log(e.target);
    e.target.parentElement.classList.add('current');
  }
  mainMenuLis.forEach(li => {
    // console.log(li);
  });
  // e.preventDefault();
});



let foodMenuLis = document.querySelectorAll('.food-nav-li');
let foodMenuAs = document.querySelectorAll('.food-nav-a');
let foodMenuLoc = window.location.href.split("/")[3];
// console.log(foodMenuLoc);
foodMenuAs.forEach(a => {
  // console.log(a.getAttribute("href"));
  // console.log(a.getAttribute("href").split("."));
  if (foodMenuLoc == a.getAttribute("href")) {
    // console.log(a.parentElement);
    a.parentElement.classList.add("current-food-menu");
    a.scrollIntoView({behavior: 'smooth'});
  }
});
let foodSubMenuLoc = window.location.href.split("/")[3];
// console.log(foodSubMenuLoc);
foodMenuAs.forEach(a => {
  // console.log(a.getAttribute("href"));
  // console.log(a.getAttribute("href").split("#")[0]);
  if (foodSubMenuLoc == a.getAttribute("href").split("#")[0]) {
    // console.log("RIGHT MENU");
    // console.log(a.getAttribute("href").split("#")[0]);
    a.parentElement.classList.add("current-food-menu");
    a.scrollIntoView({behavior: 'smooth'});
  }
});
