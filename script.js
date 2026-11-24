
// =========================
// GAME VARIABLES
// =========================

let frogFound = false;
let attempts = 0;
let hintsUsed = 0;

let batFound = false;
let gothamAttempts = 0;
let gothamHintsUsed = 0;


// =========================
// FOREST MESSAGES
// =========================

const wrongMessages = [
    "Raven... that is not your Beast Boy.",
    "Suspicious. But unfortunately not him.",
    "That object has been cleared of all charges.",
    "Beast Boy Industries denies involvement.",
    "Your detective skills are being investigated.",
    "Incorrect. Very skibidi behaviour.",
    "That's just a plant, your highness.",
    "Breaking news: Raven interrogates a rock.",
    "The suspect remains at large.",
    "Somewhere, Beast Boy is giggling."
];

const forestHints = [
    "Beast Boy seems to enjoy being close to water.",
    "Try looking towards the left side of the forest.",
    "He is resting on a moss-covered rock beneath some purple mushrooms."
];


// =========================
// GOTHAM MESSAGES
// =========================

const gothamWrongMessages = [
    "That's not him. Batman is disappointed.",
    "Breaking news: Raven interrogates a building.",
    "Incorrect. The Joker finds this amusing.",
    "That gargoyle has an alibi.",
    "Batman would like a word with you.",
    "Beast Boy is somewhere laughing.",
    "Very questionable detective behaviour.",
    "Gotham deserves a better detective."
];

const gothamHints = [
    "Our suspect seems to prefer elevated places.",
    "Look towards the upper-left side of Gotham.",
    "Something green is hiding beneath a stone arch surrounded by purple flowers."
];


// =========================
// SCREEN NAVIGATION
// =========================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId)
        .classList.add("active");

    window.scrollTo(0, 0);
}


function startGame() {

    resetForest();
    resetGotham();
    resetApartment();
    resetBali();

    showScreen("level-one");

}


function goHome() {

    showScreen("opening-screen");
}


// =========================
// LEVEL ONE: ENCHANTED FOREST
// =========================

function wrongGuess() {

    if (frogFound) return;

    attempts++;

    document.getElementById("attempt-count")
        .textContent = attempts;

    const randomIndex = Math.floor(
        Math.random() * wrongMessages.length
    );

    document.getElementById("forest-status")
        .textContent = wrongMessages[randomIndex];
}


function showHint() {

    if (frogFound) return;

    const hintIndex = Math.min(
        hintsUsed,
        forestHints.length - 1
    );

    document.getElementById("forest-status")
        .textContent = forestHints[hintIndex];

    hintsUsed++;

    if (hintsUsed >= forestHints.length) {

        document.getElementById("hint-button")
            .textContent = "Repeat final clue";
    }
}


function findFrog(event) {

    event.stopPropagation();

    if (frogFound) return;

    frogFound = true;

    document.getElementById("hidden-frog")
        .classList.add("found");

    const status =
        document.getElementById("forest-status");

    status.textContent =
        "YAY! CASE SOLVED! You found your Beast Boy! 💚";

    status.classList.add("success");

    const caseStatus =
        document.getElementById("case-status");

    caseStatus.textContent = "✓ Case solved";

    caseStatus.classList.add("solved");

    document.getElementById("hint-button")
        .hidden = true;

    document.getElementById("next-level")
        .hidden = false;
}


// =========================
// UNLOCK GOTHAM CITY
// =========================

function nextLevel() {

    if (!frogFound) return;

    resetGotham();

    showScreen("level-two");
}


// =========================
// RESET FOREST
// =========================

function resetForest() {

    frogFound = false;
    attempts = 0;
    hintsUsed = 0;

    document.getElementById("attempt-count")
        .textContent = "0";

    document.getElementById("hidden-frog")
        .classList.remove("found");

    const status =
        document.getElementById("forest-status");

    status.textContent =
        "Search carefully, Detective Raven.";

    status.classList.remove("success");

    const caseStatus =
        document.getElementById("case-status");

    caseStatus.textContent =
        "● Investigation in progress";

    caseStatus.classList.remove("solved");

    const hintButton =
        document.getElementById("hint-button");

    hintButton.hidden = false;

    hintButton.textContent = "Request a clue";

    document.getElementById("next-level")
        .hidden = true;
}


// =========================
// LEVEL TWO: GOTHAM CITY
// =========================

function wrongGothamGuess() {

    if (batFound) return;

    gothamAttempts++;

    document.getElementById("gotham-attempt-count")
        .textContent = gothamAttempts;

    const randomIndex = Math.floor(
        Math.random() * gothamWrongMessages.length
    );

    document.getElementById("gotham-status")
        .textContent = gothamWrongMessages[randomIndex];
}


