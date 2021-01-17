import path from 'path'
import express from 'express'
import ejs from 'ejs'

const app = express()

app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use('/assets', express.static(path.resolve(__dirname + '/assets')))
app.set('views', path.resolve(__dirname, 'views'))


import vizitkaRoute from './routes/vizitka'
app.use('/vizitka', vizitkaRoute)

app.get('/', (req, res) => {
    res.redirect(307, '/vizitka')
})

app.listen(3000, () => console.log('Listening on localhost:3000'))