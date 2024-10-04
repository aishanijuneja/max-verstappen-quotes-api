// functions/quote.js
const quotes = require('../quotes'); // Adjust the path to your quotes file


exports.handler = async (event, context) => {
    // Check the HTTP method
    if (event.httpMethod === 'GET') {
        const path = event.path;


        // Handle /quote endpoint
        if (path === '/.netlify/functions/quote') {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            return {
                statusCode: 200,
                body: JSON.stringify({ quote: randomQuote }),
            };
        }
       
        // Handle /quotes endpoint
        if (path === '/.netlify/functions/quotes') {
            return {
                statusCode: 200,
                body: JSON.stringify({ quotes }),
            };
        }


        // Handle 404
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