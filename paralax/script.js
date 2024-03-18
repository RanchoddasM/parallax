document.addEventListener('DOMContentLoaded', () => {
    const hoverObject = document.getElementById('hover-object');
    const hoverMusic = document.getElementById('hover-music');

    hoverObject.addEventListener('mouseenter', () => {
        hoverMusic.play();
    });

    hoverObject.addEventListener('mouseleave', () => {
        hoverMusic.pause();
        hoverMusic.currentTime = 0; // Reset playback to the beginning
    });
});
