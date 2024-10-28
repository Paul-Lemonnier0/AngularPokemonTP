import { Component, Input } from '@angular/core';
import { Pokemon, PokemonDetailled } from '../pokemon';
import { PokemonIDService } from '../pokemon-id.service';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})

export class PokemonComponentComponent {

  pokemon: PokemonDetailled | null = null
  private _pokemonList: Pokemon[] = []
  private _selectedPokemonID: string = ""

  constructor(private pokemonIDService: PokemonIDService, private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonIDService.selectedPokemonID.subscribe(id => {
      this._selectedPokemonID = id

      this.fetchPokemon()
    })

    this.pokemonService.pokemonList.subscribe(list => {
      this._pokemonList = list
    })
  }

  fetchPokemon(): void {
    const selectedPokemon = this._pokemonList.find(pokemon => pokemon.id == this._selectedPokemonID)

    if(selectedPokemon) {
      this.pokemonService.getSpecificPokemonInfo(selectedPokemon.url).subscribe(pokemonDetailled => {
        this.pokemon = pokemonDetailled
      })
    }

    else this.pokemon = null
  }


  printAbilities(): string {
    if (this.pokemon) {

      const table = document.getElementById("abilitiesTable")
      if(table && this.pokemon) {

        while (table.firstChild) {
          table.removeChild(table.firstChild)
        }

      for (const key in this.pokemon.abilities) {
        if (this.pokemon.abilities.hasOwnProperty(key)) {
          const value = Array.isArray(this.pokemon.abilities[key])
            ? this.pokemon.abilities[key].join(", ")
            : this.pokemon.abilities[key].ability.name

          const row = document.createElement("tr")

          const cell1 = document.createElement("th")
          const cell2 = document.createElement("td")

          cell1.innerHTML = key
          cell2.innerHTML = value

          row.appendChild(cell1)
          row.appendChild(cell2)

          table.appendChild(row)
        }
      }
      }

      return ""
    }

    return ""
  }
}
