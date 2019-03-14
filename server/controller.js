module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then( response => {
            console.log('inventory')
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
    },

    getProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        console.log(id)

        db.get_product([id])
        .then(response => {
            res.send(response[0])
        }).catch(err => console.log(err))

    },

    editProduct: (req, res ) => {
        const db = req.app.get('db');
        const {id} = req.params
        console.log(req.params)
        const {productName, price, imgUrl} = req.body
        console.log(req.body)
        
        db.update_product([productName, price, imgUrl, id])
        .then(response => {
            res.send('edited')
        }).catch(err => {
            console.log(err)
        })
    } 


}




