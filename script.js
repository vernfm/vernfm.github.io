const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('toggle-menu'),
  closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// -------------- Twitch SETTINGS ----------------

var CLIENT_ID = 'client id from Connections in Twitch settings';
var CHANNEL_NAME = 'channel_name';
var LIMIT = 3;

// ----------------------------------------

var currentFollowers = new Array(LIMIT);
var firstStart = false;

function addToList(name) {
  var list = document.getElementsByClassName('list')[0];
  var node = document.createElement('li');
  var nodeInner = document.createElement('span');
  var nodeText = document.createTextNode(name);
  nodeInner.appendChild(nodeText);
  node.appendChild(nodeInner);
  list.appendChild(node);
}

function removeFromList() {
  var list = document.getElementsByClassName('list')[0];
  var labels = list.getElementsByTagName('li');
  if (labels.length > 0) list.removeChild(labels[labels.length - 1]);
}

function getFollowers(response) {
  var json = JSON.parse(response);
  for (var i = 0; i < json.follows.length; i++) {
    var follower = json.follows[i];

    if (currentFollowers[i] != follower.user._id) {
      currentFollowers.shift();
      currentFollowers.push(follower.user._id);
      if (!firstStart) removeFromList();
      addToList(follower.user.display_name);
    }
  }
}

function sendRequest() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      if (!firstStart) firstStart = true;

      getFollowers(request.responseText);
    }
  };

  request.open(
    'GET',
    'https://api.twitch.tv/kraken/channels/' +
      CHANNEL_NAME +
      '/follows?client_id=' +
      CLIENT_ID +
      '&limit=' +
      LIMIT,
    true
  );
  request.send();
}

sendRequest();

var timer = setInterval(function () {
  sendRequest();
}, 20000);
