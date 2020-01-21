/* Your code goes here */
function Fighter(fighter){
    

    this.getName = function(){
            return fighter.name;
    }
    this.getDamage = function(){
        return fighter.damage;
    }
    this.getHealth = function(){
        return fighter.hp;
    }
    this.getStrength = function(){
        return fighter.strength;
    }
    this.getAgility = function(){
        return fighter.agility;
    }
    this.setHealth = function(health){
        fighter.hp = health;
        
    }
    this.win = 0;
    this.loss = 0;
   

        this.attack = function(defender){
            let attackProbability = 100 - (defender.getStrength() + defender.getAgility());
            let rand = parseInt(Math.random() * 100);
            if(attackProbability > rand){
            let health = defender.getHealth() - fighter.damage;
            defender.setHealth(health);
            console.log(`${this.getName()} makes ${fighter.damage} to 
            ${defender.getName()}`);
        } else{
            console.log(`${this.getName()} attack missed`);
        }
        }

       this.logCombatHistory = function() {
            return `Name: ${name}, Wins: ${this.win}, Losses: ${this.loss}`;
          }

        this.heal = function(hpPoints){
            this.hp = this.hp + hpPoints;
            if(this.hp > 100){
                this.hp = 100;
            } 
        }

        this.dealDamage = function(hpPoints){
                this.hp = this.hp - hpPoints;
                if(this.hp < 0){
                    this.hp = 0;
                }
                return this.hp;
        }

        this.addWin = function(){
            this.win++;
        }

         this.addLoss = function(){
            this.loss++;
        }

}
      function battle(fighter1, fighter2){
            if(fighter1.getHealth() === 0){
                console.log(`${fighter1.getHealth()} is dead and can't fight`);

            }
            if(fighter2.getHealth() === 0){
                console.log(`${fighter2.getHealth()} is dead and can't fight`);
            }

            while(fighter1.getHealth() > 0 || fighter2.getHealth() > 0){
                fighter1.attack(fighter2);
                fighter2.attack(fighter1);
            }
            if(fighter1.getHealth() === 0){
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss(); 
        } else if(fighter2.getHealth() === 0){
            console.log(`${fighter2.getName()} has won`);
        }
    }

    
 let myFighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength:
    30, agility: 25}); // returns an object with methods

let myFighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength:
    50, agility: 5}); // returns an object with methods}) 



console.log(battle(myFighter1, myFighter2));
