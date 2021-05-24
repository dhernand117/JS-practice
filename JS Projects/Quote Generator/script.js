const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

let apiQuotes = [];

function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoadingSpinner () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
//*Show new quote
function newQuote(){
    showLoadingSpinner();
    //*Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    //*Check if author file is blank and replace with unknown
    if(!quote.author) {
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author;
    }
    //*Check quote lenght to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //*Set Quote, Hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

//*Getting quotes from API
async function getQuotes(){
    showLoadingSpinner();
    const apiURL = "https://type.fit/api/quotes";
    try{
const response = await fetch(apiURL);
apiQuotes= await response.json();
newQuote();
    }catch(e){
      //*Catch error here
      alert(error);
    }
}

//*To tweet a Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//*Event listeners for bttns
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//*On load
getQuotes()
