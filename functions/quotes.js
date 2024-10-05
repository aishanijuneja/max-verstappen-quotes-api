<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Max Verstappen Quotes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f5f5f5;
            margin: 0;
            color: black;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header h1 {
            margin: 0;
            font-size: 2em;
            color: #333;
        }

        .header p {
            margin: 5px 0;
            font-size: 1.2em;
            color: #666;
        }

        .quote-box {
            background-color: white;
            color: black;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 400px;
            text-align: center;
            margin-bottom: 20px;
            position: relative;
            font-size: 1.5em;
            font-weight: bold;
        }

        .quote-box p {
            font-size: 1.2em;
            margin: 0;
            padding-right: 50px;
        }

        .refresh-icon {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5em;
            cursor: pointer;
            color: #007BFF;
            transition: transform 0.3s ease;
        }

        .refresh-icon:hover {
            transform: scale(1.2);
        }

        .footer {
            margin-top: 20px;
            font-size: 1.2em;
            color: #333;
        }

        .all-quotes-box {
            background-color: white;
            color: black;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 400px;
            text-align: left;
        }

        .all-quotes-box table {
            width: 100%;
            border-collapse: collapse;
        }

        .all-quotes-box th,
        .all-quotes-box td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .all-quotes-box th {
            background-color: #f0f0f0;
        }

        .footer p {
            font-size: 0.9em;
        }

        .footer span {
            color: #007BFF;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Max Verstappen Quotes</h1>
        <p>A free REST API for random Max Verstappen quotes</p>
    </div>

    <div class="quote-box" id="quoteBox">
        <p id="quoteText">"Click the refresh icon to load a quote!"</p>
        <span id="refreshIcon" class="refresh-icon">🔄</span>
    </div>

    <div class="all-quotes-box" id="allQuotesBox">
        <table>
            <thead>
                <tr>
                    <th>Quotes List</th>
                    <th>Source</th>
                </tr>
            </thead>
            <tbody id="quoteList">
                <!-- All quotes will be dynamically injected here -->
            </tbody>
        </table>
    </div>

    <div class="footer">
        <p>👋 @aishanijuneja</p>
        <span>⭐ #MAX#1/33</span>
    </div>

    <!-- JavaScript to fetch quotes from Lambda function -->
    <script>
        const apiUrl = "https://your-lambda-url.com";  // Replace with your actual Lambda endpoint

        // Function to display a random quote by fetching from Lambda API
        async function displayRandomQuote() {
            try {
                const response = await fetch(`${apiUrl}/random`);
                const data = await response.json();
                document.getElementById('quoteText').innerText = `"${data.quote}"`;
            } catch (error) {
                console.error("Error fetching random quote:", error);
                document.getElementById('quoteText').innerText = "Error loading quote!";
            }
        }

        // Function to display all quotes by fetching from Lambda API
        async function displayAllQuotes() {
            try {
                const response = await fetch(`${apiUrl}/all`);
                const data = await response.json();
                const quoteList = document.getElementById('quoteList');
                quoteList.innerHTML = ''; // Clear previous quotes

                data.quotes.forEach(quote => {
                    const row = document.createElement('tr');
                    
                    const quoteCell = document.createElement('td');
                    quoteCell.innerText = `"${quote}"`;
                    
                    const sourceCell = document.createElement('td');
                    sourceCell.innerText = "Max Verstappen"; // Assuming all quotes are from Max

                    row.appendChild(quoteCell);
                    row.appendChild(sourceCell);
                    quoteList.appendChild(row);
                });
            } catch (error) {
                console.error("Error fetching all quotes:", error);
            }
        }

        // Event listener for refresh icon to show a new random quote
        document.getElementById('refreshIcon').addEventListener('click', displayRandomQuote);

        // Initial load of quotes
        displayAllQuotes(); // Load all quotes on page load
        displayRandomQuote(); // Load a random quote on page load
    </script>

</body>
</html>
