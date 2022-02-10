import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexHomepageComponent } from './pokedex-homepage/pokedex-homepage.component';
import { PokemonItemComponent } from './component/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokedexService } from './pokedex.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokedexHomepageComponent,
    PokemonItemComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
