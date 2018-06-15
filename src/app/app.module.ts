import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgLogoComponent } from './ng-logo/ng-logo.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

registerLocaleData(zh);
export const ROUTES: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'firstcom', component: FirstcomComponent },
  { path: 'nglogo', component: NgLogoComponent },
  { path: 'simple-form', component: SimpleFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstcomComponent,
    NgLogoComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
