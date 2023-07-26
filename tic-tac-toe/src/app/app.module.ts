import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//fontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//toaster
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
