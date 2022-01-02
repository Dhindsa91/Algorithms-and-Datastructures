const s = require('./Scoreboard.js');


describe("Bowling Scoreboard Test Suite",()=>{
    it("Given three strikes in a row, the score should equal 50", () => {
        const score = new s.Scoreboard(10);
        console.log(score.game);
        score.roll(10);
        score.roll(10);
        score.roll(10);

        expect(score.calculateScore()).toBe(50);
        expect(score.currentFrame).toBe(3);
    })




})