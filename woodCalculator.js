function woodCalculator(beds, tables, chairs) {
    //the wood required for each type of furniture
    const woodPerBed = 5;     // cubic meters
    const woodPerTable = 3;   // cubic meters
    const woodPerChair = 1;   // cubic meters

    //the total wood needed
    const totalWood = (beds * woodPerBed) + (tables * woodPerTable) + (chairs * woodPerChair);

    return totalWood;
}

const numberOfBeds = 3;
const numberOfTables = 2;
const numberOfChairs = 1;

const totalWoodNeeded = woodCalculator(numberOfBeds, numberOfTables, numberOfChairs);
console.log("Total wood needed: ", totalWoodNeeded, "cubic meters");