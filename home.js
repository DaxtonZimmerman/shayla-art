// Simple lightbox functionality
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    document.body.appendChild(lightbox);

    const imgClone = document.createElement('img');
    imgClone.src = img.src;
    imgClone.style.maxWidth = '90%';
    imgClone.style.maxHeight = '90%';
    lightbox.appendChild(imgClone);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
