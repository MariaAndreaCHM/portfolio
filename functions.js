//menu

let toggleBtn = document.getElementById("toggle-btn");
let menuItems = document.querySelectorAll(".menu a");
let menuActive = false;
toggleBtn.addEventListener("click", () => {
  if (!menuActive) {
    menuItems[0].style.transform = "translate(150px,0)";
    menuItems[1].style.transform = "translate(150px,90px)";
    menuItems[2].style.transform = "translate(90px,150px)";
    menuItems[3].style.transform = "translate(0,150px)";
    menuActive = true;
    toggleBtn.classList.add("active");
  } else {
    menuItems.forEach((menuItem) => {
      menuItem.style.transform = "translate(0,0)";
    });
    menuActive = false;
    toggleBtn.classList.remove("active");
  }
});

//clock
var hour = document.getElementById("hour");
            var minute = document.getElementById("minute");
            var seconds = document.getElementById("seconds");
        
            var set_clock = setInterval(function clock(){
                var date_now = new Date();
                var hr = date_now.getHours();
                var min = date_now.getMinutes();
                var sec = date_now.getSeconds();
        
                var calc_hr = (hr * 30) + (min / 2);
                var calc_min = (min * 6) + (sec / 10);
                var calc_sec = sec*6;
        
                hour.style.transform = 'rotate(' + calc_hr + "deg)";
                minute.style.transform = 'rotate(' + calc_min + 'deg)';
                seconds.style.transform = 'rotate(' + calc_sec + 'deg)';
            }, 1000);

            var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//cube transtions
let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let pos = 0;
btnNext.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", () => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});