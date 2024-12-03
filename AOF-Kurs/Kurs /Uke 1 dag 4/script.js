const output = document.getElementById('outputDiv');


function printText(){
    const input = document.getElementById('textInput').value;

    output.innerHTML += /*HTML*/`
    <li><input type="checkbox"> ${input}</li>
`;
    

}