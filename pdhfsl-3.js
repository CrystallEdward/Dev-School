class Warrior{
    lvl;
    exp;
    rnk;
    achieve;
    ranks;
    count;
    constructor() {
        this.lvl = 1;
        this.exp =100;
        this.rnk = "Pushover";
        this.achieve = [];
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this.count=0;

    }
    level_up(){
        if (this.lvl < 100){
            while (this.count >= 100){
                if(this.lvl>=100){
                    this.lvl = 100;
                    this.exp = 10000;
                    this.count =0;
                    this.rnk = "Greatest";
                }
                else{
                    this.lvl+=1;
                    this.count-=100;
                }
            }
        }
        this.rnk=this.rank();
    }
    level(){
        return this.lvl;
    }
    experience(){
        if (this.exp>10000){
            this.exp =10000;
        }
        return this.exp;
    }
    rank(){
        if (this.experience()==10000){
            return "Greatest";
        }
        return this.ranks[Math.trunc(this.level()/10)];
    }
    achievements(){
        return this.achieve
    }
    training(event){
        if (this.lvl>=event[2]){
            this.achieve.push(event[0]);
            this.exp+=event[1];
            this.count+=event[1];
            this.level_up();
            return event[0];
        }
        else{
            return "Not strong enough";
        }

    }
    battle(enemy_level) {
        let diff = this.lvl - enemy_level;
        if (enemy_level<1 || enemy_level>100){
            return "Invalid level";
        }
        if (diff <= -5 && Math.floor(this.lvl/ 10) < Math.floor(enemyLevel / 10)){
            return "You've been defeated";
        }
        else if (diff===0){
            this.exp += 10;
            this.count += 10;
            this.level_up();
            return "A good fight";
        }
        else if(diff===1){
            this.exp+=5;
            this.count += 5;
            this.level_up();
            return "A good fight";
        }
        else if (diff>=2){
            return  "Easy fight";
        }
        else{
            this.exp+=20*diff*diff;
            this.count+=20*diff*diff;
            this.level_up();
            return "An intense fight";
        }
    }
    test(){
        return this.count;
    }
}


