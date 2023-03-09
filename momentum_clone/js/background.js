const images = [
    "castle.jpg",
    "castle2.jpg",
    "hamburg.jpg",
    "nature.jpg",
    "night-sky.jpg",
    "ocean.jpg",
    "sky.jpg",
    "sunset.jpg",
    "sunset2.jpg",
    "trees.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.background = `img/${chosenImage}`;    // just setting img into document body


// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);