function showGothamHint() {

    if (batFound) return;

    const hintIndex = Math.min(
        gothamHintsUsed,
        gothamHints.length - 1
    );

    document.getElementById("gotham-status")
        .textContent = gothamHints[hintIndex];

    gothamHintsUsed++;

    if (gothamHintsUsed >= gothamHints.length) {

        document.getElementById("gotham-hint-button")
            .textContent = "Repeat final clue";
    }
}


function findBat(event) {

    event.stopPropagation();

    if (batFound) return;

    batFound = true;

    document.getElementById("hidden-bat")
        .classList.add("found");

    const status =
        document.getElementById("gotham-status");

    status.textContent =
        "YAY! CASE SOLVED! Even Batman is impressed. 💚";

    status.classList.add("success");

    const caseStatus =
        document.getElementById("gotham-case-status");

    caseStatus.textContent = "✓ Case solved";

    caseStatus.classList.add("solved");

    document.getElementById("gotham-hint-button")
        .hidden = true;

    document.getElementById("gotham-next-level")
        .hidden = false;
}


// =========================
// RESET GOTHAM
// =========================

function resetGotham() {

    batFound = false;
    gothamAttempts = 0;
    gothamHintsUsed = 0;

    document.getElementById("gotham-attempt-count")
        .textContent = "0";

    document.getElementById("hidden-bat")
        .classList.remove("found");

    const status =
        document.getElementById("gotham-status");

    status.textContent =
        "Gotham needs you, Detective Raven.";

    status.classList.remove("success");

    const caseStatus =
        document.getElementById("gotham-case-status");

    caseStatus.textContent =
        "● Investigation in progress";

    caseStatus.classList.remove("solved");

    const hintButton =
        document.getElementById("gotham-hint-button");

    hintButton.hidden = false;

    hintButton.textContent = "Request a clue";

    document.getElementById("gotham-next-level")
        .hidden = true;
}

// =========================
// PHASE 5: NEXT DESTINATION
// =========================

function goToApartment() {

    if (!batFound) return;

    resetApartment();

    showScreen("level-three");

}

// =========================
// PHASE 5: OUR APARTMENT
// =========================

let catFound = false;
let apartmentAttempts = 0;
let apartmentHintsUsed = 0;


// INCORRECT GUESS MESSAGES

const apartmentWrongMessages = [

    "That's furniture, Raven.",

    "R8,000 a month and we still can't find him.",

    "Please stop interrogating our houseplants.",

    "The LEGO collection is innocent.",

    "The landlord has declined to comment.",

    "That is not included in the rental agreement.",

    "Very skibidi household investigation.",

    "Beast Boy is probably avoiding the dishes."

];


// PROGRESSIVE HINTS

const apartmentHints = [

    "Our suspect appears to be rather comfortable.",

    "Perhaps he is somewhere in the living room.",

    "Look for something green resting on the sofa."

];


// INCORRECT GUESS

function wrongApartmentGuess() {

    if (catFound) return;

    apartmentAttempts++;

    document.getElementById("apartment-attempt-count")
        .textContent = apartmentAttempts;

    const randomIndex = Math.floor(
        Math.random() * apartmentWrongMessages.length
    );

    document.getElementById("apartment-status")
        .textContent = apartmentWrongMessages[randomIndex];

}


// REQUEST A CLUE

function showApartmentHint() {

    if (catFound) return;

    const hintIndex = Math.min(
        apartmentHintsUsed,
        apartmentHints.length - 1
    );

    document.getElementById("apartment-status")
        .textContent = apartmentHints[hintIndex];

    apartmentHintsUsed++;

    if (apartmentHintsUsed >= apartmentHints.length) {

        document.getElementById("apartment-hint-button")
            .textContent = "Repeat final clue";

    }

}


// BEAST BOY DISCOVERED

function findCat(event) {

    event.stopPropagation();

    if (catFound) return;

    catFound = true;

    document.getElementById("hidden-cat")
        .classList.add("found");

    const status =
        document.getElementById("apartment-status");

    status.textContent =
        "YAY! CASE SOLVED! Apparently, the suspect was taking a nap. 💚";

    status.classList.add("success");

    const caseStatus =
        document.getElementById("apartment-case-status");

    caseStatus.textContent = "✓ Case solved";

    caseStatus.classList.add("solved");

    document.getElementById("apartment-hint-button")
        .hidden = true;

    document.getElementById("apartment-next-level")
        .hidden = false;

}


// RESET APARTMENT

