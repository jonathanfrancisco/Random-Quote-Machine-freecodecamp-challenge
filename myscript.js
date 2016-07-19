

var patama = ["Ang totoong kaibigan ay yung tatarantaduhin ka nang harapan at pupurihin ka habang naka-talikod","ANA KADI?","PAK GANERN!", "CGE ICLICK MO PAY TA PAK GANERN",
 " I hate two faced people. It's so hard to decide which face to slap first.", 
 "Hindi lahat ng PATAMA ay tungkol sayo. Meron lang talagang sadyang SINASALO MO!", "Lies hurt people; imagination makes life more fun.", 
 "Naniniwala ako sa kasabihan ng ang LOVE ay parang sigarilyo, bat pa naimbento kung sakit naman ang dulot!","When you judge another, you do not define them, you define yourself.","How people treat you is their karma; how you react is yours.", "There are two kinds of people in the world: those who divide everybody into two kinds of people and those who don’t."];


console.log(patama[0]);



$(".pagpindotan").click(function(){

        var random = Math.floor(Math.random()*patama.length);


       
            

                $(".pakshet").fadeOut("slow", function(){

  $(".pakshet").text(patama[random]).fadeIn("slow")    ;



});












});