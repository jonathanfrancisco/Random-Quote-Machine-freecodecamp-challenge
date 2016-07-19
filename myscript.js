

var patama = ["Ang totoong kaibigan ay yung tatarantaduhin ka nang harapan at pupurihin ka habang naka-talikod",
"ANA KADI?","PAK GANERN!", 
"CGE ICLICK MO PAY TA PAK GANERN",
 "I hate two faced people. It's so hard to decide which face to slap first.", 
 "Hindi lahat ng PATAMA ay tungkol sayo. Meron lang talagang sadyang SINASALO MO!",
 "Lies hurt people; imagination makes life more fun.", 
 "Naniniwala ako sa kasabihan ng ang LOVE ay parang sigarilyo, bat pa naimbento kung sakit naman ang dulot!",
 "When you judge another, you do not define them, you define yourself.",
 "How people treat you is their karma; how you react is yours.",
 "Whatever you give to life it gives you back. Do not hate anybody. The hatred which comes out from you will someday comeback to you. Love others and Love will comeback to you.", 
 "There are two kinds of people in the world: those who divide everybody into two kinds of people and those who don’t.", "Don't mix between my personaity and my attitude because my personality is ME and my attitude depends on YOU",
 "Whatever you give to life it gives you back. Do not hate anybody. The hatred which comes out from you will someday comeback to you. Love others and Love will comeback to you.",
 "It is during our failures that we discover our true desire for success"];


console.log(patama[0]);



$(".pagpindotan").click(function(){

        var random = Math.floor(Math.random()*patama.length);


       
            

                $(".pakshet").fadeOut("slow", function(){

  $(".pakshet").text(patama[random]).fadeIn("slow")    ;



});












});