let masterPlayer = document.getElementById('master');
let gif = document.getElementById("gif");
let audioElement = new Audio("4.mp3");
let seekbar = document.getElementById("seekbar");
let songItems = Array.from(document.getElementsByClassName('song-items'));
let songinside = document.getElementsByClassName("songinside")
let songs = [
    { songname: "Wariyo", filePath: "1.mp3", coverPath: "1.jpg" },
    { songname: "Cielo", filePath: "2.mp3", coverPath: "2.jpg" },
    { songname: "DEAF KEV", filePath: "3.mp3", coverPath: "3.jpg" },
    { songname: "Heaven", filePath: "4.mp3", coverPath: "4.jpg" },
    { songname: "Janji", filePath: "5.mp3", coverPath: "5.jpg" },
    { songname: "Heroes", filePath: "6.mp3", coverPath: "6.jpg" },
    { songname: "NCS-Release", filePath: "7.mp3", coverPath: "7.jpg" },
    { songname: "Mortals", filePath: "8.mp3", coverPath: "8.jpg" },
    { songname: "Harris CAvin", filePath: "9.mp3", coverPath: "9.jpg" },
]
// console.log(songItems[8])
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('p')[0].innerText = songs[i].songname;
});
masterPlayer.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlayer.classList.remove("fa-play");
        masterPlayer.classList.add("fa-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlayer.classList.remove("fa-pause");
        masterPlayer.classList.add("fa-play");
    }
})

//seek bar
audioElement.addEventListener('timeupdate', () => {
    let Percentage = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    seekbar.value = Percentage;
})

seekbar.addEventListener('change', () => {
    audioElement.currentTime = seekbar.value * audioElement.duration / 100;
})

Array.from(songinside).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = parseInt(e.target.id) + 1;
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
