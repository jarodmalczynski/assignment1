/*
 * Design the logic for a program for the River Falls Homes Construction Company.
 * Design a program that prompts the user for a lot number in the River Falls subdivision,
 * and data about the home to be built there including number of bedrooms, number of bathrooms,
 * and size of garage in number of cars it holds. Output is the price of the home which is $50,000
 * base price plus $17,000 for each bedroom, $12,500 for each bathroom, and $6,000 for each car the
 * garage holds. (Only needs to run once).
 */

"use strict";
const PROMPT = require ('readline-sync');

let lotNumber, bedroom, bathroom, garage, bedrooms, bathrooms, cars;
let finalPrice;

const basePrice = 50000;
const bedPrice = 17000;
const bathPrice = 12500;
const garagePrice = 6000;


function main() {
    setLotNumber();
    setNumberOfBedrooms();
    setNumberOfBathrooms();
    setGarageSize();
    setFinalPrice();
}

main();

function setLotNumber() {
    lotNumber = PROMPT.question(' \nWhat is the lot number?: ');
}

function setNumberOfBedrooms() {
    bedroom = PROMPT.question(' \nHow many bedrooms?: ');
    bedrooms = bedPrice * bedroom;
}

function setNumberOfBathrooms() {
    bathroom = PROMPT.question(' \nHow many bathrooms?: ');
    bathrooms = bathPrice * bathroom;
}

function setGarageSize() {
    garage = PROMPT.question(' \nHow many car garage?: ');
    cars = garagePrice * garage;
}

function setFinalPrice() {
    finalPrice = basePrice + cars + bathrooms + bedrooms;
    console.log("\nYour total is..." + finalPrice);
}