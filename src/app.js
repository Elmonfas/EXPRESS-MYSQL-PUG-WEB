const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')

app.set('port', 8000)
app.set('views', path.join(__dirname, 'views'))   
app.set('view engine', 'pug')


app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use(require('../src/routes/index'))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.status(404).send('404 NOT FOUND')
})

module .exports = app
