function mainPageView(){
    let user = model.app.loggedInUser;
    console.table(user);
    app.innerHTML = /*HTML*/ `
    <div>
        <h1> Main Page</h1>
        <h2> Welcome ${user.username}</h2>
    
    </div>
    `;
}