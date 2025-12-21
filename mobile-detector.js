(function() {
    // 1. Check if user explicitly requested Desktop mode (e.g., clicked "Desktop Site" link)
    // We look for ?mode=desktop in the URL
    if (window.location.search.indexOf('mode=desktop') > -1) {
        return; // Exit script, stay on current page
    }

    // 2. Mobile Detection Logic
    function isMobileDevice() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
        var hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        return mobileRegex.test(userAgent) || (screenWidth < 768 && hasTouch);
    }

    // 3. Redirect Logic
    // If it IS a mobile device AND we are NOT already on the mobile page...
    if (isMobileDevice() && !window.location.href.includes('index-mobile.html')) {
        window.location.replace('index-mobile.html');
    }
})();