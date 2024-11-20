function createAndShowHtml(color, text, fontSize){
    document.getElementById('mainDiv').innerHTML = /*html*/ `
    <div ${createStyle(color, fontSize)}>${text} </div>`;
}
function createStyle(color, fontSize){
    return `style="background-color:${color}; font-size:${fontSize}px;"`;
}