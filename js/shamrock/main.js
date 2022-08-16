const toggleButton = document.getElementById('side_nav_btn');
const slide = document.querySelector('.slide');

toggleButton.addEventListener('click', function () {
  if (slide.classList.contains('slide-up')) {
    slide.classList.remove('slide-up');
  } else {
    slide.classList.add('slide-up');
  }
});

const timer = document.querySelector('#timer');
const dateTimer = document.querySelector('#date-timer');
const yearTimer = document.querySelector('#year-timer');
const hourTimer = document.querySelector('#hour-timer');
const minTimer = document.querySelector('#min-timer');
const secTimer = document.querySelector('#seconds-timer');
const milTimer = document.querySelector('#milli-timer');
const dayNumEl = document.querySelector('.day-num');
const hoursNumEl = document.querySelector('.hours');
const minsNumEl = document.querySelector('.mins');
const secsNumEl = document.querySelector('.secs');


function getTimeDifference(cd, td) {
  let delta = Math.abs(td - cd) / 1000;
  let days = Math.floor(delta / 86400);
  delta -= days * 86400;
  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  let mins = Math.floor(delta/60) % 60;
  delta -= mins * 60;
  let secs = parseInt(delta % 60);

  dayNumEl.innerText = days;
  hoursNumEl.innerText = hours;
  minsNumEl.innerText = mins;
  secsNumEl.innerText = secs;
}

// declared outside if statement to use late in calculating which events to hide
let thisDate = new Date();
if (timer) {
  setInterval(()=>{
    let currentDate = thisDate;
    let targetDate = new Date(2022,2,17);
    getTimeDifference(currentDate, targetDate);
  },1000);
}

document.addEventListener('scroll', e => {
  let upArrowContainer = document.querySelector('.up-arrow-container');
  let upArrow = document.querySelector('.up-arrow');
  if (this.scrollY > 150) {
    // console.log(this.scrollY);
    upArrowContainer.classList.remove('d-none');
    upArrowContainer.classList.remove('fade-out');
  } else if (this.scrollY <= 0) {
    upArrowContainer.classList.add('fade-out');
    setTimeout(()=> {
      upArrowContainer.classList.add('d-none');
    },2000);
  }
});


