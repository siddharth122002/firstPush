// console.log(Math.floor(audio.currentTime % 60)) for time
let mainPlayer = document.querySelector('#master');
let audio = new Audio('1.mp3')
let seekBar = document.querySelector('#seekbar')
let gif = document.querySelector('#gif')
let songName = document.querySelectorAll('.songname')
let images = document.querySelectorAll('.images')
let insides = document.querySelectorAll('.songinside')
let bottomText = document.querySelector('#bottom-text')
let times = document.querySelectorAll('#timechange')
// audio.play();
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
//masterPlayer
mainPlayer.addEventListener('click', function (e) {

    if (mainPlayer.classList[1] == 'fa-play') {
        audio.play()
        mainPlayer.classList.remove('fa-play')
        mainPlayer.classList.add('fa-pause')
        gif.style.opacity = 1;

    } else {
        makeAllPlays()
        audio.pause()
        gif.style.opacity = 0;
        mainPlayer.classList.remove('fa-pause')
        mainPlayer.classList.add('fa-play')
    }
})
// })
//seekbar
audio.addEventListener('timeupdate', function (e) {
    seekbar.value = (audio.currentTime / audio.duration) * 100
    let a = times[0]
})
seekbar.addEventListener('change', function (e) {
    audio.currentTime = seekbar.value * audio.duration / 100;
})

//song name update
let n = 0;
songName.forEach(function (name) {
    // console.log(name)
    name.innerHTML = songs[`${n}`].songname;
    n++;
})

//images update
n = 0;
images.forEach(function (image) {
    image.src = songs[`${n}`].coverPath;
    n++;
})

const makeAllPlays = () => {
    Array.from(insides).forEach((inside) => {
        // console.log(inside)
        inside.classList.remove('fa-pause')
        inside.classList.add('fa-play')
    })
}



//songinside
let l = 0
Array.from(insides).forEach(function (song) {
    song.addEventListener('click', function (e) {
        makeAllPlays();

        let index = parseInt(e.target.id) + 1
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audio.src = `${index}.mp3`
        audio.currentTime = 0
        audio.play()
        gif.style.opacity = 1;
        mainPlayer.classList.remove('fa-play')
        mainPlayer.classList.add('fa-pause')
        bottomText.innerHTML = songs[`${index - 1}`].songname
        console.log(times[0])
        audio.addEventListener('timeupdate', function (e) {
            onlyme()
            let count = Math.floor(audio.currentTime)
            count = count % 60
            let c = Math.floor(audio.currentTime / 60)

            // console.log(Math.floor(c));
            times[`${index - 1}`].innerHTML = `${c}:`.concat(count)

        })
    })
})
const onlyme = function () {
    Array.from(times).forEach((time) => {
        // console.log(inside)
        time.innerHTML = "00:00"

        // inside.classList.add('fa-play')
    })
}
