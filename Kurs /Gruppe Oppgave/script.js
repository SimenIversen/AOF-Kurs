const inventoryDiv = document.getElementById('inventory');
let inventory = "";

function addToInventory(clickedItem){
    inventory += clickedItem.innerHTML;
}

function showInventory(){
    inventoryDiv.innerHTML = getInventoryContents();

}
function getInventoryContents(){
    return inventory;
}
