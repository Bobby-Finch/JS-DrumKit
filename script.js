function playSound(e) {
  const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  if (!audio) return; // stops function from running all together
  const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
  audio.currentTime = 0; // rewinds audio to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
