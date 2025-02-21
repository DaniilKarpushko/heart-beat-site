let currentMusic = 0;
const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name-header');
const artistName = document.querySelector('.artist-header');
const playBtn = document.querySelector('#play-btn');

const songs = [
    { name: 'Till i collapse', artist: 'Eminem', path: 'music/till_i_collapse.mp3' },
];

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.textContent = song.name;
    artistName.textContent = song.artist;

    playBtn.textContent = 'Stop';

    setTimeout(() => {
        seekBar.max = music.duration;
    }, 300);
}

setMusic(0);
music.pause();
playBtn.textContent = 'Play';

playBtn.addEventListener('click', () => {
    if(playBtn.textContent == 'Play'){
        music.play();
        playBtn.textContent = 'Stop';
    } else {
        music.pause();
        playBtn.textContent = 'Play';
    }
})

setInterval(() => {
    seekBar.value = music.currentTime;
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

setInterval(() => {
    seekBar.value = music.currentTime;
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        if(currentMusic >= songs.length - 1){
            currentMusic = 0;
        } else{
            currentMusic++;
        }
        setMusic(currentMusic);
        playMusic();
    }
}, 500)

const playMusic = () => {
    music.play();
    playBtn.textContent = 'Stop';
}