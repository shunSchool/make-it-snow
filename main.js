let cnv = document.getElementById ("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000
cnv.height = 800

//empty array of snowflakes
let snowflakes = [];
//main draw loop
requestAnimationFrame(draw);
function draw() {
    // fill canvas
     background("black");

    //move the snowflakes
    for (let i = 0; i < snowflakes.length; i++) {
        moveSnowflake (snowflakes[i]);
        drawSnowflake(snowflakes[i]);
        console.log(snowflakes.length)
    }
    //loop draw function
    requestAnimationFrame(draw);
}

//Snowflake functions
function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: 0,
        r: randomInt(2, 5),
        speed: randomInt(2, 5),
        color: "white"
    }
}

function drawSnowflake (aSnowflake) {
    fill ("white")
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill")
}

function moveSnowflake(aSnowflake) {
    //aSnowflake.x += randomInt(1, 3);
    aSnowflake.y += aSnowflake.speed
    if (aSnowflake.y > cnv.height) {
        aSnowflake.y = 0
        aSnowflake.x = randomInt(0, cnv.width)
    }
}

function addSnowflake() {
    snowflakes.push(newRandomSnowflake());
}

//events 
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { //right arrow
        //add new random snowflake
       addSnowflake()
    } else if (event.keyCode = 37) { //left arrow
        //remove last snowflake
        snowflakes.pop()
    }
}