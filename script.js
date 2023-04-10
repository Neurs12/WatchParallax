let parallax = document.getElementById("scroll-parallax");
var layers = [];

parallax.scrollTo(0, parallax.scrollHeight);

window.addEventListener("load", (_) => {
    for (var i = 0; i < 9; i++) {
        layers.push(document.getElementById(`l${i}`));
    }

    parallax.addEventListener("scroll", function() {
        let offset = parallax.scrollTop;
        for (var i = 0; i < 9; i++) {
            layers[i].style.top = `${offset * (i+1) / 30}px`;
        }
    })

    function scrollTo(element, to, duration) {
        Math.easeInOutQuad = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 5;
        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    scrollTo(parallax, 0, 1250);
});