function resetApartment() {

    catFound = false;
    apartmentAttempts = 0;
    apartmentHintsUsed = 0;

    document.getElementById("apartment-attempt-count")
        .textContent = "0";

    document.getElementById("hidden-cat")
        .classList.remove("found");

    const status =
        document.getElementById("apartment-status");

    status.textContent =
        "Welcome home, Detective Raven.";

    status.classList.remove("success");

    const caseStatus =
        document.getElementById("apartment-case-status");

    caseStatus.textContent =
        "● Investigation in progress";

    caseStatus.classList.remove("solved");

    const hintButton =
        document.getElementById("apartment-hint-button");

    hintButton.hidden = false;

    hintButton.textContent = "Request a clue";

    document.getElementById("apartment-next-level")
        .hidden = true;

}


// NEXT DESTINATION

function goToBali() {

    if (!catFound) return;

    resetBali();

    showScreen("level-four");

}

// =========================
// PHASE 6: LOST IN BALI
// =========================

let monkeyFound = false;
let baliAttempts = 0;
let baliHintsUsed = 0;


// INCORRECT GUESS MESSAGES

const baliWrongMessages = [

    "Raven, we're supposed to be investigating, not shopping.",

    "That handbag is innocent.",

    "Please do not interrogate the souvenirs.",

    "Beast Boy is not included in the price.",

    "The shopkeeper says no refunds.",

    "Our holiday budget is being investigated.",

    "Very skibidi tourist behaviour.",

    "We did not fly all the way to Bali for this.",

    "That's a souvenir, your highness.",

    "The suspect remains on holiday."

];


// PROGRESSIVE HINTS

const baliHints = [
    "Our suspect enjoys climbing.",
    "Perhaps you should look towards the palm trees.",
    "Look at the tree branch on the upper-right side."
];

// INCORRECT GUESS

function wrongBaliGuess() {

    if (monkeyFound) return;

    baliAttempts++;

    document.getElementById("bali-attempt-count")
        .textContent = baliAttempts;

    const randomIndex = Math.floor(
        Math.random() * baliWrongMessages.length
    );

    document.getElementById("bali-status")
        .textContent = baliWrongMessages[randomIndex];

}


// REQUEST A CLUE

function showBaliHint() {

    if (monkeyFound) return;

    const hintIndex = Math.min(
        baliHintsUsed,
        baliHints.length - 1
    );

    document.getElementById("bali-status")
        .textContent = baliHints[hintIndex];

    baliHintsUsed++;

    if (baliHintsUsed >= baliHints.length) {

        document.getElementById("bali-hint-button")
            .textContent = "Repeat final clue";

    }

}


// BEAST BOY DISCOVERED

function findMonkey(event) {

    event.stopPropagation();

    if (monkeyFound) return;

    monkeyFound = true;

    document.getElementById("hidden-monkey")
        .classList.add("found");

    const status =
        document.getElementById("bali-status");

    status.textContent =
        "YAY! FINAL CASE SOLVED! You found Beast Boy in every location! 💚";

    status.classList.add("success");

    const caseStatus =
        document.getElementById("bali-case-status");

    caseStatus.textContent = "✓ Case solved";

    caseStatus.classList.add("solved");

    document.getElementById("bali-hint-button")
        .hidden = true;

    document.getElementById("bali-next-level")
        .hidden = false;

}


// RESET BALI

function resetBali() {

    monkeyFound = false;
    baliAttempts = 0;
    baliHintsUsed = 0;

    document.getElementById("bali-attempt-count")
        .textContent = "0";

    document.getElementById("hidden-monkey")
        .classList.remove("found");

    const status =
        document.getElementById("bali-status");

    status.textContent =
        "One final investigation, Detective Raven.";

    status.classList.remove("success");

    const caseStatus =
        document.getElementById("bali-case-status");

    caseStatus.textContent =
        "● Investigation in progress";

    caseStatus.classList.remove("solved");

    const hintButton =
        document.getElementById("bali-hint-button");

    hintButton.hidden = false;

    hintButton.textContent = "Request a clue";

    document.getElementById("bali-next-level")
        .hidden = true;

}


// FINAL REWARD


function showVictory() {

    if (!monkeyFound) return;

    const totalAttempts =
        attempts +
        gothamAttempts +
        apartmentAttempts +
        baliAttempts;

    const totalHints =
        hintsUsed +
        gothamHintsUsed +
        apartmentHintsUsed +
        baliHintsUsed;

    document.getElementById("total-attempts")
        .textContent = totalAttempts;

    document.getElementById("total-hints")
        .textContent = totalHints;

    showScreen("victory-screen");

}
function revealReward() {

    showScreen("reward-screen");

}