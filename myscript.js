

var quotes = ["Ang totoong kaibigan ay yung tatarantaduhin ka nang harapan at pupurihin ka habang naka-talikod",
"ANA KADI?","PAK GANERN!", 
"CGE ICLICK MO PAY TA PAK GANERN",
 "I hate two faced people. It's so hard to decide which face to slap first.", 
 "Hindi lahat ng PATAMA ay tungkol sayo. Meron lang talagang sadyang SINASALO MO!",
 "Lies hurt people; imagination makes life more fun.", 
 "Naniniwala ako sa kasabihan ng ang LOVE ay parang sigarilyo, bat pa naimbento kung sakit naman ang dulot!",
 "When you judge another, you do not define them, you define yourself.","BOOM PANES!",
 "How people treat you is their karma; how you react is yours.",
 "WAG MONG IDADAAN SA PAGPAPATAMA SA FACEBOOK MGA PROBLEMA MO SAKIN PURO KA PARINING ITAG MO KO PARA INTENSE",
 "There are two kinds of people in the world: those who divide everybody into two kinds of people and those who don’t.", "Don't mix between my personaity and my attitude because my personality is ME and my attitude depends on YOU",
 "Whatever you give to life it gives you back. Do not hate anybody. The hatred which comes out from you will someday comeback to you. Love others and Love will comeback to you.",
 "It is during our failures that we discover our true desire for success","Sa panahon ngayon TANGHALI na lng ang tapat.","WAG MONG IDADAAN SA PAGPAPATAMA SA FACEBOOK MGA PROBLEMA MO SAKIN PURO KA PARINIG ITAG MO KO PARA INTENSE",
  "DIBA? PAK GANERN!","DBA? DBA? DBA?", "KALA MO OKAY NA, HINDI PA PALA", "PAK! DBA? PAK NA PAK!","Beauty is an enormous, unmerited gift given randomly, stupidly","A dream all a dream that ends in nothing and leaves the sleeper where he lay down but I wish you to know that you inspired it."];

$(".pagpindotan").click(function(){

        var random = Math.floor(Math.random()*quotes.length);


                $(".pakshet").fadeOut("slow", function(){
       $(".pakshet").text(quotes[random]).fadeIn("slow");
   });


});
