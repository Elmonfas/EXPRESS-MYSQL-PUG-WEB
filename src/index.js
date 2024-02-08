const app = require('./app')

const main = () => {
    console.log('Listenning on port :', app.get('port'))
    app.listen(app.get('port'))
}

main()