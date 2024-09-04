document.addEventListener("DOMContentLoaded", function () {
  const song = document.getElementById("mySong");
  const innersquare = document.querySelector(".innersquare");

  let isPlaying = false;
  const startFrom = 2;
  let hasStarted = false;

  innersquare.addEventListener("click", () => {
    if (isPlaying) {
      song.pause();
      innersquare.classList.remove("clicked");
    } else {
      if (!hasStarted) {
        song.currentTime = startFrom;
        hasStarted = true;
      }
      song.play();
      innersquare.classList.add("clicked");
    }
    isPlaying = !isPlaying;
  });
});
