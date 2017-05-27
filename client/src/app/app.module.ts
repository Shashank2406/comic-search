import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ComicComponent } from './comic/comic.component';
import { rou } from './app.route';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component'
import { ConnectService } from './connect.service';
import { SuperComponent } from './super/super.component';
import { AuthService } from './auth.service';
import { AdminComponent } from './admin/admin.component';
import { AuthadminService } from './authadmin.service';
import { SeasonComponent } from './season/season.component';
import { ComicAdminComponent } from './comic-admin/comic-admin.component';
import { DatePickerModule } from 'ng2-datepicker';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {Configuration} from "./config"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ComicComponent,
    WelcomeComponent,
    SearchComponent,
    SuperComponent,
    AdminComponent,
    SeasonComponent,
    ComicAdminComponent,
    AppComponent, FileSelectDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    RouterModule.forRoot(rou)
  ],
  providers: [ConnectService,AuthService,AuthadminService,Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
