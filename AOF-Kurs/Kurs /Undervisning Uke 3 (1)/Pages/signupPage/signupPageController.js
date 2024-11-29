function registerUser(){
    let user = model.input.signupView;
    if(user.password === user.rptPassword
         && !getUserByUserName(user.username)
        && user.email.includes("@")){

        }{
            let newUser = {
                id: model.data.users.length + 1,
                username: user.username,
                password: user.password,
                email: user.email,
            }
            model.data.users.push(newUser);
        }

    
}