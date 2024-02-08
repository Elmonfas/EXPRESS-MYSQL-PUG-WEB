const { createPool } = require('mysql2/promise')
try{
const con = createPool({
    host: "localhost",
    user: "root",
    password: "elmonfas",
    database: "books"
})
module.exports = con
}
catch(error){
    console.log('Ha habido un error en la conexion SQL :',error)
}


