function updateVeiw(){
    app.innerHTML = /*html*/ `
   <div>
        <div>
            <h1>Login</h1>
         <input type="text" placeholder="Username" onchange="model.input.logginView.username = this.value">
         <input type="password" placeholder="Password" onchange="model.input.loginView.password = this.value">
        </div>
        <div>
         <button onclick="loggin()">loggin</button>  
            <button onclick="">Signup</button>
        </div>  
    </div>

    `

}