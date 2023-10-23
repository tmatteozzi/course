// BUTTON SELECTION
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
// CIRCLE SELECTION
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
// TIME TRACKING
let duration;

// TIMER INSTANCE
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        circle.setAttribute('stroke', 'black');
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
            (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete(){
        circle.setAttribute('stroke', 'green');
        circle.setAttribute('stroke-dashoffset', 0)
    }
});