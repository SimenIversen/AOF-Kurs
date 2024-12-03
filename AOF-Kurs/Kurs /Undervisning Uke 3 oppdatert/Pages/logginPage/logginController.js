
function loggin(){

    let user = getUserByUserName(model.input.logginView.username);
    console.log(user)
    if(user.password == model.input.logginView.password){
        model.app.currentPage = 'mainPage';
        model.input.logginView.username = '';
        model.input.logginView.password = '';
        model.app.loggedInUser = user;

        updateView();
    }
    else{
        alert('INNCORRECT PASSWORD')
    }

}

function goToSignupPage() {
    model.app.currentPage = "signupPage";
    updateView();
}

    
