var hugotWords = ["Dapat ba akong matuwa dahil magkaibigan tayo? or dapat ba kong malungkot dahil hanggang dun lang tayo?",
 "Ang love ay parang Clash of Clans lang yan pag hindi ka active, may ibang aatake!",
  "Plastik. Minsan Gamit. Minsan Ikaw.",
  "Ano ba talaga? Hindi ako yoyo na pag gusto mong ibitaw gagawin mo tapos pag nahila na bibitawan mo ulit. Pinapaikot mo lang ako!", 
  "Yung piniga piga mo yung toothpaste tapos mahuhulog lang sa lababo. Tangina pati ba naman toothpaste sa iba na-fall!", 
  "Wag magmadali para hindi magkamali, sabi nga nila, the best things in life comes to those who wait patiently.", 
  "Kung sino ang dahilan ng saya mo... Pustahan tayo, siya din ang dahilan ng matinding pag-iyak mo.",
  "Makakapili ka ng lugar na uupuan mo, pero hindi mo mapipili ang taong uupo sa tabi mo...Ganyan ang senaryo sa Jeep. Ganyan din ang pag-ibig lalong di mo kontrolado kung kailan sya bababa.", "Masakit isipin na yong taong mahal mo may ibang nagpapasaya",
  "Kapag may pinagdadaanan ka, daanan mo lang at huwag mong tambayan inamo!",
  "Dati hinahabol kita kahit hindi mo ako pinapansin. Pero ngayong nagbago na ang lahat. Bigla kang nagtanong, 'Parang nag iba ka na?' Napatawa ako sabay sabing, 'Hindi naman ako nag iba', Natauhan lang.",
  "Wag mong ipagsiksikan ang sarili mo sa tanong ayaw sayo. inamo",
  "Ang sakit malaman na ang taong mahal mo , kaibigan lang ang turing sayo",
  "Andami kong alam marunong nakong gumawa ng website katulad neto kung saan ka ngayon nangangalkal ng mga hugot, pero d ko parin magawa na mahalin ka? HAHAHAHAHA inamo",
  "Hindi lahat ng sweet ay loyal sa'yo. Tandaan sweet nga ang candy, pero nakabalot naman sa plastic",
  "Malabo na talaga ang mata ko. Pwede ba humingi sa iyo ng kahit konting pagtingin?",
  "Sana Cardiologist ka na lang, para ikaw ang mag-aalaga ng puso ko!",
  "Hindi ko alam ang katapusan ng universe, pero alam ko ang simula: U N I."
  ];






function init() {
	generateClassicQuotes();
}


function generateRandomColor() {

	var R = Math.floor(Math.random()*255)+1;
	var G = Math.floor(Math.random()*255)+1;
	var B = Math.floor(Math.random()*255)+1;
	var rgb = "rgb("+R+", "+G+", "+B+")";
	var image ="//source.unsplash.com/random";
	$("body").css("backgroundImage","url('"+image+"')");
  $("body").css("backgroundSize","cover");
	$("#quote-container").css("color", rgb);
  $("button").css("backgroundColor",rgb);
  $("button").css("color","white");

}


function generateClassicQuotes() { // // gets random quote in formastic API

      $.getJSON("//api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
        displayQuote(data);
  });

}


function generateHugotWords () { 

	var randomNumber = Math.floor(Math.random()*hugotWords.length);

  displayQuote(hugotWords[randomNumber]);



}


function displayQuote(quote) { // displays quote

  $("#quote").fadeOut("slow", function(){

      


     if(isHugot) {

        $(this).text(quote).fadeIn("slow");
        $("#author").text("- JO").fadeIn("slow");
       
      }


      else {

       $(this).text(quote.quoteText).fadeIn("slow");
       $("#author").text("- "+quote.quoteAuthor).fadeIn("slow");
       
      }
      generateRandomColor();


   });

}


init();

var isHugot;
var classicQuoteButton = document.getElementById("classicQuote");
var hugotWordsButton = document.getElementById("hugotWords");
var tweetButton = document.getElementById("tweet");

$(classicQuoteButton).on("click", function() { // Generates random classic quote on click
	isHugot = false;
	generateClassicQuotes();

});


$(hugotWordsButton).on("click", function() {  // Generates random anime quote on click
  isHugot = true;
	generateHugotWords();

});

$(tweetButton).on("click", function(){ // Opens a new window on twitter and inserts quote

  window.open("//twitter.com/intent/tweet?text="+$("#quote").text()+"                          "+$("#author").text());

});



