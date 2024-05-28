function brickCalculator() {
    //constants for building heights and brick requirements
    const heightFirst10Stories = 15;  // Height in feet for each of the first 10 stories
    const heightNext10Stories = 12;   // Height in feet for each of the next 10 stories
    const heightLast10Stories = 10;   // Height in feet for each of the last 10 stories
    const bricksPerFoot = 1000;       // Number of bricks needed per foot

    //total height in feet for each section of the building
    const totalHeightFirst10Stories = 10 * heightFirst10Stories;
    const totalHeightNext10Stories = 10 * heightNext10Stories;
    const totalHeightLast10Stories = 10 * heightLast10Stories;

    //total number of bricks needed for each section
    const totalBricksFirst10Stories = totalHeightFirst10Stories * bricksPerFoot;
    const totalBricksNext10Stories = totalHeightNext10Stories * bricksPerFoot;
    const totalBricksLast10Stories = totalHeightLast10Stories * bricksPerFoot;

    //total number of bricks needed for the entire building
    const totalBricks = totalBricksFirst10Stories + totalBricksNext10Stories + totalBricksLast10Stories;

    return totalBricks;
}

const totalBricksNeeded = brickCalculator();
console.log("Total bricks needed:", totalBricksNeeded);
