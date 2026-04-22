document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("collectionGrid");
    if (!grid) return;

    const photos = [
        'fairway-collection/golf1.jpeg',
        'fairway-collection/golf2.jpeg',
        'fairway-collection/golf3.jpeg',
        'fairway-collection/golf4.jpeg',
        'fairway-collection/golf5.jpeg',
        'fairway-collection/golf6.jpeg',
        'fairway-collection/golf7.jpeg',
        'fairway-collection/golf8.jpeg'
    ];

    const romans = ['I','II','III','IV','V','VI','VII','VIII'];
    let current = 0;

    const lightbox  = document.getElementById('lightbox');
    const lbImg     = document.getElementById('lbImg');
    const lbCounter = document.getElementById('lbCounter');
    const lbClose   = document.getElementById('lbClose');

    if (!lightbox || !lbImg || !lbCounter || !lbClose) return;

    photos.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = 'collection-thumb';
        item.innerHTML = `
            <img src="${src}" loading="lazy">
            <span class="thumb-num">${romans[i]}</span>
        `;
        item.addEventListener('click', () => openLightbox(i));
        grid.appendChild(item);
    });
    function closeLightbox() {
        lightbox.classList.remove('open');
    }

    function openLightbox(index) {
        current = index;
        update();
        lightbox.classList.add('open');
    }

    function update() {
        lbImg.src = photos[current];
        lbCounter.textContent = `${current + 1} / ${romans.length}`;
    }

    lbClose.addEventListener('click', () => {
    lightbox.classList.remove('open');
});

document.getElementById('lbPrev').addEventListener('click', () => {
    current = (current - 1 + photos.length) % photos.length;
    update();
});

document.getElementById('lbNext').addEventListener('click', () => {
    current = (current + 1) % photos.length;
    update();
});

});