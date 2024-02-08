const { Router } = require('express');
const router = Router();
const con = require('../db')

router.get('/', async (req, res) => {
    const result = await con.query('SELECT * FROM books')
    res.render('home',{
        books : result[0]
    })
    
});

router.get('/new_book', (req, res) => {
    res.render('new_book')
})

router.post('/new_book', async (req, res) => {
    const { titulo, autor, descripcion, img } = req.body;

    const new_book = {
        titulo,
        autor,
        descripcion,
        img
    };
    try{
        await con.query('INSERT INTO books(titulo, autor, descripcion, img) VALUES (?, ?, ?, ?)', [new_book.titulo, new_book.autor, new_book.descripcion, new_book.img]);
        console.log('Se ha añadido correctamente :', new_book)
    }catch(e){
        console.log('Error al añadir libro :', e)
    }
    res.redirect('/')
})

module.exports = router; 
