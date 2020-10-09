import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ResourcesComponent } from './resources/resources.component';
import { DevelopersComponent } from './developers/developers.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    SolutionsComponent,
    ResourcesComponent,
    DevelopersComponent,
    SignInComponent,
    CreateAccountComponent,
    BsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'developers', component: DevelopersComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: 'solutions', component: SolutionsComponent},
      {path: 'create-account', component: CreateAccountComponent},
      {path: 'sign-in', component: SignInComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
