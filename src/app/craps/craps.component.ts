import { Component, OnInit } from '@angular/core';
import { Bet, PassLineBet, DontPassLineBet } from '../models/bet'
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

  rollDiceClick() : void {

    this.diceA.roll();
    this.diceB.roll();
    let roll = this.diceA.number + this.diceB.number;

    // first version of logic.
    // most of this should be pushed down to other components I think
    if(this.point === 0) {
      if(this.crapDice.includes(roll)) {
        this.payBets("Dont Pass");
        this.removeBets("Pass Line");
        return;
      }

      if(this.passLineDice.includes(roll)) {
        this.payBets("Pass Line");
        this.removeBets("Dont Pass");
        return;
      }

      // set the point
      this.point = roll;
    }
    else { // Has point

        // 7 out - clear all bets
      if(roll === 7) {
        this.payBets("Dont Pass");
        this.removeBets("Pass Line");
        this.point = 0;
      }

      if(roll === this.point) {
        this.payBets("Pass Line");
        this.removeBets("Dont Pass");
        this.point = 0;
      }
    }
  }


  currentBet() : number {
    if(this.bets.length == 0) 
      return 0;

    return this.bets[0].amount;
  }

  payBets(betType: string) : void {
    let total = 0;

    for(var x = 0; x < this.bets.length; x++) {
      if(this.bets[x].name === betType)
        total += this.bets[x].pay();
    }
    
    this.bank += total;
  }

  removeBets(betType: string) : void {
    for(var x = 0; x < this.bets.length; x++) {
      if(this.bets[x].name === betType)
        this.bets.splice(x, 1);
    }
  }
}
