// Soldier
class Soldier {
  constructor(health,  strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength 
  }

  receiveDamage(damage){
    this.health -= damage

  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }
  attack(){
    return this.strength 
  }

  battleCry(){
    return "Odin Owns You All!"
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return (`${this.name} has received ${damage} points of damage`) 
    }else{ return `${this.name} has died in act of combat`
    }
  }
}

// Saxon
class Saxon extends Soldier{
  constructor (health, strength){
  super(health, strength)
  }
  attack(){
    return this.strength 
  }

 receiveDamage(damage){
   this.health -= damage
   if (this.health > 0) return `A Saxon has received ${damage} points of damage`
   return `A Saxon has died in combat`
 }
  
}

// War
class War {
 constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];

 } 
 addViking(viking){

 this.vikingArmy.push(viking)

 }

 addSaxon(saxon){

 this.saxonArmy.push(saxon)

 }

 vikingAttack(){
  const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  const randomSaxonIndex= Math.floor(Math.random() * this.saxonArmy.length)
  let message = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].attack())  

  if(this.saxonArmy[randomSaxonIndex].health <= 0){
    this.saxonArmy.splice(randomSaxonIndex,1)
  }

  return message
 
 }

 saxonAttack(){
  const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  const randomSaxonIndex= Math.floor(Math.random() * this.saxonArmy.length)
 
  let message = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].attack())

   if (this.vikingArmy[randomVikingIndex].health <= 0 ){
     this.vikingArmy.splice(randomVikingIndex,1)
}
return message
 }


 showStatus(){
   
    //  switch(text){
    //  case this.saxonArmy = [ ]:
    //  text =  "Vikings have won the war of the century!";
    //  break;
    //  case this.vikingArmy = [ ]:
    //  text =  "Saxons have fought for their lives and survive another day...";
    // break;
    //  case this.saxonArmy.length > 1:
    //  case this.vikingArmy.length > 1:
    //  text =  "Vikings and Saxons are still in the thick of battle." ;
    //  break;
    // }


    if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!";
    else if (this.vikingArmy .length == 0) return "Saxons have fought for their lives and survive another day...";
    else return "Vikings and Saxons are still in the thick of battle." ;

}
}

