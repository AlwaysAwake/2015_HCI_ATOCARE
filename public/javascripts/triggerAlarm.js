window.onload = function() {
  var display = document.querySelector('#time'),
      timer = new CountDownTimer(210);

  timer.onTick(format).onTick(restart).start();

  function restart() {
    if (this.expired()) {
      setTimeout(function() { timer.start(); }, 1000);
    }
  }

  function format(minutes, seconds) {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ':' + seconds;
  }
};
