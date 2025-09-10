jQuery("#carousel").owlCarousel({
    autoplay: false,
    rewind: false, /* use rewind if you don't want loop */
    margin: 20,
    loop: true,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: [
        '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
        '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 4
        },

        1366: {
            items: 5
        }
    }
});

const videos = document.querySelectorAll('.video-container video');
const playPauseButtons = document.querySelectorAll('.controls button');

playPauseButtons.forEach((button, index) => {
    const video = videos[index];
    const icon = button.querySelector('img');

    button.addEventListener('click', () => {
        if (video.paused) {
            // Pause all other videos
            videos.forEach((v, idx) => {
                if (idx !== index) {
                    v.pause();
                    playPauseButtons[idx].querySelector('img').src = 'images/play.png';
                }
            });

            video.play();
            icon.src = 'images/pluse.png'; // your pause icon
        } else {
            video.pause();
            icon.src = 'images/play.png';
        }
    });

    video.addEventListener('ended', () => {
        icon.src = 'images/play.png';
    });
});