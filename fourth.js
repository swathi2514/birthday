function openMemory(img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupImg").src = img;
}

function closeMemory() {
  document.getElementById("popup").style.display = "none";
}
const music = document.getElementById("bg-music");

const playBtn = document.getElementById("play-btn");

const pauseBtn = document.getElementById("pause-btn");


// PLAY BUTTON
playBtn.addEventListener("click", function(){

    music.play();

});


// PAUSE BUTTON
pauseBtn.addEventListener("click", function(){

    music.pause();

});