import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Application components and services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './shared/core.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginComponent } from './form-login/components/login/login.component';
import { FormLoginModule } from './form-login/form-login-module';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    ViewQueueComponent,
  ],
  imports: [
    BrowserModule,
    FormLoginModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }