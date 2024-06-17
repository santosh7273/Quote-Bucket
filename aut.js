const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote-btn');
const search = document.getElementById('inp');
const searchbtn = document.getElementById('rrr');
const categoryLinks = document.querySelectorAll('.li1 button');

function fetchQuote() {
    const pp = document.getElementById('inp').value;
    if (pp === "") {
        alert("Enter author name");
        quoteElement.textContent = "Please enter a keyword or category";
        authorElement.textContent = "";
    } else {
        quoteElement.textContent = "Loading...";
        fetch(`https://api.quotable.io/random?author=${pp}`)
            .then(response => response.json())
            .then(data => {
                if (data.content && data.author) {
                    quoteElement.textContent = `"${data.content}"`;
                    authorElement.textContent = `- ${data.author}`;
                } else {
                    quoteElement.textContent = 'No quotes found for this author.';
                    authorElement.textContent = '';
                }
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
                authorElement.textContent = '';
            });
    }
}

newQuoteButton.addEventListener('click', fetchQuote);

function dig() {
    if (authorElement.innerHTML === "") {
        alert("Please enter a category");
    } else {
        window.open("https://twitter.com/intent/tweet?text=" + quoteElement.innerHTML, "Tweet Window", "width=600,height=300");
    }
}

categoryLinks.forEach(link => {
    link.addEventListener('click', handleCategoryClick);
});

newQuoteButton.addEventListener('click', fetchQuote);
searchbtn.addEventListener('click', fetchQuote);

function handleCategoryClick(event) {
    event.preventDefault();
    const category = event.target.getAttribute('data-author');
    if (category) {
        search.value = category;
    }
}