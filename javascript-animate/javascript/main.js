const $pelota = document.getElementById('pelota');

/* element.animate(keyframes = [], option ={}) */
$pelota.animate([
    /* from */
    {
        transform: 'translateX(0)'
    },
    /* to */
    {
        transform: 'translateX(500px)' //250
    }
], {
    duration: 1000,
    delay: 1000,
    direction: 'normal',
    easing: 'linear',
    interations: Infinity,
    fill: 'forwards',
    iterationStart: .5, // =50%
    /* endDelay:5000, */
})