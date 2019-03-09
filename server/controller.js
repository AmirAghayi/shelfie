module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then( response => {
           res.status(200).send(response);
        }).catch(err => {
            console.log('getAll:', err);
        });
    },

    newProduct: (req, res) => {
    const {imageUrl, productName, price } = req.body;
    const db = req.app.get('db');

    db.create_product([imageUrl, productName, price])
    .then(response => {
        res.status(200).send('Created Product');   
        }).catch(err => {
            console.log('newPeoduct:', err);
        });  
    }
}




