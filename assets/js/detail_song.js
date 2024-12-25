duration = document.querySelector('#duration');
current = document.querySelector('#current');
playPause = document.querySelector('#playPause');

console.log(duration);
console.log(current);
console.log(playPause);

var timeCalculator = function (value) {
    second = Math.floor(value % 60);
    minute = Math.floor((value / 60) % 60);

    if (second < 10) {
        second = '0' + second;
    }

    return minute + ':' + second;
};

//start wavesurfer object
wavesurfer = WaveSurfer.create({
    container: '#wave',
    waveColor: '#B4F1CA',
    progressColor: '#1ED760',
    height: 100,
    scrollParent: false,
});

console.log(wavesurfer);

//load audio file
wavesurfer.load('../mp3/DanhDoi.mp3');

//play and pause a player
playPause.addEventListener('click', function (e) {
    wavesurfer.playPause();
});

//load audio duration on load
wavesurfer.on('ready', function (e) {
    duration.textContent = timeCalculator(wavesurfer.getDuration());
});

//get updated current time on play
wavesurfer.on('audioprocess', function (e) {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

//change play button to pause on plying
wavesurfer.on('play', function (e) {
    playPause.classList.remove('fi-rr-play');
    playPause.classList.add('fi-rr-pause');
});

//change pause button to play on pause
wavesurfer.on('pause', function (e) {
    playPause.classList.add('fi-rr-play');
    playPause.classList.remove('fi-rr-pause');
});

//update current time on seek
wavesurfer.on('seek', function (e) {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});
