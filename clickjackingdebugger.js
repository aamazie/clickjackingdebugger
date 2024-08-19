(function() {
    // Create an iframe element to test clickjacking vulnerability
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.opacity = '0.5';  // Slight transparency to make it visible
    iframe.style.pointerEvents = 'none';  // Prevent any interaction with the iframe
    iframe.style.zIndex = '9999';
    iframe.src = window.location.href;  // Load the current page inside the iframe

    // Append the iframe to the body
    document.body.appendChild(iframe);

    // Check if the iframe is loaded successfully
    iframe.onload = function() {
        console.log('Clickjacking test: The site is vulnerable. The page loaded successfully inside an iframe.');
    };

    // Handle errors (if the site cannot be loaded in an iframe)
    iframe.onerror = function() {
        console.log('Clickjacking test: The site is protected. The page cannot be loaded inside an iframe.');
    };

    // Clean up after the test (optional)
    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 5000);  // Remove the iframe after 5 seconds
})();
