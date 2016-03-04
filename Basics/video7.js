function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life +=1;
        console.log(this.name + " gave 1 life to " +targetPlayer.name);
    }
}

var mali = new User();
var krish = new User();

mali.name = "Milind";
krish.name = "Krishanu";

mali.giveLife(krish);

console.log("Milind : " +mali.life);
console.log("Krishanu : " +krish.life);

User.prototype.upperCut = function upperCut(targetPlayer){
    targetPlayer.life -= 10;
    console.log(this.name +" just uppercutted "+ targetPlayer.name);
};

mali.upperCut(krish);
console.log("Milind : " +mali.life);
console.log("Krishanu : " +krish.life);

var harsh = new User();
harsh.name = "Harshal";

krish.upperCut(harsh);

console.log("Milind : " +mali.life);
console.log("Krishanu : " +krish.life);
console.log("Harshal : " +harsh.life);