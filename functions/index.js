const quotes = require('../quotes');  
exports.handler = async (event, context) => {
    
    if (event.httpMethod === 'GET') {
        
        if (event.path === '/.netlify/functions/quote') {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            return {
                statusCode: 200,
                body: JSON.stringify({ quote: randomQuote }),
            };
        }

        
        if (event.path === '/.netlify/functions/quotes') {
            return {
                statusCode: 200,
                body: JSON.stringify({ quotes }),  
            };
        }
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "Endpoint not found" }),
        };
    }
    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
    };
};
