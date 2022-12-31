// ---------------------- Resume button -------------------------- \\
var pause = false;

document.getElementById('myButton').addEventListener('click', function () {
  if (pause == true) {
    document.getElementById('myVideo').pause();
    document.getElementById('myAudio').pause();
    document.getElementById('myButton').innerHTML =
      '<i class="fa-solid fa-play navIcon"></i> <span>Resume</span>';
    pause = false;
  } else {
    document.getElementById('myVideo').play();
    document.getElementById('myAudio').play();
    document.getElementById('myButton').innerHTML =
      '<i class="fa-solid fa-pause navIcon"></i> <span>Pause</span>';
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
  console.log('Muted: ' + muted);
});

// ---------------------- Audio -------------------------- \\
var playing = document.getElementById('playingSong');
var currentSong = [
  // Album 1
  'Hymn of love, Album 1',
  'Low warm-up, Album 1',
  'Soothing game, Album 1',
  'Chill out, Album 1',
  'Peaceful touch, Album 1',
  'Not enough heart, Album 1',
  'New light, Album 1',
  'A time of spirit, Album 1',
  'First ride, Album 1',
  'Calm night, Album 1',
  'Lounge thought, Album 1',
  'Feel young, Album 1',
  'Late thought, Album 1',
  'Calming end, Album 1',
  'Melody of behavior, Album 1',
  'Another year, Album 1',
  'A million hearts, Album 1',
  'Lovely blues, Album 1',
  'Taste forever, Album 1',
  'Smiles of dreams, Album 1',
  'Wonders of my moments, Album 1',
  'Lovely rhapsody, Album 1',
  // Album 2
  'Lovers of yesterday, Album 2',
  'Always fair, Album 2',
  'Sunny cocktail, Album 2',
  'Glowing happiness, Album 2',
  'Mystery of romance, Album 2',
  'Smooth moments, Album 2',
  'Equal smiles, Album 2',
  'Without you, Album 2',
  'Someone like you, Album 2',
  'PLACEHOLDER, Album 2',
  'Again for you, Album 2',
  'Hold me tight tonight, Album 2',
  'Your heart, Album 2',
  'Wait for your best friend, Album 2',
  'Lovely hearts, Album 2',
  'Your home, Album 2',
  'The way you swing, Album 2',
  'Drink of the night, Album 2',
  'You are beautiful, Album 2',
  'Our last autumn, Album 2',
  'Me and you in the sunset, Album 2',
  // Album 3
  'Your thought, Album 3',
  'Another paradise, Album 3',
  'Too many years, Album 3',
  'Endless adventure, Album 3',
  'Fantasy explosions, Album 3',
  'Infinite era, Album 3',
  'We shall love, Album 3',
  'Chill ride, Album 3',
  'Like a guitar, Album 3',
  'This summer, Album 3',
  'Great hearts, Album 3',
  'Stairway to your heart, Album 3',
  'Climate change, Album 3',
  'Sounds of my fire, Album 3',
  'Chained games, Album 3',
  'Another day of the good life, Album 3',
  'The daylight, Album 3',
  'Losing her ways, Album 3',
  'Winter warmth, Album 3',
  'Sweet night of mine, Album 3',
  // Kivisar
  'Miracles (instrumental), Album 4',
  'Miracles (less voice), Album 4',
  'Miracles (Original), Album 4',
];

var song = Math.floor(Math.random() * currentSong.length);

playing.innerHTML = 'Song: ' + currentSong[song];
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
  playing = 'Song: ' + currentSong[song];
  player.play();
  song = Math.floor(Math.random() * currentSong.length);
  console.log('New song: ' + './media/songs/' + currentSong[song] + '.wav');
});
