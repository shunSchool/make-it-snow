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
        drawSnowflake(snowflake[i]);
    }

    //loop draw function
    requestAnimationFrame(draw);
}

//Snowflake functions
function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, )
    }
}