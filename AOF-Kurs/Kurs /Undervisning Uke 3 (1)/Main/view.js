function updateView(){
    let page = model.app.currentPage;

    if(page == "loginPage"){
        logginPageView();

    } else if(page == "signeupPage"){
        signupPageView();
    } else if(page == "mainPage"){
        mainPageView();
    }
}