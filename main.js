// ---------------------- Resume button -------------------------- \\
var pause = false;

document.getElementById('myButton').addEventListener('click', function () {
  if (pause == true) {
    document.getElementById('myVideo').pause();
    document.getElementById('myAudio').pause();
    document.getElementById('myButton').innerHTML =
      '<i class="fa-solid fa-play navIcon"></i> Resume';
    pause = false;
  } else {
    document.getElementById('myVideo').play();
    document.getElementById('myAudio').play();
    document.getElementById('myButton').innerHTML =
      '<i class="fa-solid fa-pause navIcon"></i> Pause';
    pause = true;
  }
});

// ---------------------- Mute button -------------------------- \\
var muted = false;

document.getElementById('muteButton').addEventListener('click', function () {
  if (muted == false) {
    document.getElementById('myAudio').muted = true;
    document.getElementById('muteButton').innerHTML =
      '<i class="fa-solid fa-volume-xmark"></i>';
    muted = true;
  } else {
    document.getElementById('myAudio').muted = false;
    document.getElementById('muteButton').innerHTML =
      '<i class="fa-solid fa-volume-high"></i>';
    muted = false;
  }
});

// ---------------------- Audio -------------------------- \\
var playing = document.getElementById('playingSong');
var currentSong = [
  // Album 1
  'Song1Album1 (Hymn of love)',
  'Song2Album1 (Low warm-up)',
  'Song3Album1 (Soothing game)',
  'Song4Album1 (Chill out)',
  'Song5Album1 (Peaceful touch)',
  'Song6Album1 (Not enough heart)',
  'Song7Album1 (New light)',
  'Song8Album1 (A time of spirit)',
  'Song9Album1 (First ride)',
  'Song10Album1 (Calm night)',
  'Song11Album1 (Lounge thought)',
  'Song12Album1 (Feel young)',
  'Song13Album1 (Late thought)',
  'Song14Album1 (Calming end)',
  'Song15Album1 (Melody of behavior)',
  'Song16Album1 (Another year)',
  'Song17Album1 (A million hearts)',
  'Song18Album1 (Lovely blues)',
  'Song19Album1 (Taste forever)',
  'Song20Album1 (Smiles of dreams)',
  'Song21Album1 (Wonders of my moments)',
  'Song22Album1 (Lovely rhapsody)',
  // Album 2
  'Song1Album2 (Lovers of yesterday)',
  'Song2Album2 (Always fair)',
  'Song3Album2 (Sunny cocktail)',
  'Song4Album2 (Glowing happiness)',
  'Song5Album2 (Mystery of romance)',
  'Song6Album2 (Smooth moments)',
  'Song7Album2 (Equal smiles)',
  'Song8Album2 (Without you)',
  'Song9Album2 (Someone like you)',
  'OLDSong10Album2 (hehe)',
  'Song10Album2 (Again for you)',
  'Song11Album2 (Hold me tight tonight)',
  'Song12Album2 (Your heart)',
  'Song13Album2 (Wait for your best friend)',
  'Song14Album2 (Lovely hearts)',
  'Song15Album2 (Your home)',
  'Song16Album2 (The way you swing)',
  'Song17Album2 (Drink of the night)',
  'Song18Album2 (You are beautiful)',
  'Song19Album2 (Our last autumn)',
  'Song20Album2 (Me and you in the sunset)',
  // Album 3
  'Song1Album3 (Your thought)',
  'Song2Album3 (Another paradise)',
  'Song3Album3 (Too many years)',
  'Song4Album3 (Endless adventure)',
  'Song5Album3 (Fantasy explosions)',
  'Song6Album3 (Infinite era)',
  'Song7Album3 (We shall love)',
  'Song8Album3 (Chill ride)',
  'Song9Album3 (Like a guitar)',
  'Song10Album3 (This summer)',
  'Song11Album3 (Great hearts)',
  'Song12Album3 (Stairway to your heart)',
  'Song13Album3 (Climate change)',
  'Song14Album3 (Sounds of my fire)',
  'Song15Album3 (Chained games)',
  'Song16Album3 (Another day of the good life)',
  'Song17Album3 (The daylight)',
  'Song18Album3 (Losing her ways)',
  'Song19Album3 (Winter warmth)',
  'Song20Album3 (Sweet night of mine)',
  // Kivisar
  'Miracles (instrumental)',
  'Miracles (less voice)',
  'Miracles (Original)',
];

var song = Math.floor(Math.random() * currentSong.length);

playing.innerHTML = 'Current song: ' + currentSong[song];
console.log(
  'The first song is: ' + './media/songs/' + currentSong[song] + '.wav'
);

// Get the audio element
var player = document.getElementById('myAudio');

var local = 0;

player.src = './media/songs/' + currentSong[song] + '.wav';

// Set the current time to start playing at a certain part
player.currentTime = local;

// ---------------------- Volume slider -------------------------- \\
var volumeSlider = document.getElementById('volumeSlider');

volumeSlider.addEventListener('input', function () {
  // Get the value of the volume slider
  const range = volumeSlider.value;
  // Set the volume to the value of the range.
  player.volume = range * 0.01;
  console.log('The input range is now: ' + range);
});

// ---------------------- Play next song -------------------------- \\

// Set the current song index to 0
var currentSongIndex = 0;

// Set up the ended event listener for the audio element
player.addEventListener('ended', function () {
  // Increment the current song index
  currentSongIndex++;

  // If the current song index is greater than the number of songs, reset it to 0
  if (currentSongIndex >= currentSong.length) {
    currentSongIndex = 0;
  }

  player.src = './media/songs/' + currentSong[song] + '.wav';
  playing = currentSong[song];
  player.play();
  song = Math.floor(Math.random() * currentSong.length);
  console.log('New song: ' + './media/songs/' + currentSong[song] + '.wav');
});
