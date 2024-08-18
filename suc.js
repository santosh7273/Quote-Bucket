const authorElement = document.getElementById('author1');
const quoteElement = document.getElementById('quote1');
function dig() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteElement.textContent),
        "Tweet Window",
        "width=600,height=300"
    );
}
adh();
function adh() {
    quoteElement.textContent = "Loading....";
    authorElement.textContent = "";

    fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        headers: {
            'X-Api-Key': '3BUrrmc/1eGwq65G93Q75A==aITCDmsB1MX8srLw'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const quoteData = data[0];
            quoteElement.textContent = `"${quoteData.quote}"`;
            authorElement.textContent = `- ${quoteData.author}`;
        } else {
            quoteElement.textContent = 'No quotes found.';
            authorElement.textContent = '';
        }
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        authorElement.textContent = '';
    });
}