let sayings = [
  {
    "id": 1,
    "title": "To St. Patrick!",
    "body": "St. Patrick\'s Day is more than donning green shirts and drinking pints of green beer in the middle of March. The holiday has a purpose that is often overlooked during the parties, and this toast reminds us of that in the most cunning way.</br></br>\"Saint Patrick was a gentleman, Who through strategy and stealth, Drove all the snakes from Ireland, Here’s a toasting to his health. But not too many toastings Lest you lose yourself and then Forget the good Saint Patrick And see all those snakes again.\"",
  },
  {
    "id": 2,
    "title": "To Ireland!",
    "body": "Colleen is a very Irish name, and, for those who don't know, it means \'lass\'. It\'s such a fun rhyme that embodies Ireland perfectly.</br>\"Here's to the land of the shamrock so green, </br>Here\'s to each lad and his darlin\' colleen, </br>Here\'s to the ones we love dearest and most. </br>May God bless old Ireland, that\'s this Irishman\'s toast",
  },
  {
    "id": 3,
    "title": "To Drinking!",
    "body": "The Irish do love to drink, and, whether it\'s whiskey or beer, there\'s plenty to cheer. </br>\"May you always have a clean shirt, a clear conscience, and enough coins in your pocket to buy a pint!\" </br></br>Sometimes you just want to hope for the simple life and a few basic pleasures. </br></br>\"Here\'s to a long life and a merry one. </br>A quick death and an easy one. </br>A pretty girl and an honest one. </br>A cold pint-- and another one!\" </br></br>A little riddle may be in order, and this humorous little rhyme is perfect for any occasion.</br></br>\"In all this world, why I do think </br>There are five reasons why we drink: </br>Good friends, </br>good wine, </br>lest we be dry </br>and any other reason why.\"",
  },
  {
    "id": 4,
    "title": "To a Great Party!",
    "body": "That Irish wit can get a little wacky at times, and you have to appreciate these pub-worthy toasts. They\'re sure to make the entire table smile. </br></br>\"May the winds of fortune sail you, May you sail a gentle sea. May it always be the other guy who says, \'this drink\'s on me.\'\" </br></br>Ah, the logic! There is a certain truth to this one, and it may just get all your friends thinking. </br></br>\"When we drink, we get drunk. </br>When we get drunk, we fall asleep. </br>When we fall asleep, we commit no sin. </br>When we commit no sin, we go to heaven. </br>So, let\'s all get drunk, and go to heaven!\" </br></br>Along those same lines, this two-liner reminds us that it\'s all about today. </br>Tomorrow will bring what it may. </br>\"It is better to spend money like there\'s no tomorrow </br>than to spend tonight like there\'s no money!\"",
  },
  {
    "id": 5,
    "title": "To Luck!",
    "body": "The country of Ireland has seen some difficult times over the years, so it\'s no wonder that many great toasts bring with them a hope for a little luck. </br>\"May the luck of the Irish Lead to happiest heights And the highway you travel Be lined with green lights. Wherever you go and whatever you do, May the luck of the Irish be there with you.\" </br>You know that we cannot talk about Ireland without mentioning that elusive pot of gold at the end of the rainbow. </br></br>\"May you have all the happiness and luck that life can hold—And at the end of all your rainbows may you find a pot of gold.\" </br></br>If you\'re looking for something short and sweet, give this one a try. Obviously, it probably works best in an Irish pub. </br></br>\"If you’re lucky enough to be Irish... You\’re lucky enough!\"",
  },
  {
    "id": 6,
    "title": "To Friendship!",
    "body": "What would life be without great friendships? We laugh, we cry, we are there through everything life throws at us. In that spirit, let\'s not forget to toast our dearest friends. </br></br>\"May the lilt of Irish laughter lighten every load. </br>May the mist of Irish magic shorten every road... </br>And may all your friends remember all the favours you are owed!\" </br></br>This toast is a simple way to lighten the mood and remind everyone that you\'re all just out for a good time. </br></br>\"My friends are the best friends </br>Loyal, willing and able. </br>Now let\’s get to drinking! </br>All glasses off the table!\" </br></br>It\'s a tongue twister and not easy to put to memory. Yet, if you really want to toss out a riddle over a pint, this is a fantastic choice. </br></br>\"Here’s to you and yours, </br>And to mine and ours, </br>And if mine and ours ever come </br>Across you and yours, </br>I hope you and yours will do </br>As much for mine and ours, </br>As mine and ours have done </br>For you and yours!\"",
  },
  {
    "id": 7,
    "title": "To The Good Times!",
    "body": "There are times in life when you just have to look at the good times. The words of the Irish do a great job of reminding us of that. While these toasts are a bit more serious than some of the others, they\'re fantastic all the same. </br></br>\"Always remember to forget The things that made you sad. But never forget to remember The things that made you glad.\" </br></br>Use this little verse to wish anyone well. The sentiment is universal and the message is one for a positive future. </br></br>\"May the saddest day of your future be no worse Than the happiest day of your past.\" </br></br>There\'s a bit of sly wisdom behind this little diddy, and it\'s one that will leave everyone thinking for a minute. </br></br>\"May you have warm words on a cold evening, </br>A full moon on a dark night, </br>And the road downhill all the way to your door.\"",
  },
  {
    "id": 8,
    "title": "To Happiness!",
    "body": "We\'ll finish off with a few toasts that are all about wishing everyone around you the happiness they deserve. </br></br>\"May your heart be light and happy, May your smile be big and wide, </br>And may your pockets always have a coin or two inside!\" </br></br>It starts off with heartfelt sentiments of a relatively serious nature, but, by the end, it\'s a toast that will make everyone smile. </br></br>\"Health and long life to you. </br>The wife of your choice to you. </br>A child every year to you, </br>And life without rent to you </br>And may you be half an hour in heaven </br>Before the devil knows your dead.\" </br></br>One final bit of true Irish wisdom. You might say we left the best for last. </br></br>\"Dance as if no one were watching, </br>Sing as if no one were listening, </br>And live every day as if it were your last.\"",
  },
]

let sayingIndexNum = Math.floor(Math.random() * 8);
// console.log(sayingIndexNum);
let irishSayingTitle = document.querySelector('#irish-saying-title');
let irishSayingBody = document.querySelector('#irish-saying-body');
if (irishSayingTitle != null) {
  irishSayingTitle.innerHTML = sayings[sayingIndexNum].title;
  irishSayingBody.innerHTML = sayings[sayingIndexNum].body;
}
// console.log(irishSayingTitle);
// console.log(irishSayingBody);






setInterval(()=>{
  // console.log(thisDate);
  let currentDayNum = thisDate.getDate();
  let currentMonth = thisDate.getUTCMonth() + 1;
  let currentYear = thisDate.getUTCFullYear();
  let eventDate = document.querySelectorAll(".event-year");
  if (eventDate != null) {
    eventDate.forEach(ed => {
      let dateYear = ed.innerText;
      let dateMonth = ed.previousElementSibling.innerText;
      let dateDayNum = ed.previousElementSibling.previousElementSibling.innerText;
      if (dateDayNum < currentDayNum) {
        console.log(`dateDayNum== ${dateDayNum} ---- currentDayNum== ${currentDayNum}`);
        if (dateMonth <= currentMonth) {
          if (dateYear <= currentYear) {
            ed.parentElement.parentElement.parentElement.classList.add('d-none');
          }
        }
      }
    });
  }

},1000);
