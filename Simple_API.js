const http = require('http')
const usersData = [
    {
        "name": "anil",
        age: 20,
        email:'punit@test.com'
    },

    {
        "name": "anil",
        age: 20,
        email:'punit@test.com'
    },

    {
        "name": "anil",
        age: 20,
        email:'punit@test.com'
    }
]
http.createServer((req,res)=>{

    res.write(JSON.stringify(usersData));
    res.end();
}).listen(5000)