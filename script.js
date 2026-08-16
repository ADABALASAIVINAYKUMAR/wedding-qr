/* ==================================================
   WEDDING WEBSITE
   SMOOTH ANIMATION SYSTEM
================================================== */


/* ==================================================
   LOADING SCREEN
================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});



/* ==================================================
   PARTICLE SYSTEM
================================================== */

const particleContainer =
    document.getElementById("particles");


const particleTypes = [

    {
        className: "star-particle",

        symbols: [
            "✦",
            "✧",
            "⋆"
        ],

        size: [7, 13],

        duration: [11, 17]

    },

    {
        className: "heart-particle",

        symbols: [
            "♡",
            "♥"
        ],

        size: [7, 13],

        duration: [13, 19]

    },

    {
        className: "flower-particle",

        symbols: [
            "✿",
            "❀"
        ],

        size: [7, 12],

        duration: [14, 21]

    }

];



function randomNumber(min, max) {

    return Math.random() *
        (max - min) +
        min;

}



function createParticle() {

    if (!particleContainer) {
        return;
    }


    const type =
        particleTypes[
            Math.floor(
                Math.random() *
                particleTypes.length
            )
        ];


    const particle =
        document.createElement("span");


    particle.className =
        `particle ${type.className}`;


    particle.textContent =
        type.symbols[
            Math.floor(
                Math.random() *
                type.symbols.length
            )
        ];


    particle.style.left =
        randomNumber(0, 100) + "vw";


    particle.style.top =
        "-25px";


    particle.style.fontSize =
        randomNumber(
            type.size[0],
            type.size[1]
        ) + "px";


    const duration =
        randomNumber(
            type.duration[0],
            type.duration[1]
        );


    particle.style.animationDuration =
        duration + "s";


    particle.style.setProperty(
        "--drift",
        randomNumber(-90, 90) + "px"
    );


    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, (duration + 2) * 1000);

}



/* Initial particles */

for (
    let i = 0;
    i < 22;
    i++
) {

    setTimeout(
        createParticle,
        i * 300
    );

}



/* Continuous particles */

setInterval(
    createParticle,
    900
);



/* ==================================================
   SMOOTH MOUSE PARALLAX
================================================== */

const center =
    document.querySelector(
        ".center-animation"
    );


const leftPhoto =
    document.querySelector(
        ".left-photo"
    );


const rightPhoto =
    document.querySelector(
        ".right-photo"
    );


let mouseX = 0;

let mouseY = 0;

let currentX = 0;

let currentY = 0;



function animateParallax() {

    currentX +=
        (mouseX - currentX) *
        0.045;


    currentY +=
        (mouseY - currentY) *
        0.045;


    if (
        window.innerWidth >= 900
    ) {

        if (center) {

            center.style.setProperty(
                "--mouse-x",
                `${currentX * 8}px`
            );

            center.style.setProperty(
                "--mouse-y",
                `${currentY * 6}px`
            );

        }


        if (leftPhoto) {

            leftPhoto.style.setProperty(
                "--mouse-x",
                `${currentX * -4}px`
            );

            leftPhoto.style.setProperty(
                "--mouse-y",
                `${currentY * -3}px`
            );

        }


        if (rightPhoto) {

            rightPhoto.style.setProperty(
                "--mouse-x",
                `${currentX * 4}px`
            );

            rightPhoto.style.setProperty(
                "--mouse-y",
                `${currentY * 3}px`
            );

        }

    }


    requestAnimationFrame(
        animateParallax
    );

}


window.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth < 900
        ) {
            return;
        }


        mouseX =
            event.clientX /
            window.innerWidth -
            0.5;


        mouseY =
            event.clientY /
            window.innerHeight -
            0.5;

    }
);



animateParallax();



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal-section"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -50px 0px"
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);



/* ==================================================
   MAP BUTTON INTERACTION
================================================== */

const mapsButton =
    document.querySelector(
        ".maps-button"
    );


if (mapsButton) {

    mapsButton.addEventListener(
        "click",
        () => {

            mapsButton.classList.add(
                "map-clicked"
            );


            setTimeout(() => {

                mapsButton.classList.remove(
                    "map-clicked"
                );

            }, 600);

        }
    );

}



/* ==================================================
   PAGE VISIBILITY
================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }

    }
);