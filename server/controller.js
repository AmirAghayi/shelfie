module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then( response => {
            console.log('inventory', response)
           res.status(200).send(response);
        }).catch(err => {
            console.log('getAll:', err);
        });
    },

    newProduct: (req, res) => {
    const {imgUrl, productName, price } = req.body;
    console.log('the values', req.body)
    const db = req.app.get('db');

    db.create_product([imgUrl, productName, price])
    .then(response => {
        res.status(200).send('Created Product');   
        }).catch(err => {
            console.log('newPeoduct:', err);
        });  
    },

    removeProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.remove_product([id])
        .then(response => {
            res.status(200).send('dude, it is gone');
        }).catch(err => {
            console.log('removeProduct:', err)
        });
    }




}




