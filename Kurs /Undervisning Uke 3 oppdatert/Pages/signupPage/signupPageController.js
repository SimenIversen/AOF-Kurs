function registerUser() {
  let user = model.input.signupView;
  if (
    user.password === user.rptPassword &&
    !getUserByUserName(user.username) &&
    user.email.includes("@")
  ) {
    let newUser = {
        id: model.data.users.length + 1,
        username: user.username,
        password: user.password,
        email: user.email,
        profilePicture: "Assets/profilePictures/emptyUser.jpg",
    }
    model.data.users.push(newUser);
    clearSignupFields();

    model.app.currentPage = "logginPage";
    updateView();
  } else {
    alert("You need to fill out all the fields..");
  }
}

function backToLogginPage() {
    clearSignupFields();
    model.app.currentPage = "logginPage";
    updateView();
}

function clearSignupFields() {
    let user = model.input.signupView;
    user.username = "";
    user.password = "";
    user.rptPassword = "";
    user.email = "";
}
