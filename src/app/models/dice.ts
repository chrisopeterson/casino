export class Dice {
    number: number;

    roll() : void {
        // quick function - not necessarily totally random
        this.number = Math.floor(Math.random() * 6) + 1;
    }
}