import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { ReadingbooksComponent } from './readingbooks/readingbooks.component';
import { ReadbooksComponent } from './readbooks/readbooks.component';
import { ReadingPlanComponent } from './readingPlan/readingPlan.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [					AppComponent,
      AllbooksComponent,
      ReadingbooksComponent,
      ReadbooksComponent,
      ReadingPlanComponent,
      BookComponent
   ],
  entryComponents: [],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
