class Scoreboard {
    game: Frame[];
    currentFrame = 0;

    constructor(max){
        this.game = new Array(max);
        for (let index = 0; index < this.game.length; index++) {
            this.game[index] = new Frame();
            
        }
    }

    roll(pins: number){
        let current = this.game[this.currentFrame];
        console.log("CURRENT", current)
        if(this.currentFrame === 0){
            if(!current.roll1){
                current.roll1 = pins;
                if(pins === 10) {
                    current.spare = true;
                    this.currentFrame++;
                    current.roll2 = 0;
                }
            } else {
                current.roll2 = pins;
                if(current.roll2 + current.roll1 === 10) {
                    current.spare = true;
                }
                this.currentFrame++;
            }
        } else {
            let prev = this.game[this.currentFrame - 1];
            if(!current.roll1){
                current.roll1 = pins;
                if(prev.spare) prev.bonus += pins;
                if(pins === 10) {
                    current.spare = true;
                    this.currentFrame++;
                    current.roll2 = 0;
                } 
            } else {
                current.roll2 = pins;
                if(prev.spare) prev.bonus += pins;
                if(current.roll2 + current.roll1 === 10) {
                    current.spare = true;
                }
                this.currentFrame++;
            }
        }
    }

    calculateScore(): number {  
        let sum = 0;
        for(let i = 0; i < this.currentFrame; i++){
            sum += this.game[i].roll1 + this.game[i].roll2 + this.game[i].bonus;
        }
        return sum;
    }
}

class Frame {
    roll1: number = null;
    roll2: number = null;
    bonus: number = 0;
    spare: boolean = false;
}

const gb = new Scoreboard(10);

gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);
gb.roll(10);

console.log("SCORE", gb.calculateScore())

console.log(gb.game);
console.log(gb.currentFrame);