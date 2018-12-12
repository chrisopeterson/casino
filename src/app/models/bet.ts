export class Bet {
    name: string;
    amount: number;
    canBeTakenDown: boolean;
    payout: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    pay() : number {
        return this.amount * this.payout;
    }
}

//
// Bet definitions
//
export class PassLineBet extends Bet {
    constructor(amount: number) {
        super(amount);

        this.payout = 1;
        this.canBeTakenDown = false;
        this.name = "Pass Line";
    }
}