var pause = false;

document.getElementById('myButton').addEventListener('click', function () {
  if (pause == true) {
    document.getElementById('myVideo').pause();
    document.getElementById('myAudio').pause();
    document.getElementById('myButton').innerHTML = 'Play Music';
    pause = false;
  } else {
    document.getElementById('myVideo').play();
    document.getElementById('myAudio').play();
    document.getElementById('myButton').innerHTML = 'Pause Music';
    pause = true;
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

playing.innerHTML = currentSong[song];
console.log('./media/songs/' + currentSong[song] + '.wav');

// Get the audio element
var player = document.getElementById('myAudio');

var local = 0;

player.src = './media/songs/' + currentSong[song] + '.wav';

// Set the current time to start playing at a certain part
player.currentTime = local;

// Set the volume to 2%
player.volume = 0.8;

// Play the audio
player.play();

// Set an interval to increment the current time by 1 second every 1000 milliseconds (1 second)
var interval = setInterval(function () {
  // Increment the current time by 1 second
  local += 1;
  player.currentTime = local;
  // If the current time is greater than or equal to the duration of the audio, stop the interval and change the src to the next song
  if (player.currentTime >= player.duration) {
    local = 0;
    clearInterval(interval);
    player.src = './media/songs/' + currentSong[song] + '.wav';
    playing = currentSong[song];
    player.play();
    song = Math.floor(Math.random() * currentSong.length);
  }
}, 1000);

// ---------------------- Emojis -------------------------- \\

var container = document.getElementById('animate');
var emoji = [
  '🌽',
  '🍇',
  '🍌',
  '🍒',
  '🍕',
  '🍷',
  '🍭',
  '💖',
  '💩',
  '🐷',
  '🐸',
  '🐳',
  '🎃',
  '🎾',
  '🌈',
  '🍦',
  '💁',
  '🔥',
  '😁',
  '😱',
  '🌴',
  '👏',
  '💃',
];
var circles = [];

for (var i = 0; i < 15; i++) {
  addCircle(
    i * 500,
    [10 + 0, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 + 0, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 - 200, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 + 200, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 - 400, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 + 400, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 - 600, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
  addCircle(
    i * 500,
    [10 + 600, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  );
}

function addCircle(delay, range, color) {
  setTimeout(function () {
    var c = new Circle(
      range[0] + Math.random() * range[1],
      80 + Math.random() * 4,
      color,
      {
        x: -0.15 + Math.random() * 0.3,
        y: 1 + Math.random() * 1,
      },
      range
    );
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl(' + ((Math.random() * 360) | 0) + ',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function () {
    if (_this.y > 800) {
      _this.y = 80 + Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform =
      'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform =
      'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform =
      'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();
