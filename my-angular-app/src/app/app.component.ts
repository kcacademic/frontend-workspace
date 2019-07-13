import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards: Array<any> = [];
  
  addCard(card: Card) {
	this.cards.push({text: card.text});
  }
  
  constructor(public cardService: CardService) {
    
  }
  
  ngOnInit() {  
	this.cardService.get().subscribe( 
	  (data: {}) => {
        console.log(data);
        this.cards = data;
      }
	);
  }
}
