document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('a-image');
  let count = 0;
  images.forEach(img => {
    const src = (img.getAttribute('src') || '').toLowerCase();
    if (src.includes('portada.jpg') || src === '#painting1') {
      return; // Skip numbering for the cover image
    }

    count += 1;
    const numEl = document.createElement('a-text');
    numEl.setAttribute('value', String(count));
    numEl.setAttribute('color', '#ffffff');
    numEl.setAttribute('align', 'right');
    numEl.setAttribute('baseline', 'top');
    numEl.setAttribute('width', '0.5');

    const scaleAttr = img.getAttribute('scale');
    let offsetX = 0.5;
    let offsetY = 0.5;
    if (scaleAttr) {
      const parts = scaleAttr.split(/\s+/).map(parseFloat);
      if (parts.length >= 2) {
        if (!isNaN(parts[0])) offsetX = parts[0] / 2;
        if (!isNaN(parts[1])) offsetY = parts[1] / 2;
      }
    }
    numEl.setAttribute('position', `${offsetX} ${offsetY} 0.01`);

    img.appendChild(numEl);
  });
});
