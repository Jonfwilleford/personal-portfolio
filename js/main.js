document.addEventListener("DOMContentLoaded", () => {

    const fairwayPhotos = [
        'fairway-collection/golf1.jpeg',
        'fairway-collection/golf2.jpeg',
        'fairway-collection/golf3.jpeg',
        'fairway-collection/golf4.jpeg',
        'fairway-collection/golf5.jpeg',
        'fairway-collection/golf6.jpeg',
        'fairway-collection/golf7.jpeg',
        'fairway-collection/golf8.jpeg'
    ];

    const thumb = document.getElementById("fairwayThumb");

    if (thumb) {
        thumb.src = fairwayPhotos[Math.floor(Math.random() * fairwayPhotos.length)];
    }

});