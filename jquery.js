//click on start reset button
    //check if we are playing
        //yes
            //reload the page
        //no
            //show trials left
            //change button text to "rest game"
            //1.create random fruit
            //define random step for the new fruit
            //2.move the fruit down every 30sec
                //check if fruit too low 
                    //no-->repeat nuber 2
                    //yes-->any trials left
                       //yes:repeat number 1
                        //no:show gameover and score ,button text change to "start game"
//slice a fruit
    //play sound
    //add one to score
    //explode fruit
    //produce next fruit    

var playing =false;
var score; //should be zero at the start of the game
var trialsleft; //number of lifes left at the start
var fruits =["apple","banana","coconut","mango","orange","pear","pineapple","watermelon"];//array of all possible fruits.will be used to generate fruits.
var step;
var action; //used for the setinterval function
$(function(){
    
    $("#startreset").click(function(){
        
        if(playing == true){
            location.reload();
        }
        
        
        else{
           playing = true;                    //game started
            score = 0;                       //set score to zero
            $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsleft=3;
            addhearts();
            //hide gameover box
            $("#gameover").hide();
            $("#startreset").html("Reset Game");
            
            startaction();
            
        }
        
    });
    
    
    
    



$("#fruit1").mouseover(function(){
    
    score++;
    $("#scorevalue").html(score);
//    document.getElementById("slicesound").play();//play sound
     $("#slicesound")[0].play(); // or we can us
    
    //stop the fruit moving
     clearInterval(action);
    
    //hide the fruit
    $("#fruit1").hide("explode",300);
//    
//    //send new fruit
    setTimeout(startaction,500);
});






//function defeitions 



function addhearts(){
    
    $("#trialsleft").empty();
    
    for(var i = 0 ; i < trialsleft; i++){
                
               $("#trialsleft").append(" <img class='life' src='images/heart.png'> "); 
            }
    
    
}



function startaction(){
    
    $("#fruit1").show();
    
    choosefruit();  //chose a random fruit  
    
    $("#fruit1").css({'left':Math.round(Math.random()*550) ,"top":-50}); //random position
    
    step = Math.round(Math.random()*5)+1;//generate random step
    
    action = setInterval(function(){
        
        $("#fruit1").css("top",$("#fruit1").position().top+step);
        
        //check if fruit is too low 
        if($("#fruit1").position().top >$("#fruitcontainer").height() ){
            //check if there are lifes left
            if(trialsleft > 1){
               $("#fruit1").show();
    
    choosefruit();  //chose a random fruit  
    
    $("#fruit1").css({'left':Math.round(Math.random()*550) ,"top":-50}); //random position
    
    step = Math.round(Math.random()*5)+1;//generate random step
                //reduce trials by one
                trialsleft--;
                
                addhearts();//populate trialsleft box
                
                
               }
            else{//game over
                playing = false;//we are not playing anymore
                $("#startreset").html("Start Game");
                $("#gameover").show();
                $("#gameover").html("<p>game over!</p> <p>your score is:" + score +"</p>");
                $("#trialsleft").hide();
                stopaction();
                
                
                
            }
        };
        
    },10);
    
}

function choosefruit(){
        
    $("#fruit1").attr("src","images/"+ fruits[Math.round(Math.random()*7)] + ".png");
    
}

//stop dropping fruits
function stopaction(){
    clearInterval(action);
    $("#fuit1").hide();
}




    });
