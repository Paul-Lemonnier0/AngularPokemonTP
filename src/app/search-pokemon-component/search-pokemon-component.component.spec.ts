import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonComponentComponent } from './search-pokemon-component.component';

describe('SearchPokemonComponentComponent', () => {
  let component: SearchPokemonComponentComponent;
  let fixture: ComponentFixture<SearchPokemonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPokemonComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPokemonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
