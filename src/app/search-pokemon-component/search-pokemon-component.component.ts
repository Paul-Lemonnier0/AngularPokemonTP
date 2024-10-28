import { Component, OnInit } from '@angular/core'
import { Pokemon, PokemonDetailled } from '../pokemon'
import { PokemonServiceService } from '../pokemon-service.service'
import { PokemonIDService } from '../pokemon-id.service'

@Component({
  selector: 'app-search-pokemon-component',
  templateUrl: './search-pokemon-component.component.html',
  styleUrls: ['./search-pokemon-component.component.css'],
})
export class SearchPokemonComponentComponent implements OnInit {
  id: string = ''
  pokemonList: Pokemon[] = []
  selectedPokemon: PokemonDetailled | null = null  // Nom du Pokémon sélectionné

  private _selectedPokemonID: string | null = null

  constructor(private pokemonService: PokemonServiceService, private pokemonIDService: PokemonIDService){}

  // Setter pour `selectedPokemonID`
  set selectedPokemonID(value: string | null) {
    this._selectedPokemonID = value
  }

  selectPokemonID(value: string) {
    this.pokemonIDService.setSelectedPokemonID(value ?? "")
  }

  get selectedPokemonID(): string | null {
    return this._selectedPokemonID
  }

  async ngOnInit(): Promise<void> {
    this.pokemonService.pokemonList.subscribe(list => {
      this.pokemonList = list
    })
  }

  getPokemonByID(id: string): Pokemon | undefined {
    return this.pokemonList.find(pok => pok.id === id)
  }

  validation(): void {
    alert('Validé !')
  }
}
