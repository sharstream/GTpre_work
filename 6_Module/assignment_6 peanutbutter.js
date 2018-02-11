// Get Ingredients
var ing1 = "Peanut Butter";
var ing2 = "Jelly";
var ing3 = "Bread";

// Repeat the spreading process a max of 5 times
for (var i = i < 5; i++){

    // Each time, check that you haven't spread too much
    if (pbThickness >= 1.0) {

        // If you have spread too much, stop spreading
        stopSpreading();
    }
    // otherwise
    else {

        // keep spreading
        spreadMore();
    }
}

function spreadMore() {

    // use another set of sub-functions to move the knife.
    dipIntoPB();
    horizontalShiftKnife();
}

// deine the stopSprading function
function stopSpreading() {

    // use another set of sub-functions to set down the knife.
    clearKnife();
    putKnifeDown();
}