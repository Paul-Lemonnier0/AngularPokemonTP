import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonIDService {
  private _selectedPokemonID$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() {}

  setSelectedPokemonID(value: string) {
    this._selectedPokemonID$.next(value)
  }

  get selectedPokemonID(): Observable<string> {
    return this._selectedPokemonID$
  }
}
