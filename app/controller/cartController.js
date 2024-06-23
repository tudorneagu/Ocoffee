const dataMapper=require('../dataMapper')

const cartController = {
    shopPage: async(request, response) => {
        try{
            const cart = request.session.cart ?? [];
            response.render("shop", {cart})

        }
        catch (error){
            console.log(error)
            response(500).send(error)
            client.end();
        }
    }
    cartAdd:
    cartRemove:
}


module.exports = cartController;