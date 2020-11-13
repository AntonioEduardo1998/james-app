import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstablishmentListComponent } from './pages/establishment-list/establishment-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstablishmentService } from './services/establishment.service';
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';
import { EstablishmentCreateComponent } from './pages/establishment-create/establishment-create.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentListComponent,
    HeaderComponent,
    EstablishmentCardComponent,
    EstablishmentCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [EstablishmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
