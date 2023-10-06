console.log("welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Warriyo-Mortals, feat(Laura Brehm)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo-Huma Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF-KEV Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven and Ride", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji Heroes Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Friends", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Haaye Oye", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Okayy", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Hmm", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "yayaya", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/${index+1}.mp3' ;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
