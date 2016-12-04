
function changeQuote(){$(document).ready(function(){
$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function (response){
  
  tweet= response.quoteAuthor;
  
  if (response.quoteAuthor === ""){
    author.textContent="Unknown"
  }
else{
  author.textContent=response.quoteAuthor;
}  
quoteText.textContent = response.quoteText;
  twitter.href="https://twitter.com/intent/tweet?text="+response.quoteText;
});
});
};
changeQuote();