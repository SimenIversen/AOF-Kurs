function mainPageView(){
    let user = model.app.loggedInUser;
    app.innerHTML = /*HTML*/`
    <div>
        <h1>Main Page</h1>
        <h2>Welcome ${user.username}</h2>
        <img src="${user.profilePicture}">


    </div>

    `;
}