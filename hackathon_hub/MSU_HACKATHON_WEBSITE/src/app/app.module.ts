import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/LoginComponent';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from "@angular/common/http";

import { SelectorComponent } from './selector/selector.component';
import { StudentComponent } from './student/student.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SucessfulComponent } from './sucessful/sucessful.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { WinnersComponent } from './winners/winners.component';
import { RegisteredstudentsComponent } from './registeredstudents/registeredstudents.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    StudentComponent,
    OrganizerComponent,
    NavbarComponent,
    SucessfulComponent,
    RegisterComponent,
    FavoriteComponent,
    WinnersComponent,
    RegisteredstudentsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
