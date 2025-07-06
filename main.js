/* Grab elements */
const orb       = document.getElementById('aiOrb');
const chatSlice = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const closeBtn  = document.getElementById('closeChat');

/* Flip entire orb */
orb.addEventListener('click', () => orb.classList.toggle('flip'));

/* Show chat panel */
chatSlice.addEventListener('click', (e) => {
  e.stopPropagation();              // avoid immediate flip-back
  chatPanel.classList.add('open');
});

/* Hide chat panel */
closeBtn.addEventListener('click', () => chatPanel.classList.remove('open'));