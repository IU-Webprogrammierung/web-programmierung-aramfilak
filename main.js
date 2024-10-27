// animate the cursor by add radial-gradient to the cursor
document.querySelectorAll('section').forEach((section) => {
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    section.style.setProperty('--x', `${x}px`);
    section.style.setProperty('--y', `${y}px`);
  });
});
