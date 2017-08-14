
//variables

//global vars 

var wins ="";
var losses = "";
var idkyet = "";
var counter = 0;


$(document).ready(function () {
  //begin script

  //create var ran, random number generated 1 to 123
	var ranNum = Math.floor(Math.random()*123) + 1
	//testing alert(ran);

 	$(".answer").html(ranNum);
 	// appends ran data to the answer div class to display it


//buttons when clicked will equal a random number to 123
//you want the buttons to equal the generated number
 	var button1 = Math.floor(Math.random()*123) + 1
 	var button2 = Math.floor(Math.random()*123) + 1
 	var button3 = Math.floor(Math.random()*123) + 1
 	var button4 = Math.floor(Math.random()*123) + 1

 //click functions for the buttons



function win() {

	alert("You win!");
	wins ++;
	$("#wins").text(wins);
	//reset
	
}

function lose() {

	alert("You lose!");
	losses ++;
	$("#losses").text(losses);
	//reset


$(".wins").html(wins);
$(".losses").html(losses);

//$(".button1").on("click", function())
//{
	//when this is clicked, it will generate rannumber then compare to see if it is === ranNum
/* the buttosns should add a total together (counter) and this should append to the page) if the counter is abouver ranNum the game breaks and restarts */


$('.button1').on ('click', function(){
    counter = counter + button1;
    
    $('.guess').text(counter); 
          
        if (counter == ranNum){
          win();
        }
        else if (counter > ran){
          lose();
        }   
  });  

$('.button2').on ('click', function(){
    counter = counter + button1;
    
    $('.guess').text(counter); 
          
        if (counter == ranNum){
          win();
        }
        else if (counter > ran){
          lose();
        }   
  });


$('.button3').on ('click', function(){
    counter = counter + button1;
    
    $('.guess').text(counter); 
          
        if (counter == ranNum){
          win();
        }
        else if (counter > ran){
          lose();
        }   
  });

$('.button4').on ('click', function(){
    counter = counter + button1;
    
    $('.guess').text(counter); 
          
        if (counter == ranNum){
          win();
        }
        else if (counter > ran){
          lose();
        }   
  });

}








	
});
