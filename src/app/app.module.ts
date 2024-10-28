import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPokemonComponentComponent } from './search-pokemon-component/search-pokemon-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokemonServiceService } from './pokemon-service.service';
import { provideHttpClient  } from '@angular/common/http';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { PokemonIDService } from './pokemon-id.service';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponentComponent,
    FilterPokemonPipePipe,
    PokemonComponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatOption,
    MatSelect
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    PokemonServiceService,
    PokemonIDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
