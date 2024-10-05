const quotes = require('../quotes');  // Adjust the path to your quotes.js file

exports.handler = async (event, context) => {
    // Only allow GET requests
    if (event.httpMethod === 'GET') {
        // Handle individual quote request
        if (event.path === '/.netlify/functions/quote') {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            return {
                statusCode: 200,
                body: JSON.stringify({ quote: randomQuote }),
            };
        }

        // Handle request for all quotes
        if (event.path === '/.netlify/functions/quotes') {
            return {
                statusCode: 200,
                body: JSON.stringify({ quotes }),  // Return the full array of quotes
            };
        }

        // Handle unknown endpoints
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "Endpoint not found" }),
        };
    }

    // Handle non-GET methods
    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
    };
};
