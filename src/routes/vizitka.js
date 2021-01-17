import express from 'express'
const Router = express.Router()

Router.get('/', (req, res) => {
    res.render('vizitka')
})

export default Router