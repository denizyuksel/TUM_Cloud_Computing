module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions

    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function

    function productPrice(msg, respond) {

        if (msg.productId) {
            const data = mockData.filter(item => item.product_id == msg.productId)
            const price = data[0].product_price
            respond(null, { result: price });
        }
        else {
            respond(null, { result: 'Some error while getting PRICE.' })
        }
    }
}