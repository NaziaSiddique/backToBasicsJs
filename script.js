var database = [
    {
        username: 'Nazia',
        password: 'Secr3t'
    }
];

var newsfeed = [
    {
        username: 'Tom',
        timeline: 'Hey, I am tired'
    },
    {
        username: 'Jon',
        timeline: 'I am happy'
    },
    {
        username: 'Anne',
        timeline: 'I have a new job'
    }
];

function isUserValid(username, password){
    for (var i = 0; i < database.length; i++){
        if (database[i].username === username && database[i].password === password){
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsfeed);
    } else {
        alert("Sorry, you have entered a wrong username or password!");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

