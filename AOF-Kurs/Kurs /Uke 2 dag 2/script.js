const app = document.getElementById("app");
let counter = 0;

updateView();
function updateView(){
    app.innerHTML = /*HTML*/ `
    <div class = "containers">
        ${drawView()}
        <p><strong>Her retunerer vi flere variabel og strenger
        ${returnNumbers()}
        </div>
        <div class="containers">
            <br>
            <h2>Her har vi en counter, funksjonen som endrer denne </h2>
            <h3><strong>${counter}</strong></h3>
            <button class="buttons" onclick="counterFun">
    `
}