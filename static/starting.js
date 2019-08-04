function add_popup() {
  document.getElementById('about_us').className = 'popup';
  document.getElementById('team_div').className = 'popup';
  document.getElementById('time_div').className = 'popup';
  document.getElementById('idea_div').className = 'popup';
  document.getElementById('icecream_div').className = 'popup';
}

/*
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
*/

/*
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
}

loop();
*/
