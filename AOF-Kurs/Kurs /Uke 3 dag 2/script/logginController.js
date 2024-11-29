function loggin(){
    let logginUsernameInput = model.input.logginView.username;
    let logginPasswordInput = model.input.logginView.password;

    for(let i = 0; i < model.data.users.length; i++){
        if (logginUsernameInput === model.data.users[i].username
            && logginPasswordInput === model.data.users[i].password){
                
                model.app.loggedInUser = model.data.users[i];
                logginUsernameInput = "";
                logginPasswordInput = "";
                mainPageView();
                return;
       } 
         
    }
    
}