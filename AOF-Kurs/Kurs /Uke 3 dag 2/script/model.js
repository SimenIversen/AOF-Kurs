const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        darkMode: true,
    },
    input: {
        logginView: {
            username: "",
            password: "",
        },
        signupView: {
            username:"",
            password: "",
            rptPassword:"",
            email:"",
        },
    },
    data: {
        users: [
            {
                id: 0,
                username: "Simen",
                password: "1234",
                email: "test@test.com",

            },
            {
                id: 1,
                username: "Bob",
                password: "5678",
                email:"test2@test.com"

            },
        ],

    },
}