let windowLoaded = false,
    DOMContentLoaded = false;

function onLoadTask() {
    const splash = document.querySelector('section#splash'),
        splashImage = document.querySelector('section#splash > img'),
        marginTop100vhElements = document.querySelectorAll('[margin-top-100vh]'),
        unscrollableElements = document.querySelectorAll('[unscrollable]');
    
    if (windowLoaded && DOMContentLoaded) {
        splash.removeAttribute('loading');
        splashImage.setAttribute('appear', '');
        setTimeout(() => {
            splash.setAttribute('hidden', '');
            marginTop100vhElements.forEach((element) => {
                element.removeAttribute('margin-top-100vh');
            });
            unscrollableElements.forEach((element) => {
                element.removeAttribute('unscrollable');
            });
        }, 1000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    DOMContentLoaded = true;
    onLoadTask();

    setTimeout(() => {
        if (!windowLoaded) {
            splash.setAttribute('loading', '');
        };
    }, 1000);
});

window.addEventListener('load', () => {
    windowLoaded = true;
    onLoadTask();
});