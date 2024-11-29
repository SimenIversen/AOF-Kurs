function loggin(){

    let user = getUserByUserName(model.input.login.username);
    console.log(user)
    if(user.password == model.input.login.password){
        model.app.currentPage = "mainPage";
        model.app.logginVeiw.username = '';
        model.app.logginVeiw.password = '';
        model.app.loggedInUser = user;

        updateView()
    }
    else(
        alert('Icorrect username or password')
    )
}
function goToSignupPage(){
    model.app.currentPage = "signupPage";
    updateView();
}






    
