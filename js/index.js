var xhr = new XMLHttpRequest();
xhr.open("GET", "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", false);
xhr.send(null);

console.log(xhr.status);

var json = JSON.parse(xhr.responseText);
console.log(json);
var famousQuote=json[0].content;
var author = json[0].title;
var authorHTML=document.getElementById('author');


var quote = document.getElementById('quoteText');
console.log(author);


  quote.innerHTML=famousQuote;
  authorHTML.textContent=author;