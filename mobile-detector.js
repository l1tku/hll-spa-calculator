// Mobile device detection
function isMobileDevice() {
    // Check user agent for mobile devices
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    
    // Check screen width
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
    
    // Check for touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Consider it mobile if:
    // 1. User agent matches mobile pattern, OR
    // 2. Screen width is less than 768px AND has touch capability
    return mobileRegex.test(userAgent) || (screenWidth < 768 && hasTouch);
}

// Redirect to mobile version if on mobile device
if (isMobileDevice() && !window.location.pathname.includes('index-mobile.html')) {
    window.location.href = 'index-mobile.html';
}










