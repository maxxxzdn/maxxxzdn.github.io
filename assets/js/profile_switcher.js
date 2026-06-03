document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.profile img');
  if (!img) return;
  const picture = img.closest('picture');
  const source = picture && picture.querySelector('source[type="image/webp"]');

  const toAlt = (url) =>
    url.replace(/(-\d+)?\.(jpe?g|png|webp)(\?.*)?$/i, '_alt$1.$2$3');

  const origSrc = img.getAttribute('src');
  const altSrc = toAlt(origSrc);
  const origSrcset = source ? source.getAttribute('srcset') : '';
  const altSrcset = origSrcset
    .split(',')
    .map((s) => {
      const [u, d] = s.trim().split(/\s+/);
      return toAlt(u) + (d ? ' ' + d : '');
    })
    .join(', ');

  const probe = new Image();
  probe.onload = () => {
    img.style.cursor = 'pointer';
    img.title = 'click to swap';
    let alt = false;
    img.addEventListener('click', () => {
      alt = !alt;
      if (source) source.srcset = alt ? altSrcset : origSrcset;
      img.src = alt ? altSrc : origSrc;
    });
  };
  probe.src = altSrc;
});
