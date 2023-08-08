let controller;
let revealScene;

let cursor = document.querySelector('.cursor');


//Custom Cursor
function customCursor(e) {           
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

window.addEventListener('mousemove', customCursor)


function revealAnimations(){
    //init scroll magic
    controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll('section');
    const navigation = document.querySelector('.navigation');
    const headerReveal = document.querySelector('.left-header');
    const camera = document.querySelector('.camera');

    const headerTimeline = gsap.timeline({defaults: {duration: 1.4, ease: "power2.out"}})
    headerTimeline.fromTo(navigation, 1, {x: '-100%', opacity: 0, scale: 0}, {x: 0, opacity: 1, scale: 1})
    headerTimeline.fromTo(headerReveal, {y: '-100%', opacity: 0, scale: 0}, {y: 0, opacity: 1, scale: 1})




    sections.forEach((section) => {
        const filler = section.querySelector('.section-filler');
        const team = section.querySelectorAll('.team');
        
        const revealTimeline = gsap.timeline({defaults:{duration: 1, ease: "power2.out"}})
        //Animation
        revealTimeline.fromTo(filler, 2, {x: '0'}, {x: '100%'})
        revealTimeline.fromTo(camera, 1.5, {x: '-100%', opacity: 0}, {x: '0', opacity: 1})
        revealTimeline.fromTo(team, 1.5, {y: '400px', opacity: 0, scale: 0}, {y: 0, opacity: 1, scale: 1}, '-=3')

        //Animate on Scroll
        revealScene = new ScrollMagic.Scene ({
            triggerElement: section,
            triggerHook: 0.4
           //reverse: false
        })
        .setTween(revealTimeline)
        .addIndicators({
            colorStart: 'white',
            colorTrigger: 'white',
            name: 'reveal'
        })
        .addTo(controller)

    })
}
revealAnimations();


//reverse: false    -use it at revealScene above in order to eiminate the reverse effect
// revealAnimations() used to CALL the functions ; just like console.log()
// (e) is the event
// for the controller to function, you'd need a custom cursor
// window.addEventListener used to track the mouse movement
// '-=3' stand fro DELAY after the previous animation