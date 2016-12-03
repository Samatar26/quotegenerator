function changeQuote(){$(document).ready(function(){
$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function (response){
  if (response.quoteAuthor === ""){
    author.textContent="Unknown"
  }
else{
  author.textContent=response.quoteAuthor;
}  
quoteText.innerText = response.quoteText;


});
});
};
changeQuote();