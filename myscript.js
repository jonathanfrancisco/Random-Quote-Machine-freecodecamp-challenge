

var patama = ["Ang totoong kaibigan ay yung tatarantaduhin ka nang harapan at pupurihin ka habang naka-talikod","ANA KADI?", "AWAN MET AMOK NGA QUOTE HAHAHA", "PAK GANERN!", "CGE ICLICK MO PAY TA PAK GANERN"];


console.log(patama[0]);



$(".pagpindotan").click(function(){

        var random = Math.floor(Math.random()*patama.length);


       
            

                $(".pakshet").fadeOut("slow", function(){

  $(".pakshet").text(patama[random]).fadeIn("slow")    ;



});












});