document.addEventListener('DOMContentLoaded', () => {
    const playlists = document.querySelectorAll('.playlist');
    const audioPlayer = document.getElementById('audio-player');
    const playPause=document.getElementById('play-pause-button');

    if (!playlists || !audioPlayer || !playPause) return;

    playlists.forEach(playlist =>{
        playlist.addEventListener('click', event => {
        const button = event.target.closest('.fa-play');
        if (!button) return;

        const item = button.closest('.items');
        if (!item) {
            console.warn("No .items found");
            return;
        }

        const songName = item.querySelector('h4').innerText;
        const audioSrc = item.getAttribute('data-src');

        if (!audioSrc) {
            console.warn("No audio source found for:", songName);
            return;
        }

        audioPlayer.src = audioSrc;
        audioPlayer.play();
        console.log("Now playing:", songName);

        document.querySelectorAll('.items').forEach(el => el.classList.remove('playing'));
        item.classList.add('playing');

        playPause.classList.remove('play');
        playPause.classList.add('pause');
    });
});

    playPause.addEventListener('click',()=> {
        if(audioPlayer.paused){
            audioPlayer.play();
            playPause.classList.remove('play');
            playPause.classList.add('pause');
        }
        else{
            audioPlayer.pause();
            playPause.classList.remove('pause');
            playPause.classList.add('play');
        }
    });
    //reset
    audioPlayer.addEventListener('ended',()=>{
        playPause.classList.remove('pause');
            playPause.classList.add('play');
    });
});
