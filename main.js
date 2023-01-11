let haveClicked = false;

// --------------- Resume button --------------- \\
var paused = true;

document.getElementById('resumeButton').addEventListener('click', function () {
  haveClicked = true;

  if (paused == false) {
    document.getElementById('animatedVideo').pause();
    document.getElementById('music').pause();
    document.getElementById('resumeButton').innerHTML =
      '<i class="fa-solid fa-play navIcon"></i> <span>Resume</span>';
    paused = true;
  } else {
    document.getElementById('animatedVideo').play();
    document.getElementById('music').play();
    document.getElementById('resumeButton').innerHTML =
      '<i class="fa-solid fa-pause navIcon"></i> <span>Pause</span>';
    paused = false;
  }
  console.log('Video & Music paused: ' + paused);
});

// --------------- Mute button --------------- \\
var muted = false;

document.getElementById('muteButton').addEventListener('click', function () {
  if (muted == false) {
    document.getElementById('music').muted = true;
    document.getElementById('muteButton').innerHTML =
      '<i class="fa-solid fa-volume-xmark"></i>';
    muted = true;
  } else {
    document.getElementById('music').muted = false;
    document.getElementById('muteButton').innerHTML =
      '<i class="fa-solid fa-volume-high"></i>';
    muted = false;
  }
  console.log('Music muted: ' + muted);
});

// --------------- Available songs --------------- \\
var currentSong = [
  // For eternity (Album 1)
  'Hymn of love, For eternity',
  'Low warm-up, For eternity',
  'Soothing game, For eternity',
  'Chill out, For eternity',
  'Peaceful touch, For eternity',
  'Not enough heart, For eternity',
  'New light, For eternity',
  'A time of spirit, For eternity',
  'First ride, For eternity',
  'Calm night, For eternity',
  'Lounge thought, For eternity',
  'Feel young, For eternity',
  'Late thought, For eternity',
  'Calming end, For eternity',
  'Melody of behavior, For eternity',
  'Another year, For eternity',
  'A million hearts, For eternity',
  'Lovely blues, For eternity',
  'Taste forever, For eternity',
  'Smiles of dreams, For eternity',
  'Wonders of my moments, For eternity',
  'Lovely rhapsody, For eternity',
  // Because of us (Album 2)
  'Lovers of yesterday, Because of us',
  'Always fair, Because of us',
  'Sunny cocktail, Because of us',
  'Glowing happiness, Because of us',
  'Mystery of romance, Because of us',
  'Smooth moments, Because of us',
  'Equal smiles, Because of us',
  'Without you, Because of us',
  'Someone like you, Because of us',
  'PLACEHOLDER, Because of us',
  'Again for you, Because of us',
  'Hold me tight tonight, Because of us',
  'Your heart, Because of us',
  'Wait for your best friend, Because of us',
  'Lovely hearts, Because of us',
  'Your home, Because of us',
  'The way you swing, Because of us',
  'Drink of the night, Because of us',
  'You are beautiful, Because of us',
  'Our last autumn, Because of us',
  'Me and you in the sunset, Because of us',
  // Dreams (Album 3)
  'Your thought, Dreams',
  'Another paradise, Dreams',
  'Too many years, Dreams',
  'Endless adventure, Dreams',
  'Fantasy explosions, Dreams',
  'Infinite era, Dreams',
  'We shall love, Dreams',
  'Chill ride, Dreams',
  'Like a guitar, Dreams',
  'This summer, Dreams',
  'Great hearts, Dreams',
  'Stairway to your heart, Dreams',
  'Climate change, Dreams',
  'Sounds of my fire, Dreams',
  'Chained games, Dreams',
  'Another day of the good life, Dreams',
  'The daylight, Dreams',
  'Losing her ways, Dreams',
  'Winter warmth, Dreams',
  'Sweet night of mine, Dreams',
  // Kivisar
  'Miracles (instrumental), Album 4',
  'Miracles (less voice), Album 4',
  'Miracles (Original), Album 4',
];

// --------------- Initial song setup --------------- \\
// Get the audio element
var playing = document.getElementById('playingSong');
var player = document.getElementById('music');
var song = Math.floor(Math.random() * currentSong.length);

playing.innerHTML = 'Song: ' + currentSong[song];
player.src = './media/songs/' + currentSong[song] + '.wav';
// Set the current time to start playing at a certain part
player.currentTime = 0;

// ---------------------- Volume slider -------------------------- \\
var volumeSlider = document.getElementById('volumeSlider');
var range = volumeSlider.value;

volumeSlider.addEventListener('input', function () {
  // Get the value of the volume slider
  range = volumeSlider.value;
  // Set the volume to the value of the range.
  player.volume = range * 0.01;
  console.log('The music volume is now at: ' + range + '%.');
});

// ---------------------- Debug log -------------------------- \\
console.log('%c VernFM Debug log', ' color: #4462ec');
console.log('%c Alpha version: 0.1.5', ' color: #4462ec');
console.log('%c ---------------', ' color: #f09755');
console.log('%c Video & Music paused: ', ' color: #f09755', paused);
console.log('%c Music muted: ', ' color: #f09755', muted);
console.log(
  '%c The first song is: ',
  'background: #222; color: #f09755',
  currentSong[song]
);
console.log('%c The music volume started at: ', ' color: #f09755', range, '%.');
console.log(
  '%c If this info is not accurate or you need support email me at Pontus@VernFM.com',
  ' color: #ff6e91'
);
console.log('%c ---------------', ' color: #f09755');

// Set up an event listener that listens for changes to the value of myVariable
document.addEventListener('myVariableChange', function (event) {
  haveClicked = true;

  // Requirement to not automatically play sometimes when the website loads.
  if (haveClicked == true) {
    // Start playing the song initialized in "Initial song setup".
    player.play();
  }
});

// ---------------------- Play next song -------------------------- \\
player.addEventListener('ended', function () {
  song = Math.floor(Math.random() * currentSong.length);
  playing.innerHTML = 'Song: ' + currentSong[song];
  player.src = './media/songs/' + currentSong[song] + '.wav';
  player.play();
  console.log('New song: ' + './media/songs/' + currentSong[song] + '.wav');
});
