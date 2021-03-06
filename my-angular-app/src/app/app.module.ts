import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
	CardComponent,
    CardListComponent,
    NewCardInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
