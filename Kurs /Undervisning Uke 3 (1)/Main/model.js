const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        darkMode: true,
        currentPage: "loginPage",
    },
    input: {
        logginView: {
            username: "",
            password: "",
        },
        signupView: {
            username: "",
            password: "",
            rptPassword: "",
            email: "",
        },
    },
    data: {
        users: [
            {
                id: 0,
                username: "Ellie",
                password: "1234",
                email: "elliemarie@getacademy.no",
            },
            {
                id: 1,
                username: "Bob",
                password: "1234",
                email: "bob@getacademy.no",
            },
        ],
    },
}