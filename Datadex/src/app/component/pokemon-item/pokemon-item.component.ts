import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { Pokemon } from '../pokemon-list/pokemon-list.component';



@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})

export class PokemonItemComponent implements OnInit {

  @Input() pokemon: any | undefined ;

  constructor(private pokedexService : PokedexService) {
    //this.fetchAllPokemons();
  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }
}
