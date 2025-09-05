import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { LayoutComponent } from './layout/layout.component';
import { SistemaModule } from './sistema/sistema.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './recuperar-senha/esqueci-senha/esqueci-senha.component';
import { ResetPasswordComponent } from './recuperar-senha/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    SistemaModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
