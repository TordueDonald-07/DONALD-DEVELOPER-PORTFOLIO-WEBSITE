let sidemenu = document.getElementById('sidemenu');
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzSen8-GZDtG8CNXyNyefu6NoURBH6zKAukH2N6pLb_Y2eUoq8ZhujxL8yEX3RS-SBXFg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg');
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000) 
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

        // Initialize AOS (Animate on Scroll) library
AOS.init();

// Scroll-jacking Example (Optional)
window.addEventListener('scroll', function() {
    const steps = document.querySelectorAll('.scroll-step');
    const scrollPosition = window.scrollY;

    steps.forEach(function(step, index) {
        if (scrollPosition >= step.offsetTop - window.innerHeight / 2) {
            step.style.background = ['#f39c12', '#e74c3c', '#2ecc71'][index % 3];
        }
    });
});

// SVG Animation Example (Optional)
document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('animated-svg');
    const svgPath = svgElement.querySelector('path');

    let length = svgPath.getTotalLength();
    svgPath.style.strokeDasharray = length;
    svgPath.style.strokeDashoffset = length;

    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        svgPath.style.strokeDashoffset = length - (length * scrollPercentage);
    });
});
