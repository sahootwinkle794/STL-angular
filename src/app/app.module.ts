import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { SakhyamComponent } from './pages/products/sakhyam/sakhyam.component';
import { DocumentMSystemComponent } from './pages/products/document-m-system/document-m-system.component';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';
// import { TestCodeNewComponent } from './test-code-new/test-code-new.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductsComponent,
    // TestCodeNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
