const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('toggle-menu'),
  closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// Twitch embed

new Twitch.Embed('twitch-embed', {
  width: 1,
  height: 1,
  channel: 'vernfm',
  muted: true,
  // Only needed if this page is going to be embedded on other websites
  parent: ['embed.example.com', 'othersite.example.com'],
});
