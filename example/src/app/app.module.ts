import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeComponent } from './badge/badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { ButtonComponent } from './button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatButtonToggleModule } from 
    '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { ToggleComponent } from './toggle/toggle.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DividerComponent } from './divider/divider.component';
import {MatListModule} from '@angular/material/list'; 
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonComponent,
    AutocompleteComponent,
    ToggleComponent,
    DividerComponent,
    
  ],
  imports: [
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
