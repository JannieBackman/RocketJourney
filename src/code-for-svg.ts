window.addEventListener('load', (event) => {

    /*----------- Background -----------*/ 

    let backgroundIndex: number = 0;
    let imagesBackground = ['background-1', 'background-2', 'background-3'];
    let background = document.createElement("IMG"); 
    background.setAttribute("width", "800px");
    document.body.appendChild(background);

    function renderBg() {
        backgroundIndex = backgroundIndex + 1; 
        if (backgroundIndex > 2) {
            backgroundIndex = 0;
        }
        background.setAttribute("src", `/images/${imagesBackground[backgroundIndex]}.svg`);
    };

    /*----------- Obstacles -----------*/ 

    let index: number = 0;

    // Jellyfish 
    let imagesJellyfish = ['jellyfish-1', 'jellyfish-2'];
    let jellyfish = document.createElement("IMG"), HTMLElement;
    jellyfish.setAttribute("width", "100px");
    document.body.appendChild(jellyfish);
    
    // Superman
    let imagesSuperman = ['superman-1', 'superman-2'];
    let superman = document.createElement("IMG");
    superman.setAttribute("width", "150px");
    document.body.appendChild(superman);

    // Meteoer
    let imagesMeteor = ['meteor-1', 'meteor-2'];
    let meteoer = document.createElement("IMG");
    meteoer.setAttribute("width", "100px");
    meteoer.style.position = "absolute";  // just for display
    meteoer.style.transform = "rotate(30deg)";  // just for display
    meteoer.style.left = "500px";  // just for display
    meteoer.style.top = "50px";  // just for display
    document.body.appendChild(meteoer);

    // Octopus
    let imagesOctopus = ['octopus-1', 'octopus-2'];
    let octopus = document.createElement("IMG");
    octopus.setAttribute("width", "80px");
    document.body.appendChild(octopus);

    // Star
    let imagesStar = ['star-1', 'star-2'];
    let star = document.createElement("IMG");
    star.setAttribute("width", "70px");
    document.body.appendChild(star);

    // Rocket
    let imagesRocket = ['rocket-1', 'rocket-2'];
    let rocket = document.createElement("IMG");
    rocket.setAttribute("width", "120px");
    rocket.style.position = "absolute";  // just for display
    rocket.style.left = "310px"; // just for display
    rocket.style.top = "260px"; // just for display
    document.body.appendChild(rocket);

    // Green alien
    let imagesAlien = ['alien-1', 'alien-2'];
    let alien = document.createElement("IMG");
    alien.setAttribute("width", "40px");
    document.body.appendChild(alien);

    // Pixel alien
    let imagesPAlien = ['palien-1', 'palien-2'];
    let pAlien = document.createElement("IMG");
    pAlien.setAttribute("width", "60px");
    document.body.appendChild(pAlien);

    // Saturn
    let imagesSaturn = ['saturn-1', 'saturn-2'];
    let saturn = document.createElement("IMG");
    saturn.setAttribute("width", "140px");
    document.body.appendChild(saturn);

    // Planet facing left
    let imagesPlanetL = ['planetl-1', 'planetl-2'];
    let planetL = document.createElement("IMG");
    planetL.setAttribute("width", "80px");
    document.body.appendChild(planetL);

    // Planet facing right
    let imagesPlanetR = ['planetr-1', 'planetr-2'];
    let planetR = document.createElement("IMG");
    planetR.setAttribute("width", "80px");
    document.body.appendChild(planetR);

    function renderPic() {
        if (index === 0) {
            index = 1;
        } else {
            index = 0;
        }
        jellyfish.setAttribute("src", `/images/${imagesJellyfish[index]}.svg`);
        superman.setAttribute("src", `/images/${imagesSuperman[index]}.svg`);
        meteoer.setAttribute("src", `/images/${imagesMeteor[index]}.svg`);
        octopus.setAttribute("src", `/images/${imagesOctopus[index]}.svg`);
        star.setAttribute("src", `/images/${imagesStar[index]}.svg`);
        rocket.setAttribute("src", `/images/${imagesRocket[index]}.svg`);
        alien.setAttribute("src", `/images/${imagesAlien[index]}.svg`);
        pAlien.setAttribute("src", `/images/${imagesPAlien[index]}.svg`);
        saturn.setAttribute("src", `/images/${imagesSaturn[index]}.svg`);
        planetL.setAttribute("src", `/images/${imagesPlanetL[index]}.svg`);
        planetR.setAttribute("src", `/images/${imagesPlanetR[index]}.svg`);
    };

// setInterval(renderPic, 500);
// setInterval(renderBg, 300);

});