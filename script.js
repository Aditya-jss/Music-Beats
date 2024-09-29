let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

const songs = [
    {
        title: 'Mountain',
        artist: 'Luis Ft. Rican',
        file: 'celtic-irish-scottish-tin-whistle-background-music-10455.mp3',
        img: 'a4b6fc000e66d3e07ebea1d9a9bffa33.jpg'
    },
    {
        title: 'Sweet',
        artist: 'Artist Name',
        file: 'sweet.mp3',
        img: 'your-next-song-image.jpg'
    }
    // Add more songs here
];

let songIndex = 0;

function loadSong(songIndex) {
    const currentSong = songs[songIndex];
    document.getElementById('song-title').innerText = currentSong.title;
    document.getElementById('song-artist').innerText = currentSong.artist;
    song.src = currentSong.file;
    document.getElementById('song-img').src = currentSong.img;
    song.load();
    playSong();
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function playSong() {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
}

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};
