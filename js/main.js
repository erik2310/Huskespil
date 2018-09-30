function onClick(selected) {
   
    if (selected == earth1) {
        document.getElementById("earth1").src = "images/earth.png";
    } else if (selected == earth2) {
        document.getElementById("earth2").src = "images/earth.png";
    } else if (document.getElementById("earth1").getAttribute("src") != "images/earth.png" || document.getElementById("earth2").getAttribute("src") != "images/earth.png") {
        document.getElementById("earth1").src = "images/back.png";
        document.getElementById("earth2").src = "images/back.png";     
    } 

    if (selected == jupiter1) {
        document.getElementById("jupiter1").src = "images/jupiter.png";
    } else if (selected == jupiter2) {
        document.getElementById("jupiter2").src = "images/jupiter.png";
    } else if (document.getElementById("jupiter1").getAttribute("src") != "images/jupiter.png" || document.getElementById("jupiter2").getAttribute("src") != "images/jupiter.png") {
        document.getElementById("jupiter1").src = "images/back.png";
        document.getElementById("jupiter2").src = "images/back.png";
    }

    if (selected == mars1) {
        document.getElementById("mars1").src = "images/mars.png";
    } else if (selected == mars2) {
        document.getElementById("mars2").src = "images/mars.png";
    } else if (document.getElementById("mars1").getAttribute("src") != "images/mars.png" || document.getElementById("mars2").getAttribute("src") != "images/mars.png") {
        document.getElementById("mars1").src = "images/back.png";
        document.getElementById("mars2").src = "images/back.png";
    }

    if (selected == mercury1) {
        document.getElementById("mercury1").src = "images/mercury.png";
    } else if (selected == mercury2) {
        document.getElementById("mercury2").src = "images/mercury.png";
    } else if (document.getElementById("mercury1").getAttribute("src") != "images/mercury.png" || document.getElementById("mercury2").getAttribute("src") != "images/mercury.png") {
        document.getElementById("mercury1").src = "images/back.png";
        document.getElementById("mercury2").src = "images/back.png";
    }

    if (selected == neptune1) {
        document.getElementById("neptune1").src = "images/neptune.png";
    } else if (selected == neptune2) {
        document.getElementById("neptune2").src = "images/neptune.png";
    } else if (document.getElementById("neptune1").getAttribute("src") != "images/neptune.png" || document.getElementById("neptune2").getAttribute("src") != "images/neptune.png") {
        document.getElementById("neptune1").src = "images/back.png";
        document.getElementById("neptune2").src = "images/back.png";
    }

    if (selected == saturn1) {
        document.getElementById("saturn1").src = "images/saturn.png";
    } else if (selected == saturn2) {
        document.getElementById("saturn2").src = "images/saturn.png";
    } else if (document.getElementById("saturn1").getAttribute("src") != "images/saturn.png" || document.getElementById("saturn2").getAttribute("src") != "images/saturn.png") {
        document.getElementById("saturn1").src = "images/back.png";
        document.getElementById("saturn2").src = "images/back.png";
    }

    if (selected == uranus1) {
        document.getElementById("uranus1").src = "images/uranus.png";
    } else if (selected == uranus2) {
        document.getElementById("uranus2").src = "images/uranus.png";
    } else if (document.getElementById("uranus1").getAttribute("src") != "images/uranus.png" || document.getElementById("uranus2").getAttribute("src") != "images/uranus.png") {
        document.getElementById("uranus1").src = "images/back.png";
        document.getElementById("uranus2").src = "images/back.png";
    }

    if (selected == venus1) {
        document.getElementById("venus1").src = "images/venus.png";
    } else if (selected == venus2) {
        document.getElementById("venus2").src = "images/venus.png";
    } else if (document.getElementById("venus1").getAttribute("src") != "images/venus.png" || document.getElementById("venus2").getAttribute("src") != "images/venus.png") {
        document.getElementById("venus1").src = "images/back.png";
        document.getElementById("venus2").src = "images/back.png";
    }

}