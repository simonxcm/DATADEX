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

  constructor(private service: PokedexService){}

  ngOnInit(): void {
  }
  title = 'Datadex';
}
