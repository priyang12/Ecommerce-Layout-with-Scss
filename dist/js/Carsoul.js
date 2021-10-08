const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.getElementById('slide');

right.addEventListener('click', () => {
  const src = `../dist/images/alexa.jpg`;
  slider.innerHTML = `
  <img src=${src} alt="Airpods" />
  `;
});

left.addEventListener('click', () => {
  const src = `../dist/images/airpods.jpg`;
  slider.innerHTML = `
  <img src=${src} alt="Airpods" />
  `;
});
