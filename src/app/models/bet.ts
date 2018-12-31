export class Bet {
    name: string;
    amount: number;
    canBeTakenDown: boolean;
    singleRoll: boolean;
    lost: boolean = false;
    payout: number = 0;

    constructor(amount: number) {
        this.amount = amount;
    }

    resolveRoll(diceA : number, diceB: number, point: number) : void {
        // silence is golden
    }
}

//
// Bet definitions
//
export class PassLineBet extends Bet {
    constructor(amount: number) {
        super(amount);

        this.canBeTakenDown = false;
        this.name = "Pass Line";
    }

    resolveRoll(diceA : number, diceB: number, point: number) : void {
        let roll = diceA + diceB;

        if(point > 0) {
            if(roll === 7) {
                this.lost = true;
            }
            else if(roll === point) {
                this.payout = this.amount * 1;
            }
        }
        else {
            if(roll === 7 || roll === 11) {
                this.payout = this.amount * 1;
            }
            else if(roll === 2 || roll === 3 || roll === 12) {
                this.lost = true;
            }
        } 
    }
}

export class DontPassLineBet extends Bet {
    constructor(amount: number) {
        super(amount);
        
        this.canBeTakenDown = false;
        this.name = "Dont Pass";
    }
}

export class FieldBet extends Bet {
    constructor(amount: number) {
        super(amount);

        this.singleRoll = true;
        this.canBeTakenDown = true;
        this.name = "Field";
    }

    resolveRoll(diceA : number, diceB: number, point: number) : void {
        let roll = diceA + diceB;

        if(roll === 2 || roll === 12) {
            this.payout = this.amount * 2;
        }
        else if (roll === 3 || roll === 4 || roll === 9 || roll === 10 || roll === 11) {
            this.payout = this.amount * 1
        }
        else {
            this.lost = true;
        }
    }
}