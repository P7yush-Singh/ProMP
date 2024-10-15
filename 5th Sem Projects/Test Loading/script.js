document.addEventListener('DOMContentLoaded', () => {

    // ------- Slider Begin -------
    const Caros = document.querySelector('.Carousel-slider');
    const CaroSlider = new MicroSlider(Caros, { indicators: true, indicatorText: '' });
    const hammer = new Hammer(Caros);
    const CaroSTimer = 2000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    // ------- Mouseenter Event -------
    Caros.onmouseenter = function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' mouse detected');
    };

    // ------- Mouseleave Event -------
    Caros.onmouseleave = function(e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + ' mouse detected');
    };

    // ------- Mouseclick Event -------
    Caros.onclick = function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' mouse detected');
    };

    // ------- Gesture Tap Event -------
    hammer.on('tap', function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' gesture detected');
    });
});
