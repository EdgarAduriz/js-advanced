//Esercizio 1
function performOperation(a, b, callback) {
    let sum = a + b;
    if (typeof sum == "number") {
        callback(null, sum)
    } else  {
        callback(new Error("Invalido"), null)
    }
   };
function displayResult(errore, result) {
      if (errore) {
        console.log(errore)
      } else if (result) {
        console.log(result)
      }
   };

performOperation(5, 'Z', displayResult);

/*const users = [
    {id : 1, name : 'Mario', surname : 'Rossi', username : 'mariorossi', password : 's3cr3t'},
    {id : 2, name : 'Alessandro', surname : 'verdi', username : 'aleverdi', password : 'pr1v4t3'}
];

const friends = {
    1: [
        {id : 2, nome : 'Lucia'}, {id : 3, nome : 'Giovanni'}
    ],
    2: [
        {id : 2, nome : 'Marco'}, {id : 3, nome : 'Giuseppe'}
    ]
};

function login(username, password, callback) {
    setTimeout(() => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            callback(null, user)
        } else {
            callback('Invalid credentials', null)
        }
    }, 1000)};

function getFriends(id, callback) {
    setTimeout(() => {
        const userFriends = friends[id];
        if (userFriends) {
            callback(null, userFriends)
        } else {
            callback(`User with ${id} is lonely`, null)
        }
    },2000)};

login('mariorossi', 's3cr3t', (error, data) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Logged in')
            getFriends(data.id, (error, data) =>
            {if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
            })
        }
    });*/