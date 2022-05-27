let score = 0;
cross = true;
document.onkeydown = function (e) {
//    console.log("our key code is : ", e.keyCode)
   if(e.keyCode == 38){
    bot = document.querySelector('.bot');
    bot.classList.add("animatebot");
    setTimeout(() => {
        bot.classList.remove("animatebot");
    }, 700);
   } 
   else if(e.keyCode == 39){
    bot = document.querySelector('.bot');
    botX = parseInt(window.getComputedStyle( bot, null ).getPropertyValue("left"));
    bot.style.left =  botX + 112 + "px";
   } 
   else if(e.keyCode == 37){
    bot = document.querySelector('.bot');
    botX = parseInt(window.getComputedStyle( bot, null ).getPropertyValue("left"));
    bot.style.left =  botX - 112 + "px";
   } 
   else if(e.keyCode == 32 ){
        window.location.reload();
   }
}
setInterval(() => {
    gameover = document.getElementsByClassName('gameover');

    dx = parseInt(window.getComputedStyle( bot, null ).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(bot,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    offsetX = Math.abs( dx - ox );
    offsetY = Math.abs( dy - oy );
    // console.log( offsetX , offsetY )
    
    if( offsetX < 200 && offsetY < 50 ){
        let gameover = document.getElementById('gameover')
        gameover.style.display ="block";
        dino.classList.remove('animatedino');
    }
    else if(offsetX < 100 && cross){
        
       
        score+=1;
         cross = false;
        updatescore(score);
           
        setTimeout(() => {
             cross = true;
        }, 1000);
        
    }
}, 100);

function updatescore(score) {
    scorecontainer.innerHTML =" Your Score : "+ score ;
}