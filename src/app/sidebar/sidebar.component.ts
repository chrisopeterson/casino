import { Component, OnInit, Input } from '@angular/core';
import { Bet } from '../models/bet'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() bets: Bet[]

  constructor() { }

  ngOnInit() {
  }

}
