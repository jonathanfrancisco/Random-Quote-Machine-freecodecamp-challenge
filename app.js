
// self invoke function
// initializes quote.



(function(){
  getQuote();
})();


// fetch a quote from an API and display
function getQuote() {

  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response) {

  var quote = '<span class="big-ass-double-quotes">"</span>'
  				    +response.quoteText
  					   +'<span class="big-ass-double-quotes">"</span> <p> -'+response.quoteAuthor+'</p>';

  $('.twitter-share-button').attr('href','https://twitter.com/intent/tweet?text='+response.quoteText+"  -"+response.quoteAuthor);
  $('.quote').hide();
  $('.quote').html(quote).fadeIn(1000);

  changeColor();

  });

}

// change background color
function changeColor() {

  var RGB = "rgb("+Math.floor((Math.random()*255)+1)+", "+Math.floor((Math.random()*255)+1)+", "+Math.floor((Math.random()*255)+1)+")";

  $('body').css('background-color',RGB);

}

// keyboard event listener 
// listens for 'spacebar' key
$(document).keypress(function(event) {
  // '32' is equivalent to 'space' in keyboard
  if(event.which == 32) {
    getQuote();
  }
});
