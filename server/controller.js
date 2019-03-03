const products = [];



function postProduct(req, res) {
    debugger;
    console.log(req.body);
    products.push(req.body)
    res.sendStatus(200)
    
}

module.exports = {
    postProduct,
}