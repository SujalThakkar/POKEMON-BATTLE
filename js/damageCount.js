function damage_count(){

    
    if (player.index === 1) {
         if(selection ==="charlizard"){
            if(mousePressedOver(firespin)
            ||mousePressedOver(flamethrower)){
                life2-=Math.round(random(20,70));
            console.log(life2)
            //player.update();
            player.life= life2   ;
                database.ref('players/player2').update({
                    life:player.life
                })
            }
        }

        if(selection ==="pikachu"){
            if(mousePressedOver(thunderbolt)
            ||mousePressedOver(quickattack)){
                life2-=Math.round(random(20,70));
            console.log(life2)
            //player.update();
            player.life= life2   ;
                database.ref('players/player2').update({
                    life:player.life
                })
            }
        }

        if(selection ==="venasaur"){
            if(mousePressedOver(vinewhip)
            ||mousePressedOver(razorleaf)){
                life2-=Math.round(random(20,70));
            console.log(life2)
            //player.update();
            player.life= life2   ;
                database.ref('players/player2').update({
                    life:player.life
                })
            }
        }
        if(selection ==="blastois"){
            if(mousePressedOver(watergun)
            ||mousePressedOver(hydropump)){
                life2-=Math.round(random(20,70));
            console.log(life2)
            //player.update();
            player.life= life2   ;
                database.ref('players/player2').update({
                    life:player.life
                })
            }
        }
        if(selection ==="snorlax"){
            if(mousePressedOver(hyperbeam)
            ||mousePressedOver(surf)){
            life2-=Math.round(random(20,50));
            console.log(life2)
            //player.update();
            player.life= life2   ;
                database.ref('players/player2').update({
                    life:player.life
                })
            }
        }
    }
  
    else if(player.index === 2){
        if(selection2 ==="pikachu"){
            if(mousePressedOver(thunderbolt)
            ||mousePressedOver(quickattack)){
                life1-=Math.round(random(20,70));
            console.log(life1)
            player.life= life1   ;
                database.ref('players/player1').update({
                    life:player.life
                })
            }    
        } 
        
        if(selection2 ==="charlizard"){
            if(mousePressedOver(firespin)
            ||mousePressedOver(flamethrower)){
                life1-=Math.round(random(20,70));
            console.log(life1)
            //player.update();
            player.life= life1   ;
                database.ref('players/player1').update({
                    life:player.life
                })
            }
        }

        if(selection2 ==="venasaur"){
            if(mousePressedOver(vinewhip)
            ||mousePressedOver(razorleaf)){
                life1-=Math.round(random(20,70));
            console.log(life1)
            //player.update();
            player.life= life1   ;
                database.ref('players/player1').update({
                    life:player.life
                })
            }
        }
        if(selection2 ==="blastois"){
            if(mousePressedOver(watergun)
            ||mousePressedOver(hydropump)){
                life1-=Math.round(random(20,70));
            console.log(life1)
            //player.update();
            player.life= life1   ;
                database.ref('players/player1').update({
                    life:player.life
                })
            }
        }
        if(selection2 ==="snorlax"){
            if(mousePressedOver(hyperbeam)
            ||mousePressedOver(surf)){
            life1-=Math.round(random(20,50));
            console.log(life1)
            //player.update();
            player.life= life1   ;
                database.ref('players/player1').update({
                    life:player.life
                })
            }
        }
    }
}