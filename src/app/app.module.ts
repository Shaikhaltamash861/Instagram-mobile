import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { StoryComponent } from './components/story/story.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MainComponent,
    StoryComponent,
    LayoutComponent,
    SearchPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
