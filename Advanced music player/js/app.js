
const musics = [
  { 
    id : 1,
    title: "پژواک‌های نیمه‌شب - لونا اسکای",
    src:"./public/audios/1.mp3",
    cover:"./public/images/1.jpg"
  },
  { 
    id : 2,
    title: "امواج فردا - افق نقره‌ای",
    src:"./public/audios/2.mp3",
    cover:"./public/images/2.jpg"
  },
  { 
    id : 3,
    title: "خاکسترهای فروزان - دره اسکارلترویاهای نئونی - سایه الکتریکی",
    src:"./public/audios/3.mp3",
    cover:"./public/images/3.jpg"
  },
  { 
    id : 4,
    title: "رویاهای نئونی - سایه الکتریکی",
    src:"./public/audios/4.mp3",
    cover:"./public/images/4.jpg"
  },
  { 
    id : 5,
    title: "زمزمه‌های باد - اورلیا نایت",
    src:"./public/audios/5.mp3",
    cover:"./public/images/5.png"
  },
  { 
    id : 6,
    title: "تعقیب غروب - خیال طلایی",
    src:"./public/audios/6.mp3",
    cover:"./public/images/6.jpg"
  }  
]

function ShowMusics() {
  const musicsContainer = document.querySelector(".musics-container");
  musicsContainer.innerHTML = ""; // Clear previous musics
  musics.forEach(function(musicObj){
    
    musicsContainer.insertAdjacentHTML("beforeend", 
    `
    <article class="music-card">
      <header>
        <img src="${musicObj.cover}" alt="کاور موزیک" />
        <div class="play-music">
          <button class="play-btn" data-src="${musicObj.src}">
            <i class="fa fa-play"></i>
          </button>
        </div>
      </header>
      <main>
        <p class="card-title">${musicObj.title}</p>
      </main>
      <footer>
          <button class="bookmark ${musicObj.isInPlaylist ? "bookmarked" : ""}" 
            onclick="addToPlaylist(${musicObj.id})">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </footer>
    </article>
    `
    );
  })

  const playBtns = document.querySelectorAll(".play-btn");
  const music = document.querySelector("audio");
  const playIcon = document.querySelector(".play-icon");
  const playButton = document.querySelector(".play-button");
  const musicName = document.querySelector(".music-name");
  const volumeCard = document.querySelector(".volume-card");
  const volume = document.querySelector(".volume");
  const processBar = document.querySelector(".process-bar");
  const currentTimes = document.querySelector(".current-time");

  playBtns.forEach(function (playBtn) {
    playBtn.addEventListener("click", function (event) {
      let title = event.target.parentElement.parentElement.parentElement.parentElement.querySelector("p").textContent;
      const mainMusicSrc = event.target.dataset.src;
      music.setAttribute("src", mainMusicSrc);
      music.play();
      musicName.textContent = title;
      if (playIcon.className.includes("fa-play")) {
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
      }  
      
      playBtns.forEach(function(playBtn){
        const playOrPauseIcon = playBtn.querySelector("i");
        playOrPauseIcon.classList.remove("fa-pause");
        playOrPauseIcon.classList.add("fa-play");
      });
    
      const playOrPauseIcon = playBtn.querySelector("i");
      playOrPauseIcon.classList.remove("fa-play");
      playOrPauseIcon.classList.add("fa-pause");
  
    });  
  
  });
  
  playButton.addEventListener("click", function () {
    if (playIcon.className.includes("fa-play")) {
        music.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
      } else {
        music.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
      }
  
    const musicPauseIcon = document.querySelector(".play-btn", ".fa-pause");
    if (musicPauseIcon) {
      musicPauseIcon.classList.remove("fa-pause");
      musicPauseIcon.classList.add("fa-play");
    }
  });
  
  music.volume = 0.5;
  
  volumeCard.addEventListener("click", function(event){
    music.volume = event.offsetX / 100;
    volume.style.width = `${event.offsetX}px`
  })
  
  processBar.addEventListener("click", function(event){
    music.currentTime = (event.offsetX / processBar.clientWidth) * music.duration;
  })
  
  setInterval(function(){
    const process = (music.currentTime / music.duration) * 100;
    currentTimes.style.width = `${process}%`;
  }, 500);
  
  const muteBtn = volumeCard.parentElement.querySelector("i");
  
  muteBtn.addEventListener("click", function(){
    if (music.volume > 0){
      music.volume = 0;
      volume.style.width = `0px`;
      muteBtn.classList.remove("fa-volume-up");
      muteBtn.classList.add("fa-volume-mute");
    } else {
      music.volume = 0.5;
      volume.style.width = `50px`;
      muteBtn.classList.remove("fa-volume-mute");
      muteBtn.classList.add("fa-volume-up");
    }
  });
}

const playlist = [];

function addToPlaylist(id) {
  const isInPlaylist = playlist.some(music => music.id === id);

  if (!isInPlaylist) {
    const musicId = musics.find(music => music.id === id);
  
    playlist.push(musicId);
    
    musics.forEach(music => {music.id === id ? music.isInPlaylist = true : ""})
    
    showPlaylist();
    ShowMusics();
  }
}

function showPlaylist() {
  const playlistContainer = document.querySelector(".playlist");
  playlistContainer.innerHTML = ""; // Clear previous playlist items
  playlist.forEach(function (music){
    playlistContainer.insertAdjacentHTML("beforeend",
      `
      <article class="music-card">
        <header>
          <img src="${music.cover}" alt="کاور موزیک" />
          <div class="play-music">
            <button class="play-btn" data-src="${music.src}">
              <i class="fa fa-play"></i>
            </button>
          </div>
        </header>
        <main>
          <p class="card-title">${music.title}</p>
        </main>
        <footer>
          <button class="bookmark bookmarked" onclick="addToPlaylist(${music.id})">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </footer>
      </article>
      `
    )
  })
  const playlistBtn = playlistContainer.querySelector(".bookmarked"); 
  playlistBtn.addEventListener("click", event => {

    event.target.parentElement.parentElement.parentElement.remove()
    
  })
};


