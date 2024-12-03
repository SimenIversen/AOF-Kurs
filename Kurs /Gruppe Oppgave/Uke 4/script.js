

// Startverdier for bilens tilstand
let fuel = 100;
let cleanliness = 100;
let tires = 100;
let isGameOver = false;

// Oppdater statusene i UI
function updateStats() {
    document.getElementById("fuel").textContent = `🚗 Bensin: ${fuel.toFixed(1)}`;
    document.getElementById("cleanliness").textContent = `🧼 Renhet: ${cleanliness.toFixed(1)}`;
    document.getElementById("tires").textContent = `🔧 Dekktilstand: ${tires.toFixed(1)}`;
}

// Spill-loopen som forverrer bilens tilstand over tid
function gameLoop() {
    if (isGameOver) return;

    // Forverre bilens tilstand
    fuel -= Math.random() * 5; // Bensin reduseres sakte
    cleanliness -= Math.random() * 3; // Renhet forverres sakte
    tires -= Math.random() * 4; // Dekkenes tilstand reduseres

    // Sjekk om noe har nådd 0
    if (fuel <= 0 || cleanliness <= 0 || tires <= 0) {
        endGame();
        return;
    }

    // Oppdater statistikken
    updateStats();

    // Kjør denne funksjonen igjen om 1 sekund
    setTimeout(gameLoop, 1000);
}

// Handlinger for å vedlikeholde bilen
function refuel() {
    if (isGameOver) return;
    fuel = Math.min(fuel + 20, 100); // Legg til bensin, men ikke over 100
    updateStats();
}

function wash() {
    if (isGameOver) return;
    cleanliness = Math.min(cleanliness + 15, 100); // Vask bilen
    updateStats();
}

function checkTires() {
    if (isGameOver) return;
    tires = Math.min(tires + 25, 100); // Sjekk og reparer dekk
    updateStats();
}

// Avslutt spillet
function endGame() {
    isGameOver = true;
    document.getElementById("gameOver").style.display = "block";
}

// Start spill-loopen
gameLoop();