import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello this is index page')
})

app.listen(3000, () => console.log('Listening on localhost:3000'))