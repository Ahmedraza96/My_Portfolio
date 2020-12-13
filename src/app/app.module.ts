import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './mycomponents/top/top.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { PortfolioComponent } from './mycomponents/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
