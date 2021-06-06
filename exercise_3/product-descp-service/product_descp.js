module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function

    function productURL(msg, respond) {
        if (msg.productId) {
            
            const data = mockData.filter( item => item.product_id == msg.productId) 
            const url = data[0].product_url
            respond(null, { result: url });
        }
        else {
            respond(null, { result: 'Some error while getting URL.' })
        }
    }

    function productName(msg, respond) {
        if (msg.productId) {
            const data = mockData.filter( item => item.product_id == msg.productId) 
            const name = data[0].product_name
            respond(null, { result: name });
        }
        else {
            respond(null, { result: 'Some error while getting NAME.' })
        }
    }
}