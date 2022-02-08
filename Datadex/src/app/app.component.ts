import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokedexService} from './pokedex.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[PokedexService]
})
export class AppComponent implements OnInit {
  pokemonName: any;
  url= 'https://pokeapi.co/api/v2/pokemon/{name}'
  constructor(private service: PokedexService){}
  getPokemonName(): void{
    this.service.getData(this.url).subscribe(data=>this.pokemonName=data)
  }


  ngOnInit(): void {
    this.getPokemonName
  }

  title = 'Datadex';
}
