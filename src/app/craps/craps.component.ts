import { Component, OnInit } from '@angular/core';
import { Bet, PassLineBet, DontPassLineBet, FieldBet } from '../models/bet'
import { Dice } from '../models/dice'

@Component({
  selector: 'app-craps',
  templateUrl: './craps.component.html',
  styleUrls: ['./craps.component.css']
})
export class CrapsComponent implements OnInit {

  constructor() { 
    this.diceA = new Dice();
    this.diceB = new Dice();
  }

  ngOnInit() {
  }

  // members
  point: number = 0;
  bets: Bet[] = [];
  diceA: Dice;
  diceB: Dice;
  bank: number = 100;
  notifications: string[] = [];

  // constants
  readonly crapDice: number[] = [
    2,3,12
  ];
  readonly passLineDice: number[] = [
    7,11
  ];
  readonly pointNumbers: number[] = [
    4,5,6,8,9,10
  ];

  // events
  passLineClick() : void {
    this.bank -= 5;
    this.bets.push(new PassLineBet(5));
  }

  dontPassLineClick() : void {
    this.bank -= 5;
    this.bets.push(new DontPassLineBet(5));
  }

  fieldBetClick() : void {
    this.bank -= 5;
    this.bets.push(new FieldBet(5));
  }

  rollDiceClick() : void {

    this.diceA.roll();
    this.diceB.roll();
    let roll = this.diceA.number + this.diceB.number;
    
    this.resolveBets();

    // Set or take down the point
    if(this.point > 0 && (roll === this.point || roll === 7)) {
      this.point = 0
    }
    else if (this.point === 0 && this.pointNumbers.includes(roll)) {
      this.point = roll;
    }
  }

  resolveBets() : void {

    for(var x = 0; x < this.bets.length; x++) {
      this.bets[x].resolveRoll(this.diceA.number, this.diceB.number, this.point);
      
      // Add payout to bank, if any, and zero it out
      this.bank += this.bets[x].payout;
      this.bets[x].payout = 0;

      // remove bet if it lost this round or is single
      if(this.bets[x].lost || this.bets[x].singleRoll)
        this.bets.splice(x,1);
    }
    
  }

  currentBet() : number {
    if(this.bets.length == 0) 
      return 0;

    return this.bets[0].amount;
  }
}
