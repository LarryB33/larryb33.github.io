
let navs = document.querySelectorAll('.dropdown_menu_main');
let footer = document.querySelector('footer');
let navFoodMenu = document.querySelector('#nav-food-menu');
let sideNavBtnPlaceHolder = document.querySelector('#side_nav_btn');


let sideNavBtnHTML = `
  <span class="open_slide_menu">
    <a href="#" onclick="toggleSlideMenu">
      <svg width="30" height="30">
        <path d="M0,5 30,5" stroke="rgba(0,0,0, 0.5)" stroke-width="3"/>
        <path d="M0,14 30,14" stroke="rgba(0,0,0, 0.5)" stroke-width="3"/>
        <path d="M0,23 30,23" stroke="rgba(0,0,0, 0.5)" stroke-width="3"/>
      </svg>
    </a>
  </span>
`;
sideNavBtnPlaceHolder.innerHTML = sideNavBtnHTML;

// ORIGINAL MENU FOR NORMAL TIMES
let navHTML = `
  <li class="main-menu-li"><a class="main-menu-a" href="index.html">Home</a></li>
`;
/*
navHTML += `
   <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html">St. Patrick's 2023</a>
     <ul class="dropdown_menu_inner">
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_1">March 11th (Parade Day)</a></li>
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_2">Kid's Day</a></li>
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_3">Celtic Cross</a></li>
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_4">First Responders Appreciation</a></li>
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_5">Silent Disco</a></li>
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_6">St. Patrick's Day</a></li>
       <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#event_7">The Seven Wonders</a></li>
     </ul>
   </li>
   <li class="main-menu-li"><a class="main-menu-a" href="events-calendar.html">Events Calender</a></li>
 `;
 */
/*
navHTML += `
  <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html">St. Patrick's 2022</a>
    <ul class="dropdown_menu_inner">
      <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#irish_menu">Irish Menu</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="https://www.eventbrite.com/e/sjs-presents-billy-joel-barenaked-ladies-tribute-bands-in-the-big-tent-tickets-262230306907?aff=efbevent" class="button">Purchase Tickets (Sunday 13th ONLY)</a></li>
    </ul>
  </li>
`;
*/
navHTML += `
  <li class="main-menu-li"><a class="main-menu-a" href="tostartshare.html#nav-food-menu">Our Menu</a>
    <ul class="dropdown_menu_inner">
      <li class="main-menu-li"><a class="main-menu-a" href="tostartshare.html">Start & Share</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="salads.html">Salads</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="soups.html">Soups</a></li>
      `;
      // navHTML += `
      // <li class="main-menu-li"><a class="main-menu-a" href="pizza.html">Pizza & Pasta</a></li>
      // <li class="main-menu-li"><a class="main-menu-a" href="latenightmenu.html">Late Night</a></li>
      // <li class="main-menu-li"><a class="main-menu-a" href="stpaddysday.html#irish_menu">Practice Menu</a></li>
      // <li class="main-menu-li"><a class="main-menu-a" href="kidsmenu.html">Kids Menu</a></li>
      // `;
      navHTML += `
      <li class="main-menu-li"><a class="main-menu-a" href="handhelds.html">Handhelds</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="irish_fare.html">Irish Fare</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="entrees.html">Entrees</a></li>
      <li class="main-menu-li"><a class="main-menu-a" href="irish-whiskey-menu.html">Irish Whiskey</a></li>
    </ul>
  </li>
  `;
  // navHTML += `
  // <li class="main-menu-li"><a class="main-menu-a" href="">Alcohol Menu</a>
  //   <ul class="dropdown_menu_inner">
  //     <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/draft_beers/shamrockjacks/1">Draft Beer List</a></li>
  //     <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/bottle_beers/shamrockjacks/1">Bottle Beer List</a></li>
  //     <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/winelist_menu/shamrockjacks/1">Wine Menu</a></li>
  //     <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/winelist_description/shamrockjacks/1">Wine Descriptions</a></li>
  //     <li class="main-menu-li"><a class="main-menu-a" href="irish-whiskey-menu.html">Irish Whiskey</a></li>
  //   </ul>
  // </li>
  // `;
  navHTML += `
  <li class="main-menu-li"><a class="main-menu-a" href="aboutus.html">About Us</a></li>
  `;
  // navHTML += `
  // <li class="main-menu-li"><a class="main-menu-a" href="partyplan.html">Plan a Party</a></li>
  // `;
  navHTML += `
  <li class="main-menu-li"><a class="main-menu-a" href="contactus.html">Contact Us</a></li>
`;
////////// END ORIGINAL MENU


//BEGIN COVID MENU
// let navHTML = `
//   <li class="main-menu-li"><a class="main-menu-a" href="index.html">Home</a></li>
//   <li class="main-menu-li"><a class="main-menu-a" href="">Alcohol Menu</a>
//     <ul class="dropdown_menu_inner">
//       <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/draft_beers/shamrockjacks/1">Draft Beer List</a></li>
//       <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/bottle_beers/shamrockjacks/1">Bottle Beer List</a></li>
//       <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/winelist_menu/shamrockjacks/1">Wine Menu</a></li>
//       <li class="main-menu-li"><a class="main-menu-a" href="http://3.15.197.53/winelist_description/shamrockjacks/1">Wine Descriptions</a></li>
//       <li class="main-menu-li"><a class="main-menu-a" href="irish-whiskey-menu.html">Irish Whiskey</a></li>
//     </ul>
//   </li>
//   <li class="main-menu-li"><a class="main-menu-a" href="aboutus.html">About Us</a></li>
//   <li class="main-menu-li"><a class="main-menu-a" href="contactus.html">Contact Us</a></li>
// `;


//END COVID MENU
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
    <li class="food-nav-li"><a class="food-nav-a" href="tostartshare.html#nav-food-menu">Starters</a></li>
    <li class="food-nav-li"><a class="food-nav-a" href="salads.html#nav-food-menu">Salads</a></li>
    <li class="food-nav-li"><a class="food-nav-a" href="soups.html#nav-food-menu">Soups</a></li>
    <li class="food-nav-li"><a class="food-nav-a" href="handhelds.html#nav-food-menu">Handhelds</a></li>
    <li class="food-nav-li"><a class="food-nav-a" href="irish_fare.html#nav-food-menu">Irish Fare</a></li>
    <li class="food-nav-li"><a class="food-nav-a" href="entrees.html#nav-food-menu">Entrees</a></li>
    `;
    // navFoodMenuHTML += `
    // <li class="food-nav-li"><a class="food-nav-a" href="kidsmenu.html#nav-food-menu">Kids Menu</a></li>
    // <li class="food-nav-li"><a class="food-nav-a" href="pizza.html#nav-food-menu">Pizza & Pasta</a></li>
    // <li class="food-nav-li"><a class="food-nav-a" href="latenightmenu.html#nav-food-menu">Late Night</a></li>
    // `;
    navFoodMenuHTML += `
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
