const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
app.use(express.json())

const users = [
    {id: '1', name: 'Naimur Rahman', email: 'naimur@gmail.com'},
    {id: '2', name: 'Sakil Ahammed', email: 'sakil@gmail.com'},
    {id: '3', name: 'Tanvir Rahman', email: 'tanvir@gmail.com'}
]

app.get('/', (req, res) => {
    res.send('users management server is running!!');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    
    console.log(req.body);
    const newUser = req.body;
     newUser.id = users.length + 1;
     users.push(newUser)
     res.send(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})