import { Injectable } from '@angular/core'
import { Pokemon, PokemonDetailled } from './pokemon'
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private _pokemonList$: Observable<Pokemon[]> = of([])

  constructor(private http: HttpClient) {
    this.getPokemonList()
  }

  get pokemonList() : Observable<Pokemon[]> {
    return this._pokemonList$
  }

  getPokemonList(): void {
    this._pokemonList$ = this.http.get<any>("https://pokeapi.co/api/v2/pokemon?offset=200&limit=200").pipe(
      map(data =>
        data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url
        }))),
      catchError(error => {
        console.error('Erreur lors de la récupération des Pokémon :', error)
        return []
      })
    )
  }


  getSpecificPokemonInfo(pokemonInfoUrl: string): Observable<PokemonDetailled | null> {
    return this.http.get<any>(pokemonInfoUrl).pipe(
      map(data => {
        const { id, name, url, height, weight, abilities } = data

        const pokemon: PokemonDetailled = {
          id,
          name,
          url,
          height,
          weight,
          abilities,
          sprites: {
            M_back: data.sprites.back_default,
            M_front: data.sprites.front_default,
            M_back_shiny: data.sprites.back_shiny,
            M_front_shiny: data.sprites.front_shiny,
            F_back: data.sprites.back_female,
            F_front: data.sprites.front_female,
            F_back_shiny: data.sprites.front_shiny_female,
            F_front_shiny: data.sprites.back_shiny_female
          }
        }

        return pokemon
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des informations du Pokémon :', error)
        return of(null)
      })
    )
  }
}
