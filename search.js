const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const rw = document.getElementById('rrr');
const rw1 = document.getElementById('rrr1');
const searchInput = document.getElementById('inp');
const categoryLinks = document.querySelectorAll('.li1 button');

function dig() {
    if (authorElement.innerHTML === "") {
        alert("Please enter a category");
    } else {
        window.open("https://twitter.com/intent/tweet?text=" + quoteElement.innerHTML, "Tweet Window", "width=600,height=300");
    }
}
function fetchQuote() {
    const cvi1 = searchInput.value.trim();
    if (cvi1 === '') {
        alert("Please enter a keyword or category");
        quoteElement.textContent = "Please enter a keyword or category";
        authorElement.textContent = "";
    } else {
        quoteElement.textContent = "Loading....";
        authorElement.textContent = "";
        fetch(`https://api.api-ninjas.com/v1/quotes?category=${cvi1}`, {
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
                quoteElement.textContent = 'No quotes found for this keyword.';
                authorElement.textContent = '';
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        });
    }
}

function handleCategoryClick(event) {
    event.preventDefault();
    const category = event.target.textContent;
    searchInput.value = category;
}

rw.addEventListener('click', fetchQuote);
rw1.addEventListener('click', fetchQuote);
categoryLinks.forEach(link => {
    link.addEventListener('click', handleCategoryClick);
});