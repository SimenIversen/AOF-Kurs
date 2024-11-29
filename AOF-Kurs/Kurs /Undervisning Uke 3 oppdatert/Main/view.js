function updateView() {
    let page = model.app.currentPage;

    if(page == "logginPage"){
        logginPageView();
    } else if (page == "signupPage"){
        signupPageView();
    } else if (page == "mainPage"){
        mainPageView()
    }
}