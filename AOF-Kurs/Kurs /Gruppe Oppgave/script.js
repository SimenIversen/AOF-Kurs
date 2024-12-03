
let inventory = "" ;

function addToInventory(clickedItem) {
    inventory += clickedItem.outerHTML + " ";
}

function showInventory() {
    document.getElementById('Inventory').innerHTML = inventory;
}

function removeClass(clickedItem) {
    clickedItem.classList.remove('item');
}