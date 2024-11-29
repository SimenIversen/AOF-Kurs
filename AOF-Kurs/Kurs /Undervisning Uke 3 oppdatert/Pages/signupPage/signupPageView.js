function signupPageView(){
    app.innerHTML = /*HTML*/`

        <h1>User Registration</h1>
        <div class="inputDivContainerBeforeLoggin">
            <input type="text" placeholder="Enter Username" onchange="model.input.signupView.username = this.value">
            <input type="text" placeholder="Enter Password" onchange="model.input.signupView.password = this.value">
            <input type="text" placeholder="Enter Password Again" onchange="model.input.signupView.rptPassword = this.value">
            <input type="text" placeholder="Enter Email" onchange="model.input.signupView.email = this.value">
        </div>
        <button onclick="registerUser()">Signup</button>
        <button onclick="backToLogginPage()">Go Back</button>
    `;
}