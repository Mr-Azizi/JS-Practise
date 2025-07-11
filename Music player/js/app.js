const music = document.querySelector("audio");
const tenSecForward = document.querySelector(".ten-sec-forward");
const tenSecBackForward = document.querySelector(".ten-sec-back-forward");
const playBtn = document.querySelector(".play");
const playOrPauseBtn = playBtn.querySelector("i");
const forwardBtn = document.querySelector(".forward");
const backForwardBtn = document.querySelector(".back-forward");
const musicCover = document.querySelector("img");
const musicTitle = document.querySelector("h1");

let mainMusicIndex = 0;

const musics = [
  {
    id: 1,
    src: "./public/musics/bende-naf-ta-khate-saf.mp3",
    cover: "./public/cover1.jpg",
    title: "بند ناف تا خط صاف",
    singer: "یاس",
  },
  {
    id: 2,
    src: "./public/musics/sefareshi.mp3",
    cover: "./public/cover2.jpg",
    title: "سفارشی",
    singer: "یاس",
  },
  {
    id: 3,
    src: "./public/musics/sarkoob.mp3",
    cover: "./public/cover3.jpg",
    title: "سرکوب",
    singer: "یاس",
  },
];

function playMusic() {
  if (playOrPauseBtn.className.includes("fa-play")) {
    music.play();
    playOrPauseBtn.classList.remove("fa-play");
    playOrPauseBtn.classList.add("fa-pause");
  } else {
    music.pause();
    playOrPauseBtn.classList.remove("fa-pause");
    playOrPauseBtn.classList.add("fa-play");
  }
}
function forward10Sec() {
  music.currentTime += 10;
}
function back10Sec() {
  music.currentTime -= 10;
}
function forwardhandler(){
  mainMusicIndex++;
  if (mainMusicIndex > musics.length) {
    mainMusicIndex = 0;
  }
  mainMusic = musics[mainMusicIndex];
  music.src = mainMusic.src;
  musicCover.src = mainMusic.cover;
  musicTitle.textContent = mainMusic.title;
  if (playOrPauseBtn.className.includes("fa-pause")) {
    setTimeout(()=> {
      music.play();
    }, 100);
  }
}
function backForwardhandler(){
  mainMusicIndex--;
  if (mainMusicIndex < 0) {
    mainMusicIndex = musics.length - 1;
  }
  mainMusic = musics[mainMusicIndex];
  music.src = mainMusic.src;
  musicCover.src = mainMusic.cover;
  musicTitle.textContent = `${mainMusic.title} - ${mainMusic.singer}`;
  
  if (playOrPauseBtn.className.includes("fa-pause")) {
    setTimeout(()=> {
      music.play();
    }, 100);
  }
}

playOrPauseBtn.addEventListener("click", playMusic);
tenSecForward.addEventListener("click", forward10Sec);
tenSecBackForward.addEventListener("click", back10Sec);
forwardBtn.addEventListener("click", forwardhandler);
backForwardBtn.addEventListener("click", backForwardhandler);