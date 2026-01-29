(() => {
  const btn = document.getElementById('muyuBtn');
  const emoji = document.getElementById('emoji');
  const countEl = document.getElementById('count');
  const flyContainer = document.getElementById('fly-container');

  let count = 0;

  function onHit() {
    count += 1;
    countEl.textContent = String(count);

    btn.classList.add('hit');
    btn.addEventListener('animationend', () => {
      btn.classList.remove('hit');
    }, { once: true });

    spawnMeritPlusOne();
  }

  function spawnMeritPlusOne(){
    const span = document.createElement('span');
    span.className = 'fly';
    span.textContent = '功德 +1';
    const dx = (Math.random() * 30 - 15).toFixed(0) + 'px';
    span.style.setProperty('--dx', dx);
    flyContainer.appendChild(span);
    span.addEventListener('animationend', () => span.remove(), { once: true });
  }

  btn.addEventListener('click', onHit);
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onHit();
    }
  });

  // 想用 🐟 就取消下一行注释
  // emoji.textContent = '🐟';
})();