(() => {
  const backdrop = document.getElementById('passwordBackdrop');
  const form = document.getElementById('passwordForm');
  const input = document.getElementById('passwordInput');
  const room = document.getElementById('controlRoom');
  const home = document.getElementById('homeScreen');
  const showPassword = () => {
    backdrop.hidden = false;
    input.value = '';
    input.focus();
  };
  const closePassword = () => { backdrop.hidden = true; };

  document.getElementById('heartButton')?.addEventListener('click', showPassword);
  document.getElementById('openPrompt')?.addEventListener('click', showPassword);
  document.getElementById('closePrompt')?.addEventListener('click', closePassword);
  backdrop?.addEventListener('click', event => {
    if (event.target === backdrop) closePassword();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && backdrop && !backdrop.hidden) closePassword();
  });
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value === 'FreddyFazballs') {
      closePassword();
      if (home) home.hidden = true;
      if (room) room.hidden = false;
      document.body.classList.add('room-open');
      document.title = 'Sala de control';
    } else {
      closePassword();
    }
  });
})();
