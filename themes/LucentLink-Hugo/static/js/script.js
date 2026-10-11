// Generates floating circles for background
document.addEventListener('DOMContentLoaded', function() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    for (let i = 0; i < 15; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Random size between 50px and 200px
        const size = Math.random() * 150 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        
        // Random position
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        
        bgAnimation.appendChild(circle);
    }

    function updateColors() {
        document.documentElement.style.setProperty('--text-color', 'rgba(255, 255, 255, 0.85)');
        document.documentElement.style.setProperty('--icon-color', 'rgba(255, 255, 255, 0.7)');
    }
    updateColors();
});
// Force the banner to repaint when the page is restored via Back/Forward
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        var b = document.querySelector('.bg-banner');
        if (b) {
            b.style.display = 'none';
            b.offsetHeight; // force reflow
            b.style.display = '';
        }
		
		document.querySelectorAll('.link-card--featured').forEach(function (card) {
            card.style.animation = 'none';
            card.offsetHeight; // force reflow
            card.style.animation = '';
        });
    }
});

